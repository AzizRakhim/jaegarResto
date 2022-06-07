import React from 'react'
import Main from '../Home/Main/Main'
import Navbar from '../Home/Navbar/Navbar'
import Order from '../Home/Order/Order'

function Setting(props) {
  return (
    <div>
      <Navbar />
      <Main 
        obj={props.obj}
        chosen={props.chosen}
        setChosen={props.setChosen} 
      />
      <Order 
        chosen={props.chosen}
        setChosen={props.setChosen}
      />
    </div>
  )
}

export default Setting
