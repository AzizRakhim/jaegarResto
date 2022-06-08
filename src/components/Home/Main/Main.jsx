import React, { useEffect, useState } from 'react';
import "./Main.scss";

function Main(props) {
  const chooseHandler = (food) => {
    let num = props.chosen.filter(item => item.id === food.id);
    food.num = num.length + 1;
    props.setChosen([...props.chosen, food]);
  }

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
  ]

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
    setObj(temp);
  }, [])

  const filterHandler = (elId, elName) => {
    smth.forEach((item, index) => {
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
        {
          arr.map((item, index) => {
            return (
              <li 
                className='main__item' 
                key={"o" + index}>
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
          obj.map((food, index) => {
            return (
              <li className='main__food-item col-3' key={"c" + index}>
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
