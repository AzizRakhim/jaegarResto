import React, { useState } from 'react';
import "./ManageModal.scss";
import "../../../../Home/Order/OrderModal/OrderModal.scss";

function ManageModal(props) {
  let [tempTwo, setTempTwo] = useState(props.obj);

  const cancelHandler = () => {
    props.setIsTrue(false);
  }

  const nameHandler = (e) => {
    props.setItem({...props.item, title : e.target.value});
  }

  const priceHandler = (e) => {
    props.setItem({...props.item, money : e.target.value});
  }

  const bowlHandler = (e) => {
    props.setItem({...props.item, theRest : e.target.value});
  }

  const confirmIthandler = () => {
    tempTwo.forEach((item, index) => {
      if(item.id === props.item.id){
        item.id = props.item.id;
        item.title = props.item.title;
        item.money = +props.item.money;
        item.theRest = props.item.theRest;
      }
    })
    console.log(props.obj);
    props.setIsTrue(false);
  }

  return (
    <div className='m-modal' style={{opacity : props.isTrue ? "1" : "0", zIndex : props.isTrue ? "123" : "-123123"}}>
      <div className='m-modal__boxshadow' style={{opacity : props.isTrue ? "1" : "0", zIndex : props.isTrue ? "123" : "-123123"}}></div>
      <div className='m-modal__box' style={{transform : props.isTrue ? "translateX(0)" : "translateX(100%)"}}>
        <div className='m-modal__img-box'>
          <img src={props.item.img} alt={props.item.title} />
        </div>
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
              value={props.item.title} 
              onChange={nameHandler}
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
              value={props.item.money} 
              onChange={priceHandler}
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
              value={props.item.theRest} 
              onChange={bowlHandler}
            />
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
              onClick={confirmIthandler}
            >
              confirm change
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ManageModal
