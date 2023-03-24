import React ,{useState} from 'react'

export default function TextForm() {
    const uppercase=()=>{//Button-1
        let newText=text.toUpperCase();
        setText(newText)
      }
      const lowercase=()=>{//Button-2
        let newText=text.toLowerCase();
        setText(newText)
      }
      const remove=()=>{//Button-3
        let newText='';
        setText(newText)
      }
     
    
      const handleOnChange=(event)=>{//Text area
        setText(event.target.value)
      }
  const[ text , setText]=useState();
  return (
    <>
    <div>
        <h1>Enter text to Edit</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
        </div>
        <button type="button" className="btn btn-secondary" onClick={uppercase}>Convert to Uppercase</button>
        <button type="button" className="btn btn-secondary mx-1" onClick={lowercase}>Convert to Lowercase</button>
        <button type="button" className="btn btn-secondary mx-1"onClick={remove}>Clear All</button>

    </div>
    <div className="container my-3">
        <h2>Text Information</h2>
        <p>Total number of words :{text.split(" ").length} </p>
        <p>Total number of characters :{text.length}</p>
        <p>Approximate time to slow reader : {text.split(" ").length*0.003} minutes</p>
        <p>Approximate time to average reader : {text.split(" ").length*0.005} minutes</p>

    </div>

    </>
    
    
        
    
    
    
  )
}
