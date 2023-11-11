import { uploadVideoUrl } from "../../connects/connects-to-server-java";

export const handleUpload = async (selectedFile) => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
        const response = await fetch(uploadVideoUrl, {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        console.log("File uploaded successfully:", data);
        return data;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};