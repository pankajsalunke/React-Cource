import React from 'react'

function Example2() {
    let count = 5;
    let name = {
        firstName:"pankaj",
        lastName:"salunke"
    }
    let x = 23,y=30

    const numbers = [1,2,3,4,5];
    const doubled = numbers.map((number) => number*2)
    console.log(doubled);

    const object = {
        name: "John Doe",
        age: 30,
        address: "123 Main Street"
      };

      const properties = Object.keys(object).map((property) =>object[property])

      console.log(properties)
  return (
   <>
   <h1>Count: {count}</h1>
   <h1>{name.firstName} {name.lastName}</h1>
   <h3>Evaluating Expression</h3>
   <h3>{x}{">"}{y}{":"} {x>y ? 'true':'false'}</h3>
   </>
  )
}

export default Example2
