import React from "react";
import Header from "../Components/Index-Page/Header";
import Center from "../Components/Index-Page/Center";
import Footer from "../Components/Index-Page/Footer";
import Login from "../Components/Log-Reg-Page/Login";
import Registration from "../Components/Log-Reg-Page/Registration";
import HeaderHello from "../Components/Hello-Page/HeaderHello";
import FooterHello from "../Components/Hello-Page/FooterHello";
import CenterHello from "../Components/Hello-Page/CenterHello";
import HeaderHelloAdmin from "../Components/Hello-Admin-Page/HeaderHelloAdmin";
import UploadPhoto from "../Components/Upload-Page/UploadPhoto";
import UploadVideo from "../Components/Upload-Page/UploadVideo";

export function IndexPage() {
    return (
        <div>
            <Header/>
            <Center/>
            <Footer/>
        </div>
    );
}

export function LoginPage() {
    return (
        <div>
            <Login/>
        </div>
    );
}

export function RegistrationPage() {
    return (
        <div>
            <Registration/>
        </div>
    );
}

export function HelloPage() {
    return (
        <div>
            <HeaderHello/>
            <CenterHello/>
            <FooterHello/>
        </div>
    );
}

export function HelloAdminPage() {
    return (
        <div>
            <HeaderHelloAdmin/>
        </div>
    );
}

export function UploadPhotoPage() {
    return (
        <div>
            <HeaderHello/>
            <UploadPhoto/>
        </div>
    );
}

export function UploadVideoPage() {
    return (
        <div>
            <HeaderHello/>
            <UploadVideo/>
        </div>
    );
}