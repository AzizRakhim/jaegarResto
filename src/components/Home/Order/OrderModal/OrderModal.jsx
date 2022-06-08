import React from 'react';
import "./OrderModal.scss";

function OrderModal({check, setCheck}) {
  const buttonHandler = () => {
    setCheck(false);
  } 

  return (
    <div className='o-modal' style={{opacity : check ? "1" : "0", zIndex : check ? "9999" : "-999"}}>
      <div className='o-modal__boxshadow' style={{opacity : check ? "1" : "0", zIndex : check ? "9999" : "-999"}}></div>
      <div className='o-modal__box' style={{transform : check ? "translateX(0)" : "translateX(100%)"}}>
        <div className='o-modal__header'>
          <h3 className='o-modal__title'>
            Payment
          </h3>
          <p className='o-modal__methods'>
            3 payment method available
          </p>
        </div>
        <div className='o-modal__payment'>
          <h3 className='o-modal__payment-title'>
            Payment Method
          </h3>
          <ul className='o-modal__payment-list d-flex align-items-center'>
            <li className="o-modal__payment-item">
              <button className='o-modal__payment-btn active'>
                <i class='bx bx-credit-card'></i>
                Credit Card
                <span className='o-modal__active'>
                  <i class='bx bxs-check-circle'></i>
                </span>
              </button>
            </li>
            <li className="o-modal__payment-item">
              <button className='o-modal__payment-btn'>
                <i class='bx bx-credit-card'></i>
                Credit Card
              </button>
            </li>
            <li className="o-modal__payment-item">
              <button className='o-modal__payment-btn'>
                <i class='bx bx-credit-card'></i>
                Credit Card
              </button>
            </li>
          </ul>
        </div>
        <form className='o-modal__form'>
          <div className='o-modal__input-box'>
            <label htmlFor="o-modal__name" className='o-modal__label'>
              Cardholder Name
            </label>
            <input type="text" id='o-modal__name' className='o-modal__input' required placeholder='Levi Ackerman' />
          </div>
          <div className='o-modal__input-box'>
            <label htmlFor="o-modal__num" className='o-modal__label'>
              Card Number
            </label>
            <input type="number" id='o-modal__num' className='o-modal__input' required placeholder='2564 1421 0897 1244' />
          </div>
          <div className='o-modal__holder d-flex align-items-center'>
            <div className='o-modal__input-box col-6'>
              <label htmlFor="o-modal__date" className='o-modal__label'>
                Expiration Date
              </label>
              <input type="number" id='o-modal__date' className='o-modal__input' required placeholder='02/2022' />
            </div>
            <div className='o-modal__input-box col-6'>
              <label htmlFor="o-modal__cv" className='o-modal__label'>
                CVV
              </label>
              <input type="password" id='o-modal__cv' className='o-modal__input' required placeholder='...' />
            </div>
          </div>
          <div className='o-modal__holder o-modal__border d-flex align-items-center'>
            <div className='o-modal__input-box col-6'>
              <label htmlFor="o-modal__type" className='o-modal__label'>
                Order Type
              </label>
              <select className='o-modal__select' name="o-modal__type" id="o-modal__type">
                <option value="dine in">
                  Dine in
                </option>
                <option value="to go">
                  to go
                </option>
                <option value="delivery">
                  Delivery
                </option>
              </select>
            </div>
            <div className='o-modal__input-box col-6'>
              <label htmlFor="o-modal__table" className='o-modal__label'>
                CVV
              </label>
              <input type="number" id='o-modal__table' className='o-modal__input' required placeholder='140' />
            </div>
          </div>
          <div className='o-modal__submit-holder d-flex'>
            <button className='o-modal__cancel' type='button' onClick={buttonHandler}>
              Cancel
            </button>
            <button className='o-modal__confirm' type='submit'>
              confirm payment
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default OrderModal
