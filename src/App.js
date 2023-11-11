import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {
    HelloAdminPage,
    HelloPage,
    IndexPage,
    LoginPage,
    RegistrationPage,
    UploadPhotoPage,
    UploadVideoPage
} from "./Pages/AllPages";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<IndexPage/>}/>
                    <Route path="/registration" element={<RegistrationPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/hello" element={<HelloPage/>}/>
                    <Route path="/hello-admin" element={<HelloAdminPage/>}/>
                    <Route path="/upload-photo" element={<UploadPhotoPage/>}/>
                    <Route path="/upload-video" element={<UploadVideoPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
