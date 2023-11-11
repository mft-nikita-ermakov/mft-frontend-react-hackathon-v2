import React from 'react';
import '../../static/css/Login.css';
import { useAuthorization } from '../../api/v1/routes/auth/authorization';

function Login() {
    const {
        username,
        password,
        userNameHandler,
        passwordHandler,
        handleSubmitAuthorization
    } = useAuthorization();

    return (
        <div className="login">
            <section>
                <div className="signin">
                    <div className="content">
                        <h2>Sign In</h2>
                        <form className="form" onSubmit={handleSubmitAuthorization}>
                            <div className="inputBox">
                                <input
                                    type="text"
                                    name="username"
                                    value={username}
                                    onChange={(e) => userNameHandler(e)}
                                    required
                                />
                                <i>Username</i>
                            </div>
                            <div className="inputBox">
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => passwordHandler(e)}
                                    required
                                />
                                <i>Password</i>
                            </div>
                            <div className="links">
                                <a href="/">Back Up</a>
                                <a href="/registration">Sign Up</a>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Login"/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
