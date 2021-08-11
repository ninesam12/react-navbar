import React from "react";
import './SignUp.css'

function SignUp() {
  return (
    <div className="form2">
      <div className="form2__box">
        <div className="form2__right">
          <div className="form2__padding-right">
            <form>
              <h1 className="form2__title">Member Register</h1>
              <input className="form2__username" type="text" placeholder="Username" />
              <input className="form2__email" type="email" placeholder="Email" />
              <input
                className="form2__password"
                type="password"
                placeholder="password"
              />
              <input
                className="form2__password"
                type="password"
                placeholder="confirm password"
              />
              <input className="form2__submit-btn" type="submit" value="Register" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
