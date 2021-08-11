import React from "react";
import * as FaIcons from "react-icons/fa";
import "./Login.css";

function LoginForm() {
  return (
    <div className="form">
      <div className="form__box">
        <div className="form__left">
          <div className="form__padding">
            <FaIcons.FaRocket className="form__image" />
          </div>
        </div>
        <div className="form__right">
          <div className="form__padding-right">
            <form>
              <h1 className="form__title">Member Login</h1>
              <input className="form__email" type="email" placeholder="Email" />
              <input
                className="form__password"
                type="password"
                placeholder="******"
              />
              <input className="form__submit-btn" type="submit" value="Login" />
            </form>

            <p>
              <a className="form__link" href={"/signup"}>
                Create your account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
