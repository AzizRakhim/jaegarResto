import React from 'react';
import "./Options.scss";

function Options() {
  return (
    <div className='option'>
      <ul className='option__list'>
        <li className="option__item d-flex">
          <div className='option__icon-holder'>
            <i class='bx bx-heart'></i>
          </div>
          <div className='option__info'>
            <h3 className='option__title'>
              Appereance
            </h3>
            <p className='option__text'>
              Dark and Light mode, Font size
            </p>
          </div>
        </li>
        <li className="option__item d-flex">
          <div className='option__icon-holder'>
            <i class='bx bx-store-alt'></i>
          </div>
          <div className='option__info'>
            <h3 className='option__title'>
              Your Restaurant
            </h3>
            <p className='option__text'>
              Dark and Light mode, Font size
            </p>
          </div>
        </li>
        <li className="option__item d-flex active">
          <div className='option__icon-holder'>
            <i class='bx bxs-offer' ></i>
          </div>
          <div className='option__info'>
            <h3 className='option__title'>
              Products Management
            </h3>
            <p className='option__text'>
              Manage your product, pricing, etc
            </p>
          </div>
        </li>
        <li className="option__item d-flex">
          <div className='option__icon-holder'>
            <i class='bx bx-bell'></i>
          </div>
          <div className='option__info'>
            <h3 className='option__title'>
              Notifications
            </h3>
            <p className='option__text'>
              Customize your notifications
            </p>
          </div>
        </li>
        <li className="option__item d-flex">
          <div className='option__icon-holder'>
            <i class='bx bx-lock-open'></i>
          </div>
          <div className='option__info'>
            <h3 className='option__title'>
              Security
            </h3>
            <p className='option__text'>
              Configure Password, PIN, etc
            </p>
          </div>
        </li>
        <li className="option__item d-flex">
          <div className='option__icon-holder'>
            <i class='bx bx-lock-open'></i>
          </div>
          <div className='option__info'>
            <h3 className='option__title'>
              Security
            </h3>
            <p className='option__text'>
              Configure Password, PIN, etc
            </p>
          </div>
        </li>
        <li className="option__item d-flex">
          <div className='option__icon-holder'>
            <i class='bx bx-info-circle'></i>
          </div>
          <div className='option__info'>
            <h3 className='option__title'>
              About Us
            </h3>
            <p className='option__text'>
              Find out more about Posly
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Options
