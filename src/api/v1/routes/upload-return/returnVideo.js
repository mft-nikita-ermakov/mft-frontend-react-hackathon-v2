import { useEffect, useState } from "react";
import { handleUpload } from "./videoUpload";
import {returnVideoUrl} from "../../connects/connects-to-server-java";
import axios from "axios";

function useReturnVideo() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [message, setMessage] = useState('');
    const [video, setVideo] = useState('');

    useEffect(() => {
        fetch(returnVideoUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                setVideo(url);
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
        messageElement.innerText = message;
        messageElement.classList.add("custom-style-for-text-success");
        originalButton.replaceWith(messageElement);

        // Revert back to the button after 3 seconds
        setTimeout(() => {
            messageElement.replaceWith(originalButton);
        }, 1000);
    };

    const handleGetVideo = async () => {
        const res = await axios.get(returnVideoUrl, {
            responseType: "blob",
        });

        const video = new Blob([res.data], { type: "video/mp4" });
        const videoUrl = URL.createObjectURL(video);

        const videoPlayer = document.getElementById("videoPlayer");
        videoPlayer.src = videoUrl;
    };

    return {handleFileChange, handleSubmit, video, handleGetVideo}
}

export default useReturnVideo;