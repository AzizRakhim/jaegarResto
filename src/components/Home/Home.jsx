import React from 'react'
import Main from './Main/Main'
import Navbar from './Navbar/Navbar'
import Order from './Order/Order'

function Home(props) {
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

export default Home
