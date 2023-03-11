import "./Login.css";
import PagePath from "../../components/PagePath/PagePath";
import Brands from "../../components/Brands/Brands";
import { Link } from "react-router-dom";

export default function Login() {
    return(
        <div className="login">
            <PagePath title="My Account" curPage="My Account" path="/login"/>
            <div className="login-part">
                <h1>Login</h1>
                <form className="login-form">
                    <input type="mail" placeholder="Email Address" required />
                    <input type="password" placeholder="Password" required />
                    <p className="lForgotPass">Forgot your password?</p>
                    <Link to='/'><button>Sign In</button></Link>
                </form>
                <Link to="/singUp"><p className="toSignUp">Don't have a account? Sign Up</p></Link>
            </div>
            <Brands/>
        </div>
    );
}