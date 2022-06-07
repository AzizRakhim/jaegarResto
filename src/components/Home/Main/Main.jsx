import React from 'react';
import "./Main.scss";

function Main(props) {
  const chooseHandler = (food) => {
    let num = props.chosen.filter(item => item.id === food.id);
    food.num = num.length + 1;
    props.setChosen([...props.chosen, food]);
  }

  return (
    <div className='main'>
      <div className='main__header d-flex align-items-center justify-content-between'>
        <div className='main__title-box'>
          <h2 className='main__title'>
            Jaegar Resto
          </h2>
          <p className='main__date'>
            Tuesday, 2 Feb 2021
          </p>
        </div>
        <div className='main__search-box d-flex align-items-center'>
          <i className='bx bx-search'></i>
          <input type="text" className='main__input' name='search' placeholder='Search for food, coffe, etc..' required />
        </div>
      </div>
      <ul className='main__list d-flex'>
        <li className='main__item'>
          <button className='main__item-link main__active'>
            hot dishes
          </button>
        </li>
        <li className='main__item'>
          <button className='main__item-link'>
            cold dishes
          </button>
        </li>
        <li className='main__item'>
          <button className='main__item-link'>
            soup
          </button>
        </li>
        <li className='main__item'>
          <button className='main__item-link'>
            grill
          </button>
        </li>
        <li className='main__item'>
          <button className='main__item-link'>
            appetizer
          </button>
        </li>
        <li className='main__item'>
          <button className='main__item-link'>
            dessert
          </button>
        </li>
      </ul>
      <div className='main__choose-box d-flex align-items-center justify-content-between'>
        <h3 className='main__choose'>
          Choose dishes
        </h3>
        <select name="eatType" className='main__eatType'>
          <option value="dineIn">
            Dine in
          </option>
          <option value="toGo">
            To go
          </option>
          <option value="delivery">
            Delivery
          </option>
        </select>
      </div>
      <ul className='main__food-list d-flex flex-wrap'>
        {
          props.obj.map((food, index) => {
            return (
              <li className='main__food-item col-4' key={"c" + index}>
                <div className='main__food-container' onClick={() => chooseHandler(food)}>
                  <div className='main__food-img-box'>
                    <img src={food.img} alt={food.title} />
                  </div>
                  <h4 className='main__food-title'>
                    {food.title}
                  </h4>
                  <span className='main__food-price'>
                    $ {food.money}
                  </span>
                  <p className='main__food-available'>
                    {food.theRest} Bowls available
                  </p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Main
