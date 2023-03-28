import React, {useState} from 'react' 




export default function TextForm(props) {

const handleUpClick = () =>{
  setText(text.toUpperCase());
  props.showAlert("Convert to Uper Case" , "success")


}

const handleClear = () =>{
    setText('');
    props.showAlert("Clear Text Area Sucessfully" , "success")
  
  }

const handleLoClick = () =>{
    setText(text.toLowerCase());

    text.length !== 0 ? props.showAlert("Convert to Lower Case" , "success") :  props.showAlert("Please type input" , "danger")
  
  
  }

const handleOnChange = (event) =>{
   
    setText(event.target.value);
    
}


    const [text, setText] = useState('Enter Text Here');

  return (
 
    <>
      <div className="mb-3 container">
        <h1>{props.heading}</h1>

    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    <button className="btn btn-primary  mx-2 my-2" onClick={handleUpClick}>Convert to Upper Case </button>
    <button className="btn btn-primary mx-2 my-2 " onClick={handleLoClick}>Convert to Lower Case </button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear </button>
  </div>
  <div className="container">
    <h1>Text Detail </h1>
    <p>Number of Words :  {text.length === 0 ? '0' : text.split(" ").length} Number of characters : {text.length}</p>
  </div>
  </>
  )
}
