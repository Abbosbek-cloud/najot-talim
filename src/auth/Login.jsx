import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="signupWraper">
        <h2>Sign Up</h2>
        <form onSubmit={signUp}>
          <input type="text" name="username" />
          <input type="text" name="email" id="password" />
          <input type="text" name="password" id="password" />
        </form>
      </div>
    </div>
  );
};

export default Login;
