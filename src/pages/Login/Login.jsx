import "./Login.css";
import PagePath from "../../components/PagePath/PagePath";
import Brands from "../../components/Brands/Brands";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const [value, setValue] = useState({mail:'', pass:''});
    const handleChange = (e) => {
        setValue({...value, [e.target.name] : e.target.value});
    }
    return(
        <div className="login">
            <PagePath title="My Account" curPage="My Account" path="/login"/>
            <div className="login-part">
                <h1>Login</h1>
                <form className="login-form">
                    <input type="email" placeholder="Email Address" name="mail" value={value.mail} onChange={handleChange} required />
                    <input type="password" placeholder="Password" name="pass" value={value.pass} onChange={handleChange} required />
                    <p className="lForgotPass">Forgot your password?</p>
                    <Link to='/'><button type="submit">Sign In</button></Link>
                </form>
                <Link to="/signup"><p className="toSignUp">Don't have a account? Sign Up</p></Link>
            </div>
            <Brands/>
        </div>
    );
}