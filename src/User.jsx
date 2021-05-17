import React from "react";
import { Link } from "react-router-dom";
import "../Style/User.css";

const User = ({ user }) => {
  return (
    <div className="user">
      <div>
        <p>{user.name}</p>
        <Link to="">
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </Link>
      </div>
    </div>
  );
};

export default User;
