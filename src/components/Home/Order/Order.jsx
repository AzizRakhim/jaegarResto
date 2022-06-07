import React, { useEffect, useState } from 'react';
import "./Order.scss";

function Order(props) {
  let [changed, setChanged] = useState([]);
  let [total, setTotal] = useState(0);

  useEffect(() => {
    let num = 0;
    props.chosen.forEach(item => {
      num += item.money;
    })
    setTotal(num);
    let temp = [...new Set(props.chosen.map(item => item))];
    setChanged(temp);
  }, [props.chosen]);

  const deleteHandler = (index) => {
    props.setChosen(props.chosen.filter((el) => el.id !== index));
    console.log(props.chosen);
    let temp = [...new Set(props.chosen.map(item => item))];
    setChanged(temp);
  }

  

  return (
    <div className='order'>
      <div className='order__filter'>
        <h3 className='order__title'>
          Orders #34562
        </h3>
        <ul className='order__list'>
          <li className="order__item">
            <button className='order__btn active'>
              dine in
            </button>
          </li>
          <li className="order__item">
            <button className='order__btn'>
              to go
            </button>
          </li>
          <li className="order__item">
            <button className='order__btn'>
              delivery
            </button>
          </li>
        </ul>
        <div className='order__list-info d-flex align-items-center'>
          <div className='order__title-item'>
            Item
          </div>
          <div className='order__qty'>
            Qty
          </div>
          <div className='order__price'>
            Price
          </div>
        </div>
        <ul className='order__item-list'>
          {
            changed.map((item, index) => {
              return (
                <li className='order__item-item' key={"d" + index}>
                  <div className='order__item-info d-flex align-items-center'>
                    <div className='order__item-img-box'>
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className='order__item-text-holder'>
                      <h4 className='order__item-title'>
                        {item.title}
                      </h4>
                      <span className='order__item-real-price'>
                        ${item.money}
                      </span>
                    </div>
                    <div className='order__item-num'>
                      {item.num}
                    </div>
                    <div className='order__item-price'>
                      ${(item.money * item.num).toFixed(2)}
                    </div>
                  </div>
                  <div className='order__item-input-box d-flex'>
                    <input type="text" name='note' className='order__item-input' placeholder='Order Note...' required />
                    <button className='order__item-btn' onClick={() => deleteHandler(item.id)}>
                      <i class='bx bx-trash-alt'></i>
                    </button>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className='order__price-box'>
          <div className='order__discount-box d-flex align-items-center justify-content-between'>
            <span className='order__num-title'>
              Discount
            </span>
            <span className='order__num'>
              $0
            </span>
          </div>
          <div className='order__total-box d-flex align-items-center justify-content-between'>
            <div className='order__num-title'>
              Sub total
            </div>
            <span className='order__num'>
              ${total.toFixed(2)}
            </span>
          </div>
          <button className='order__confirm-btn'>
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  )
}

export default Order
