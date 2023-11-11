import '../../static/css/Registration.css';
import {useRegistration} from '../../api/v1/routes/auth/registration';

function Registration() {

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const {
        username,
        password,
        confirmPassword,
        role,
        setRole,
        userNameHandler,
        passwordHandler,
        passwordConfirmHandler,
        handleSubmitRegistration
    } = useRegistration();

    return (
        <div className="registration">
            <div className="signup">
                <div className="content">
                    <h2>Sign Up</h2>
                    <form className="form" onSubmit={handleSubmitRegistration}>
                        <div className="inputBox">
                            <input type="text" name="username" value={username}
                                   onChange={e => userNameHandler(e)} required/> <i>Username</i>
                        </div>
                        <div className="inputBox">
                            <input type="password" name="password" value={password}
                                   onChange={e => passwordHandler(e)} required/> <i>Password</i>
                        </div>
                        <div className="inputBox">
                            <input type="password" name="passwordConfirm" value={confirmPassword}
                                   onChange={e => passwordConfirmHandler(e)} required/> <i>ConfirmPassword</i>
                        </div>
                        <div className="div-for-radio">
                            <div className="form-radio-btn-reg">
                                <input id="radio-1" type="radio" name="radio" value="ROLE_WORKER" checked={role === 'ROLE_WORKER'} onChange={handleRoleChange}/>
                                <label htmlFor="radio-1">Worker</label>
                            </div>
                            <div className="form-radio-btn-reg">
                                <input id="radio-2" type="radio" name="radio" value="ROLE_ADMIN"  checked={role === 'ROLE_ADMIN'} onChange={handleRoleChange}/>
                                <label htmlFor="radio-2">Admin</label>
                            </div>
                            <br/><br/>
                        </div>
                        <div className="links"><a href="/login">Sign In</a> <a href="/">Main</a></div>
                        <div className="inputBox">
                            <input type="submit" value="Sign Up"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registration;