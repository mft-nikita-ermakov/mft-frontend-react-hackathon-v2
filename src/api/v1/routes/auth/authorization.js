import {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import {useNavigate} from "react-router-dom";
import {authorizeUrl, decodeTokenUrl} from "../../connects/connects-to-server-java";
import axios from "axios";


export function useAuthorization() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [currentUsername, setCurrentUsername] = useState('');
    const navigate = useNavigate();

    const userNameHandler = (e) => {
        setUsername(e.target.value);
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };

    useEffect(() => {
        setCurrentUsername(username);
    }, [username]);

    console.log("currentUsername!!!:" + currentUsername)

    const handleSubmitAuthorization = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(authorizeUrl, {
                username,
                password
            });
            if (response.status === 200) {
                const responseData = response.data;
                Cookies.set('jwt', responseData.token, { expires: 7 }); // Expires in 7 days
                localStorage.setItem('currentUsername', currentUsername);

                const decodeResponse = await axios.post(decodeTokenUrl, {}, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${responseData.token}`,
                    },
                });

                if (decodeResponse.status === 200) {
                    const decodeData = decodeResponse.data;
                    Cookies.set('role', decodeData, { expires: 7 }); // Expires in 7 days
                    console.log('Decoded token-1:', decodeData);

                    if (decodeData === "[ROLE_ADMIN]") {
                        window.location.href = "/hello-admin"
                    } else if (decodeData === "[ROLE_WORKER]") {
                        window.location.href = "/hello"
                    }
                    else {
                        console.log('Authorization with unknown role');
                        navigate('/registration');
                    }
                } else {
                    console.log('Decode token request failed');
                    navigate('/registration');
                }
            } else {
                console.log('Authorization request failed');
                navigate('/registration');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getUsername = () => {
        console.log("getUsername!!!:" + currentUsername)
        return currentUsername;
    }

    return {
        username,
        password,
        userNameHandler,
        passwordHandler,
        handleSubmitAuthorization,
        getUsername
    };
}