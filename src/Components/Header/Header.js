import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextApi/UserContext";

const Header = () => {
  const { user,logOutUser } = useContext(AuthContext);
  return (
    <div className="flex justify-around w-auto">
      <div className="navbar bg-primary text-primary-content">
        <Link className="btn btn-ghost normal-case font-bold text-2xl  lg:pl-8">
          HOTEL ALI
        </Link>
        <p className="text-teal-500 font-bold">Login user: {user?.email}</p>
      </div>
      <div className="navbar bg-primary text-primary-content">
        {user?.email && user?.uid ? (
          <>
            {" "}
            <Link to="/home" className="btn btn-ghost normal-case text-xl">
              Home
            </Link>
            <Link to="about" className="btn btn-ghost normal-case text-xl">
              About Us
            </Link>
            <Link to="orders" className="btn btn-ghost normal-case text-xl">
              Orders
            </Link>
            <Link onClick={logOutUser} to="/home" className="btn btn-ghost text-red-600 normal-case text-xl">
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="login" className="btn btn-ghost normal-case text-xl">
              Login
            </Link>
            <Link to="register" className="btn btn-ghost normal-case text-xl">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
