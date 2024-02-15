import React from 'react'


// function Home({heading}) {
function Home(prop) {

  
    const name = "pankaj"
    const element = <h1>hello , {name}</h1>
  return (
    <div>
        <p>{element}</p>
        {/* <h2>this is an prope value,{heading}</h2> */}
        <h2>this is an prope value,{prop.heading}</h2>
        
    </div>
  )
}

export default Home
