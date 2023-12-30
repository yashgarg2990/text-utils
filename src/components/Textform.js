import React, { useState } from 'react';

export default function Textform(props) {
  const funupper = () => {
    var updateText = text.toUpperCase();
    setText(updateText);
  };

  const funlower = () => {
    var updateText = text.toLowerCase();
    setText(updateText);
  };
  const funclear = () => {

    setText("");
  };

  const [text, setText] = useState("enter your text here ");

  const handleTextChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= 100) {
      setText(newText);
    }
  };

  return (
    <div>
      <div className={`container-fluid  bg-${props.mode==='light'?'light':'#'} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3 position-relative">
        <textarea
            className="form-control text-dark"
           
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleTextChange}
            maxLength={100}
          ></textarea>

          <p className="position-relative bottom-0 left-1000">
            {text.length}/100
          </p>
        </div>
        <button type="button" className="btn btn-success mx-1 my-3" onClick={funupper}>
          Convert to upper case
        </button>
        <button type="button" className="btn btn-primary mx-1 my-3" onClick={funlower}>
          Convert to lower case
        </button>
        <button type="button" className="btn btn-danger mx-1 my-3" onClick={funclear}>
          Clear 
        </button>
      </div>
    </div>
  );
}
