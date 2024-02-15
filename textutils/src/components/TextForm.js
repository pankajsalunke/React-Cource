import React, {useState} from 'react'

export default function TextForm(props) {
  const handelupclick = ()=>{
    //console.log('Upper case was clicked');
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const handelLoclick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
  }
 const handelCleclick = ()=>{
    let newtext = '';
    setText(newtext);
 }
  const handleOnChange = (event)=>{
   // console.log('you are in converting phase');
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
      <div>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
              <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="8"></textarea>  
            </div>  
            <button className='btn btn-primary mx-2' onClick={handelupclick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handelLoclick}>Convert to Lowercase</button>   
            <button className='btn btn-primary mx-2' onClick={handelCleclick}>clear text</button>   
      </div>
      <div className="coantainer">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length}words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Your text preview</h2>
        <p>{text}</p>
       
      </div>
    </>
  )
}
