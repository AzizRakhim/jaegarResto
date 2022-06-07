import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.scss";

function Navbar() {
  return (
    <div className='navBar'>
      <div className='navBar__logo-box'>
        <Link to={"/"} className="navBar__logo-container">
          <i className='bx bxs-store-alt'></i>
        </Link>
      </div>
      <nav className='navBar__nav'>
        <ul className='navBar__list'>
          <li className="navBar__item">
            <NavLink to={"/"} className={({isActive}) => (isActive ? "navBar__link navBar__active" : "navBar__link")}>
              <div className='navBar__holder'>
                <i className='bx bx-home-alt'></i>
              </div>
            </NavLink>
          </li>
          <li className="navBar__item">
            <NavLink to={"/discount"} className={({isActive}) => (isActive ? "navBar__link navBar__active" : "navBar__link")}>
              <div className='navBar__holder'>
                <i className='bx bxs-discount'></i>
              </div>
            </NavLink>
          </li>
          <li className="navBar__item">
            <NavLink to={"/chart"} className={({isActive}) => (isActive ? "navBar__link navBar__active" : "navBar__link")}>
              <div className='navBar__holder'>
                <i className='bx bx-pie-chart-alt-2'></i>
              </div>
            </NavLink>
          </li>
          <li className="navBar__item">
            <NavLink to={"/mail"} className={({isActive}) => (isActive ? "navBar__link navBar__active" : "navBar__link")}>
              <div className='navBar__holder'>
                <i className='bx bx-envelope' ></i>
              </div>
            </NavLink>
          </li>
          <li className="navBar__item">
            <NavLink to={"/bell"} className={({isActive}) => (isActive ? "navBar__link navBar__active" : "navBar__link")}>
              <div className='navBar__holder'>
                <i class='bx bx-bell'></i>
              </div>
            </NavLink>
          </li>
          <li className="navBar__item">
            <NavLink to={"/setting"} className={({isActive}) => (isActive ? "navBar__link navBar__active" : "navBar__link")}>
              <div className='navBar__holder'>
                <i className='bx bx-cog' ></i>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='navBar__logout-box'>
        <Link to={"/"} className="navBar__logout-link">
          <i className='bx bx-log-in'></i>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
