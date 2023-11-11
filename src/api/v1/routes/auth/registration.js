import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {registrationUrl} from "../../connects/connects-to-server-java";

export function useRegistration() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setPasswordConfirm] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();
    const handleSubmitRegistration = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(registrationUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
                },
                body: JSON.stringify({ username, password, confirmPassword, role }),
            });
            if (response.ok) {
                navigate('/login');
            } else if (response.status === 400) {
                console.log('Registration failed');
                navigate('/error');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const userNameHandler = (e) => {
        setUsername(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const passwordConfirmHandler = (e) => {
        setPasswordConfirm(e.target.value)
    }

    return { username, setUsername, password, setPassword, confirmPassword, setPasswordConfirm, role, setRole, handleSubmitRegistration, userNameHandler, passwordHandler, passwordConfirmHandler };
}
