import React, {useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearClick = () => {
    let newText = " ";
    setText(newText)
  }

  const handleRevClick = () => {
    let newText = (text) => {
      return text.split('').reverse().join('')
    } 
    setText(newText (text))
  }

  const handleSpeakClick = () => {
    let newText = new SpeechSynthesisUtterance();
    newText.text = text;
    window.speechSynthesis.speak(newText);    
  }

  const handleOnchange = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode === 'dark' ? 'gray':'white', color:props.mode === 'dark' ? 'white':'#365486'}} id="emyBox" rows="8"></textarea>
        </div> 
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleRevClick}>Reverse Text</button>
        <button className="btn btn-primary mx-2" onClick={handleSpeakClick}>Speak</button>
    </div>
    <div className="container my-3">
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters are here</p>
      <p>{0.008 *text.split(" ").length} minutes required to read this</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
    
  )
}
