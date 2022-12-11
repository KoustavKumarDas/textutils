import React, { useState } from 'react';

export default function TextForm(props) {
    const handleAlternate = ()=> {
        var chars = text.toLowerCase().split("");
        for (var i = 0; i < chars.length; i += 2) {
          chars[i] = chars[i].toUpperCase();
        }
        setText(chars.join(""));
        props.showAlert('Text Alternated','success')
    }

    const handleClear = ()=> {
        console.log('Clear Text button was clicked' + text);
        let newText = '';
        setText(newText)
        props.showAlert('Text Cleared','danger')
    }

    const handleLowClick = ()=> {
        console.log('Lower case button was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleUpClick = ()=> {
        console.log('Upper case button was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    
    const handleOnChange = (event)=> {
        console.log('Handling on change')
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container mt-4" style={{backgroundColor: props.mode==='light'?'white':'black',color:props.mode==='dark'?'white':'black'}}>
                <form>
                    <h1>{props.heading}</h1>
                    <div className="form-group">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
                    </div>
                    <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='dark'?'dark':'primary'} m-1`} onClick={handleUpClick}>Convert To Uppercase</button>
                    <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='dark'?'dark':'primary'} m-1`} onClick={handleLowClick}>Convert To Lowercase</button>
                    <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='dark'?'dark':'primary'} m-1`} onClick={handleClear}>Clear Text</button>
                    <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='dark'?'dark':'primary'} m-1`} onClick={handleAlternate}>Alternating Text</button>

                </form>
            </div>
            <div className="container" style={{backgroundColor: props.mode==='light'?'white':'black',color:props.mode==='dark'?'white':'black'}}>
                <h2 className="mt-5">Your text Summary</h2>
                <p className="font-weight-bold mb-0">The text is</p>
                <p>{text===''?'Enter text to preview':text}</p>
                <p className="font-weight-bold mb-0">Character count is</p>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                <p className="font-weight-bold mb-0">Time required to read</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
            </div>
        </>
    )
}
