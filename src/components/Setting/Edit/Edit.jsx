import React from 'react'
import Management from './Management/Management'
import Options from './Options/Options'
import "./Edit.scss";

function Edit(props) {
  return (
    <div className='edit'>
      <h2 className='edit__title'>
        Settings
      </h2>
      <div className='edit__box d-flex'>
        <Options />
        <Management obj={props.obj} />
      </div>
    </div>
  )
}

export default Edit
