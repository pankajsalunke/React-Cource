import React from 'react'

function Home() {
  // let counter = 15
  // let [counter, setCounter] = useState(10);

  // const addValue = () => {
  //   setCounter(counter+1)
  // setCounter(counter + 1);
  // setCounter(counter + 1);
  // setCounter(counter + 1);
  // setCounter(counter + 1);
  // setCounter(counter + 1);  // this is execute or updates only once

  // setCounter((prevCounter) => prevCounter+1)
  // setCounter((prevCounter) => prevCounter+1)
  // setCounter((prevCounter) => prevCounter+1) //update 3 times on one click
  // };

  // const removeVlaue = () => {
  //   setCounter(counter - 1);
  // };

  // if (counter >= 20) {
  //   console.log("You can`t increase counter value more than 20");
  // } else if (counter === 0) {
  //   console.log("You can`t decrease counter value less than 0");
  // }

  // console.log(counter);
  return (
    <>
     <div>
        <h1>Counter Project</h1>
      </div>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Increase</button>

      <button onClick={removeVlaue}>Decrease</button> 
    <p>hi</p>
    </>
  )
}

export default Home
