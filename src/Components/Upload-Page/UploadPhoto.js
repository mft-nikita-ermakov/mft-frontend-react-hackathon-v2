import React from "react";
import '../../static/css/Upload.css';
import useReturnImg from "../../api/v1/routes/upload-return/returnImg";

function UploadPhoto() {
    const {
        handleFileChange,
        handleSubmit,
        handleGetPhoto
    } = useReturnImg();

    return (
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
                <br/>
            </div>
            <div className="container-return-file-img">
                <img className="img-return-from-neuro" id="photo" />
                <button className="button-submit-get-video" onClick={handleGetPhoto}>Get photo</button>
            </div>
        </div>

    );
}

export default UploadPhoto;
