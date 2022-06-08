import React from 'react';
import "./Management.scss";
import "../../../Home/Main/Main.scss";

function Management(props) {
  return (
    <div className='manage'>
      <div className='manage__header d-flex align-items-center justify-content-between'>
        <h2 className='manage__title'>
          Products Management
        </h2>
        <button className='manage__category-btn'>
          <i class='bx bx-slider-alt'></i>
          Manage Categories
        </button>
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
      <div className='manage__product-box'>
        <ul className='manage__product-list d-flex flex-wrap'>
          <li className='manage__product-item manage__add col-3'>
            <button className='manage__product-btn'>
              <i class='bx bx-plus'></i>
              Add new dish
            </button>
          </li>
          {
            props.obj.map((item, index) => {
              return (
                <li className='manage__product-item col-3'>
                  <button className='manage__product-btn'>
                    <div className='manage__img-box'>
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className='manage__product-info'>
                      <h3 className='manage__product-title'>
                        {item.title}
                      </h3>
                      <div className='manage__product-price-box d-flex align-items-center'>
                        <span className='manage__product-price'>
                          ${item.money}
                        </span>
                        <span className='manage__product-dot'>
                          •
                        </span>
                        <span className='manage__bowl'>
                            {item.theRest} Bowls
                        </span>
                      </div>
                    </div>
                    <button className='manage__btn-container'>
                      <i class='bx bx-edit-alt'></i>
                      Edit dish
                    </button>
                  </button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Management
