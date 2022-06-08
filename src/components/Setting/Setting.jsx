import React from 'react'
import Main from '../Home/Main/Main'
import Navbar from '../Home/Navbar/Navbar'
import Order from '../Home/Order/Order'
import Edit from './Edit/Edit'

function Setting(props) {
  return (
    <div>
      <Navbar />
      <Edit obj={props.obj} />
    </div>
  )
}

export default Setting
