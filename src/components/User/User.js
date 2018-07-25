import React from 'react'

const User = (props) => {
  return (
    <div>
      <img src={props.photo} alt={''}/>
      <p>{props.firstName} {props.lastName}</p>
    </div>
  )
}

export default User;