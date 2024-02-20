import React from 'react'
// import logo from '../assets/logo.jpg'
import logo from '../assets/react.svg'
function Example() {
    
  return (
    <>
    <div>
        <h3>ReactJS:</h3>
        <img src="https://images.pexels.com/photos/19467765/pexels-photo-19467765/free-photo-of-a-cup-of-coffee-standing-on-a-book-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="img"  width="120px"  height="120px" />
        <p>This is a javascript library for creating User interfaces .</p>

    </div>
    <h3>ReactJS:</h3>
    <div className='flex items-center justify-center'>
      <img src={logo} width="120" height="120"  />
     
      </div>
      <p>
        {" "}
        React is a JavaScript library for creating User Interfaces, open sourced
        to the world by Facebook and Instagram team in 2013.
        <br />
        React’s main goal is to make development of UI components easy and
        modular. It is intended to ease the process of building
        <br /> large applications using data that changes over time.
      </p>

  </>
  )
}

export default Example
