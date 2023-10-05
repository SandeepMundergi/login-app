import React from "react";

const Navbar = ({ username }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Your App</div>
      <div className="navbar-user">
        <span className="username">{username}</span>
        <img
          src="https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png"
          alt="User Profile"
          className="profile-icon"
          width="50px"
        />
      </div>
    </nav>
  );
};

export default Navbar;
