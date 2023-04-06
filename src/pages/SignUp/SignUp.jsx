import "./SignUp.css";
import PagePath from "../../components/PagePath/PagePath";
import Brands from "../../components/Brands/Brands";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function SignUp() {
  const [success, setSuccess] = useState(false);
  const [value, setValue] = useState({
    fullname: "",
    mail: "",
    pass: "",
    confPass: "",
  });
  const [warning, setWarning] = useState({
    fullname: " ",
    mail: " ",
    pass: " ",
    confPass: " ",
  });

  useEffect(() => {
    if (
      warning.fullname === "" &&
      warning.mail === "" &&
      warning.pass === "" &&
      warning.confPass === ""
    ) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }, [warning]);

  const handleMail = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });

    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
      setWarning({ ...warning, mail: "" });
    } else {
      setWarning({ ...warning, mail: "Invalid mail!" });
    }
    console.log(warning);
  };
  const handlePass = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    if (e.target.value.length < 8) {
      setWarning({
        ...warning,
        [e.target.name]: "Characters length must be greter 8 in length",
      });
    } else {
      if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
          e.target.value
        )
      ) {
        setWarning({
          ...warning,
          [e.target.name]:
            "Password must contains lower, upper char and special character",
        });
      } else {
        setWarning({ ...warning, [e.target.name]: "" });
      }
    }
  };
  const handleConfPass = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    if (e.target.value !== value.pass) {
      setWarning({ ...warning, [e.target.name]: "Password are not the same" });
    } else {
      setWarning({ ...warning, [e.target.name]: "" });
    }
  };
  const handleName = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    setWarning({ ...warning, [e.target.name]: "" });
  };

  return (
    <div className="signUp">
      <PagePath title="Sign Up" curPage="Sign Up" path="/signup" />
      <div className="signUp-part">
        <h1>Sign Up</h1>
        <form className="signUp-form">
          <input
            type="text"
            placeholder="Your Fullname"
            className="sUp-fullName"
            name="fullname"
            value={value.fullname}
            onChange={handleName}
            required
          />
          <span className="warning">{warning.fullname}</span>
          <input
            type="email"
            placeholder="Email Address"
            className="sUp-mail"
            name="mail"
            value={value.mail}
            onChange={handleMail}
            required
          />
          <span className="warning">{warning.mail}</span>
          <input
            type="password"
            placeholder="Password"
            className="sUp-pass"
            name="pass"
            value={value.pass}
            onChange={handlePass}
            required
          />
          <span className="warning">{warning.pass}</span>
          <input
            type="password"
            placeholder="Password"
            className="sUp-passAgain"
            name="confPass"
            value={value.confPass}
            onChange={(e) => {
              handleConfPass(e);
            }}
            required
          />
          <span className="warning">{warning.confPass}</span>
          <div className="acceptTerm">
            <input type="checkbox" />
            <label>
              I agree all statements of{" "}
              <Link to="/terms-conditions">
                <span>Terms and Conditions.</span>
              </Link>
            </label>
          </div>
          <Link to="/">
            <button type="submit" disabled={!success} className="submitSign">
              Sign Up
            </button>
          </Link>
        </form>
        <Link to="/login">
          <p className="toLogin">Do you have a account? Sign In</p>
        </Link>
      </div>
      <Brands />
    </div>
  );
}
