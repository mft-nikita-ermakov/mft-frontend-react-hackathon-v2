import '../../static/css/Center.css';
import React from 'react';
function CenterHello() {
    return (

        <div className="ag-format-container">

            <div className="ag-courses_box">
                <div className="ag-courses_item">
                    <a href="/upload-photo" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>
                        <div className="ag-courses-item_title">
                            Go to the download page and select the photo.
                        </div>
                    </a>
                </div>

                <div className="ag-courses_item">
                    <a href="/upload-video" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>
                        <div className="ag-courses-item_title">
                            Go to the download page and select the video.
                        </div>
                    </a>
                </div>

                <div className="ag-courses_item">
                    <a href="#" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>
                        <div className="ag-courses-item_title">
                            Determination of the payload in real time.
                            Only mobile.
                        </div>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default CenterHello;