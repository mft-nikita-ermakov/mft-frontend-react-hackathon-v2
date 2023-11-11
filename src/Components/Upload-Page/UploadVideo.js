import React from "react";
import '../../static/css/Upload.css';
import useReturnVideo from  "../../api/v1/routes/upload-return/returnVideo"

function UploadVideo() {

    const {
        handleFileChange,
        handleSubmit,
        handleGetVideo
    } = useReturnVideo();



    return (
        <div>
            <div className="ag-format-container-form">
                <div className="ag-courses-box-form">
                    <form className="form-submit-file" onSubmit={handleSubmit}>
                        <input
                            className="input-upload-file"
                            type="file"
                            onChange={handleFileChange}
                        />
                        <button className="button-submit" type="submit">
                            Upload
                        </button>
                    </form>
                </div>
            </div>
            <div className="container-return-file-video">
                <video id="videoPlayer" controls></video>
                <button className="button-submit-get-video" onClick={handleGetVideo}>Get video</button>
            </div>
        </div>
    );
}

export default UploadVideo;
