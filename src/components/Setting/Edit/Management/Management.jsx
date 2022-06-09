import React, { useEffect, useState } from 'react';
import "./Management.scss";
import "../../../Home/Main/Main.scss";
import "../../../Home/Order/OrderModal/OrderModal.scss";
import ManageModal from './ManageModal/ManageModal';
import AddModal from './AddModal/AddModal';

function Management(props) {
  let [isTrue, setIsTrue] = useState(false);
  let [item, setItem] = useState({});
  let [check, setCheck] = useState(false);

  let smth = [
    {
      id : 1,
      name : "hot dishes",
      active : false
    },
    {
      id : 2,
      name : "cold dishes",
      active : false
    },
    {
      id : 3,
      name : "soup",
      active : false
    },
    {
      id : 4,
      name : "grill",
      active : false
    },
    {
      id : 5,
      name : "appetizer",
      active : false
    },
    {
      id : 6,
      name : "dessert",
      active : false
    }
  ];

  let [arr, setArr] = useState([]);
  let [obj, setObj] = useState([]);

  useEffect(() => {
    smth[0].active = true;
    setArr(smth);
  }, [setArr]);

  useEffect(() => {
    let temp = [];
    props.obj.forEach((item) => {
      if(item.foodType === "hot dishes"){
        temp.push(item);
      };
    });
    setObj(temp);
  }, [setObj])

  const editHandler = (item) => {
    setIsTrue(true);
    setItem(item);
  }

  const addHandler = () => {
    setCheck(true);
  }

  const filterHandler = (elId, elName) => {
    smth.forEach((item) => {
      if(item.id === elId){
        item.active = true;
      }
    })
    setArr(smth);

    let temp = [];
    props.obj.forEach((item) => {
      if(item.foodType === elName){
        temp.push(item);
      };
    });
    setObj(temp);
  }

  return (
    <>
      <div className='manage'>
        <div className='manage__header d-flex align-items-center justify-content-between'>
          <h2 className='manage__title'>
            Products Management
          </h2>
          <button className='manage__category-btn d-flex align-items-center'>
            <i class='bx bx-slider-alt'></i>
            Manage Categories
          </button>
        </div>
        <ul className='main__list d-flex'>
        {
          arr.map((item, index) => {
            return (
              <li 
                className='main__item' 
                key={"p" + index}>
                <button 
                  className={`main__item-link ${item.active ? "main__active" : ""}`}
                  onClick={() => filterHandler(item.id, item.name)}
                >
                  {item.name}
                </button>
              </li>
            )
          })
        }
        </ul>
        <div className='manage__product-box'>
          <ul className='manage__product-list d-flex flex-wrap'>
            <li className='manage__product-item manage__add col-3'>
              <button className='manage__product-btn' onClick={addHandler}>
                <i class='bx bx-plus'></i>
                Add new dish
              </button>
            </li>
            {
              obj.map((item, index) => {
                return (
                  <li className='manage__product-item col-3' key={"g" + index}>
                    <div className='manage__product-btn position-relative'>
                      <div className='manage__info-holder'>
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
                      </div>
                      <button className='manage__btn-container d-flex align-items-center' onClick={() => editHandler(item)}>
                        <i class='bx bx-edit-alt'></i>
                        Edit dish
                      </button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='o-modal__submit-holder d-flex'>
          <button className='o-modal__cancel' type='button'>
            Cancel
          </button>
          <button className='o-modal__confirm' type='button'>
            confirm changes
          </button>
        </div>
      </div>
      <ManageModal 
        isTrue={isTrue} 
        setIsTrue={setIsTrue}
        item={item}
        setItem={setItem}
        obj={props.obj}
        setObj={props.setObj}
      />
      <AddModal 
        check={check} 
        setCheck={setCheck} 
        obj={props.obj}
      />
    </>
  )
}

export default Management
