import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signUpDispatch } from "../redux/user";
import "./auth.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [vals, setVals] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const signUp = (e) => {
    e.preventDefault();
    dispatch(signUpDispatch({ ...vals, navigate }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVals({ ...vals, [name]: value });
  };
  return (
    <div className="signup">
      <div className="signupWraper">
        <h2>Sign Up</h2>
        <form onSubmit={signUp}>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            id="password"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="password"
            onChange={handleChange}
          />
          <button type="submit">Ro'yxatdan o'tish</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
