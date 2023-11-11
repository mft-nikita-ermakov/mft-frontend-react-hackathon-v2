import '../../static/css/Center.css';
import React from 'react';
function Center() {

    return (

        <div className="ag-format-container">

            <div className="ag-courses_box">
                    <div className="ag-courses_item">
                        <a href="/login" className="ag-courses-item_link">
                            <div className="ag-courses-item_bg"></div>
                            <div className="ag-courses-item_title">
                                Determination of the payload by photo.
                            </div>
                        </a>
                    </div>


                <div className="ag-courses_item">
                    <a href="/login" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>
                        <div className="ag-courses-item_title">
                            Determination of the payload in real time.
                            Only for mobile.
                        </div>
                    </a>
                </div>

                <div className="ag-courses_item">
                    <a href="/login" className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>
                        <div className="ag-courses-item_title">
                            Determination of the payload by video.
                        </div>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Center;
