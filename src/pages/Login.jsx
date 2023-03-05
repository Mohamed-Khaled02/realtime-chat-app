import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h1 className="logo">Chat App</h1>
        <p className="title">login</p>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <button>Sign Up</button>
          {err && (
            <span style={{ color: "red", fontWeight: "bold" }}>
              somthing went wrong please try again
            </span>
          )}
        </form>
        <p>
          you don't have an account?{" "}
          <Link to="/register" className="register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
