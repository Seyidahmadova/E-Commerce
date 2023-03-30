import "./SignUp.css";
import PagePath from "../../components/PagePath/PagePath";
import Brands from "../../components/Brands/Brands";
import { Link } from "react-router-dom";

export default function SignUp() {
    return(
        <div className="signUp">
            <PagePath title="Sign Up" curPage="Sign Up" path="/signup"/>
            <div className="signUp-part">
                <h1>Sign Up</h1>
                <form className="signUp-form">
                    <input type="text" placeholder="Your Fullname" className="sUp-fullName" required />
                    <input type="email" placeholder="Email Address" className="sUp-mail" required />
                    <input type="password" placeholder="Password" className="sUp-pass" required />
                    <input type="password" placeholder="Password" className="sUp-passAgain" required />
                    <div className="acceptTerm">
                        <input type="checkbox"/>
                        <label>I agree all statements of <Link to="/terms-conditions"><span>Terms and Conditions.</span></Link></label>
                    </div>
                    <Link to='/'><button type="submit" className="submitSign">Sign Up</button></Link>
                </form>
                <Link to="/login"><p className="toLogin">Do you have a account? Sign In</p></Link>
            </div>
            <Brands/>
        </div>
    );
}