import { useEffect, useState } from "react";
import { handleUpload } from "./imgUpload";
import {returnImgUrl} from "../../connects/connects-to-server-java";
import axios from "axios";

function useReturnImg() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [message, setMessage] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        fetch(returnImgUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                setImage(url);
            });
    }, []);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await handleUpload(selectedFile);
            console.log("Response:", response);
            setMessage(response.message);
        } catch (error) {
            console.error("Error:", error);
        }
        // Temporarily replace the button with the message
        const originalButton = document.querySelector(".button-submit");
        const messageElement = document.createElement("h2");
        messageElement.innerText = "File uploaded successfully";
        // messageElement.innerText = message;
        messageElement.classList.add("custom-style-for-text-success");
        originalButton.replaceWith(messageElement);

        // Revert back to the button after 3 seconds
        setTimeout(() => {
            messageElement.replaceWith(originalButton);
        }, 1000);
    };

    const handleGetPhoto = async () => {
        const res = await axios.get(returnImgUrl, {
            responseType: "blob",
        });

        const photo = new Blob([res.data], { type: "img/png" });
        const photoUrl = URL.createObjectURL(photo);

        const photoElement = document.getElementById("photo");
        photoElement.src = photoUrl;
    };

    return {handleFileChange, handleSubmit, image, handleGetPhoto}
}

export default useReturnImg;
