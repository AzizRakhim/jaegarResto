import React, { useState } from 'react';
import "../ManageModal/ManageModal.scss";
import "../../../../Home/Order/OrderModal/OrderModal.scss";
import "./AddModal.scss";

function AddModal(props) {
  let [addObj, setAddObj] = useState({
    id : "",
    title : "",
    img : "",
    money : "",
    theRest : "",
    num : "",
    foodType : ""
  });

  const nameHandler = (e) => {
    setAddObj({...addObj, title : e.target.value});
  }

  const priceHandler = (e) => {
    setAddObj({...addObj, money : Number(e.target.value)});
  }

  const bowlHandler = (e) => {
    setAddObj({...addObj, theRest : e.target.value});
  }

  const foodTypeHandler = (e) => {
    setAddObj({...addObj, foodType : e.target.value, id : props.obj.length + 1, img : `https://picsum.photos/id/${props.obj.length + 1}/172/172`, num : 1});
  }

  const submitHandler = (e) => {
    props.obj.push(addObj);

    setAddObj({
      id : "",
      title : "",
      img : "",
      money : "",
      theRest : "",
      num : "",
      foodType : ""
    })

    props.setCheck(false);
  }

  const cancelHandler = () => {
    props.setCheck(false)
  }

  return (
    <div className='m-modal' style={{opacity : props.check ? "1" : "0", zIndex : props.check ? "123" : "-123123"}}>
      <div className='m-modal__boxshadow' style={{opacity : props.check ? "1" : "0", zIndex : props.check ? "123" : "-123123"}}></div>
      <div className='m-modal__box' style={{transform : props.check ? "translateX(0)" : "translateX(100%)"}}>
        <h2 className='add-title'>
          Add Food
        </h2>
        <form className='m-modal__form'>
          <div className='m-modal__input-box'>
            <label htmlFor="m-modal__name" className='m-modal__label'>
              Name
            </label>
            <input 
              type="text" 
              name='m-modal__name' 
              className='m-modal__input' 
              required 
              placeholder='Name...'
              onChange={nameHandler}
              value={addObj.title}
            />
          </div>
          <div className='m-modal__input-box'>
            <label htmlFor="m-modal__price" className='m-modal__label'>
              Price $
            </label>
            <input 
              type="number" 
              name='m-modal__price' 
              className='m-modal__input' 
              required 
              placeholder='Price...'
              onChange={priceHandler}
              value={addObj.price}
            />
          </div>
          <div className='m-modal__input-box'>
            <label htmlFor="m-modal__bowl" className='m-modal__label'>
              Bowl available
            </label>
            <input 
              type="number" 
              name='m-modal__bowl' 
              className='m-modal__input' 
              required 
              placeholder='Bowl available...' 
              onChange={bowlHandler}
              value={addObj.bowl}
            />
          </div>
          <div className='m-modal__input-box'>
            <label htmlFor="m-modal__type" className='m-modal__label'>
              Food type
            </label>
            <select 
              name="m-modal__type" 
              id="m-modal__type" 
              className='m-modal__input' 
              required
              onChange={foodTypeHandler}
            >
              <option >Food Type</option>
              <option value="hot dishes">Hot Dishes</option>
              <option value="cold dishes">Cold Dishes</option>
              <option value="soup">Soup</option>
              <option value="grill">Grill</option>
              <option value="appetizer">Appetizer</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>
          <div className='o-modal__submit-holder m-modal__bottom d-flex'>
            <button 
              className='o-modal__cancel' 
              type='button'
              onClick={cancelHandler}
            >
              Cancel
            </button>
            <button 
              className='o-modal__confirm' 
              type='button'
              onClick={submitHandler}
            >
              confirm change
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddModal
