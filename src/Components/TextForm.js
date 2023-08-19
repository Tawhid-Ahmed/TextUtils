import React, {useState} from 'react';
import PropTypes from 'prop-types';
export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("uppercase was click");
        //setText("you have clicked on handleUP Click")
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase","success")
    }
    const handlelowClick=()=>{
        console.log("uppercase was click");
        //setText("you have clicked on handleUP Click")
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase","success")
    }
    const handleChange=(event)=>{
        console.log("handle change was click");
        setText(event.target.value);
    }
    const clearClick=()=>{
        //setText("you have clicked on handleUP Click")
        
        setText("");
        props.showAlert("Clear text","success")
    }
    const reverseClick=()=>{
        console.log("uppercase was click");
        //setText("you have clicked on handleUP Click")
        setText(text.split("").reverse().join(""));
        props.showAlert("Reverse text","success")
    }
    const capitalClick=()=>{
        console.log("uppercase was click");
        //setText("you have clicked on handleUP Click")
        let words=text.split(".");
        
      
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);

        }
        console.log(words)
        let cap=words.join(".");
        

        setText(cap);
        props.showAlert("Capitalized text","success")
    }


    const [text, setText] = useState("");
  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h1>{props.header}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={clearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={reverseClick}>Reverse Text</button>
        <button className="btn btn-primary mx-2" onClick={capitalClick}>Capitalize Word</button>

    </div>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h1>Your Text Summary</h1>
        <p>Number of words {text.trim().split(/\s+/).length} and number of characters{text.length}</p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to preview"}</p>
    </div>
    </>
  )
}
TextForm.propTypes = { header: PropTypes.string.isRequired};
TextForm.defaultProps={ header: 'Set Header' };
