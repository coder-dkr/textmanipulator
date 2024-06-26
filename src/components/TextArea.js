import React,{useState} from 'react'

export default function TextArea(props) {
    let textareas = document.querySelector(".textfield")
    const [text,updateText] = useState('')

    const handleUppercase = (e)=>{
        e.preventDefault()
        let newText = text.toUpperCase()
        updateText(newText)
        props.showAlert("Converted to Upper Case!","success")
      
    }
    const handleLowercase = (e)=>{
        e.preventDefault()
        let newText = text.toLowerCase()
        updateText(newText)
        props.showAlert("Converted to Lower Case!","success  ")
    }
    const handleExtraspace = (e)=>{
        e.preventDefault()
        let newText = text.split(/[ ]+/)
        updateText(newText.join(" "))
        console.log("text trimed")
        props.showAlert("Extra Spaces Removed!","success  ")
    }
    const copytoclipBoard = (e)=>{
        e.preventDefault()
        textareas.select()
        document.execCommand("copy")
        document.getSelection().removeAllRanges()
        props.showAlert("copied to clipBoard","success  ")
    }
    const handleClear = (e)=>{
        e.preventDefault()
        let newText = ""
        updateText(newText)
        props.showAlert("Text Area Cleared","success  ")
    }
    const generateDemo = (e)=>{
        e.preventDefault();
        let newText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime veritatis accusantium quaerat nisi molestiae aut magni iure doloremque distinctio, libero ab labore vero molestias rerum, repudiandae tempore eaque vitae nobis aspernatur at accusamus aliquid itaque nostrum quidem! Totam alias voluptatum quae modi provident consequatur explicabo?"
        updateText(newText)

        props.showAlert("Demo Text Generated","success  ")
    }
    const handleOnChange = (e)=>{
        e.preventDefault()
        updateText(e.target.value)
    }
    return (
        <>
        <div className='container my-1' >
                <h2>{props.heading}</h2>
            <form className='my-3'>
                <div className="form-group">
                    <textarea value={text} onChange={handleOnChange} className={`form-control textfield bg-${props.mode} text-${props.mode === 'light'? 'dark' : 'light'}`} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button className="btn btn-success my-1 mx-1" onClick={generateDemo}>Generate Demo Text</button>
                <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUppercase}>To UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleLowercase}>To LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleExtraspace}>Remove ExtraSpace</button>
                <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={copytoclipBoard}>Copy to ClipBoard</button>
                <button disabled={text.length===0} className="btn btn-danger my-1  mx-1" onClick={handleClear}>Clear Text</button>
            </form>

            <div className={`container moreinfo my-1`}>
                <h3>Text Summary</h3>
                <p>Read Time: {text.split(/\s+/).filter(e=>{return e.length !== 0}).length*0.008}mins </p>
                <p>Number of characters: {text === " " ? (text.length - 1):(text.length)} , Number of Words:{text.split(/\s+/).filter(e=>{return e.length !== 0}).length}</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to Preview"}</p>

            </div>
            
        </div>
        </>
    )
}
