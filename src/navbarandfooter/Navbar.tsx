import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";

export const Navbar = () => {

    const { token, logout } = useAuth();
    console.log('Token:', token);

    const handleLogout = () => {
        logout(); // Call the logout function
      };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="/">Home Page</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {token && (
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/vehicle">Vehicle</a>
                    </li>
                )}
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/favorites">My Favorites</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/contact">Notification</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/notification">Contact</a>
                </li>
            </ul>
            <ul className='navbar-nav ms-auto'>
            {token ? (
          <li className='nav-item m-1'>
            <button type='button' className='nav-link active' onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <li className='nav-item m-1'>
            <a type='button' className='nav-link active' href='/register'>Sign in</a>
          </li>
        )}
          </ul>
        </div>
    </div>
</nav>
  );
}