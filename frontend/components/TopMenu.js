import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TopMenu = () => {
  const { user } = useSelector((state) => state.user);

  if (user.token) {
    return (
      <div>
        <nav>
          <div>
            <Link
              to="/home"
              onClick={() => {
                localStorage.clear();
              }}
            >
              Home
            </Link>
            <a href="http://localhost:8888">Sign out</a>
          </div>
        </nav>
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <nav>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </nav>
        <hr />
      </div>
    );
  }
};

export default TopMenu;
