import React, { useState } from 'react';

export default function TextForm(props) {

  const handleCopyClick= ()=>{
    navigator.clipboard.writeText(text);
  }

  const handleClearClick = ()=>{
    setText('');
  }

  const handleLowClick = ()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked: " +  text);
    let newText = text.toUpperCase();
    setText(newText);
  }
    
  const handleOnChange=(event)=>{
      console.log("on change");
      setText(event.target.value);
  }

  const [text, setText] = useState('');
  const textPrev="Please Write in Above Text Area To Preview Your Text";

  return (
    <>
    <div className="m-4">
        <div>
        <h2 className="mb-4 text-center">Enter Your Text To Analyze</h2>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} placeholder="Enter Your Text"></textarea>
        <button className="btn btn-primary m-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary m-3" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary m-3" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary m-3" onClick={handleCopyClick}>Copy Text</button>
        </div>
        <div className="mt-4">
          <h2>Your Text Summary</h2>
          <p className="mt-3">{text.length===0 ? text.split(' ').length-1:text.split(' ').length} words and {text.length} characters</p>
          <h3>Preview</h3>
          <p>{text.length===0 ? textPrev : text}</p>
        </div>
    </div>
    </>
  )
}
