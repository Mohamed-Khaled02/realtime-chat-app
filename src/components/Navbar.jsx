import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { auth } from "../auth/firebase";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="user" />
        <span className="name">{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
