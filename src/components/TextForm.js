import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState("");

  const onHandle = (e)=>{
    setText(e.target.value);
  }

  const toUpper = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success")
  }

  const toLower = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!", "success")
  }

  const clearText = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success")
    // console.log("clear clicked")
  }

  const copyText = ()=>{
    navigator.clipboard.writeText(text)
    props.showAlert("Copied to Clipboard!", "success")
  }

  const removeSpace = ()=>{
    let newText = text.split(/[ ]+/)
    console.log(newText)
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces!", "success")
  }

  return (
    <>
    <div className='mt-20'>
    <div className="heading">
      <h1 className='text-center text-xl sm:text-2xl md:text-3xl pt-5 pb-1'>Enter the text you want to analyze</h1>
      </div>
      <div className=" middle text-center mb-3 px-2 flex justify-center ">
        {/* <textarea className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name="myText" id="myText" cols="80" rows="15"></textarea> */}
      
      <textarea placeholder='Enter the text here' className={`bg-sky-100 block p-2.5 text-black   max-sm:w-11/12 max-md:w-10/12 max-lg:w-9/12 max-xl:w-8/12 max-2xl:w-7/12 duration-300 ease-in-out transition-[width] border-solid border-2 border-sky-300 border-collapse rounded-lg`} name="text" id="noId" cols="80" rows="10" value={text} onChange={onHandle}></textarea>
      </div>
      
      <div className="flex justify-center max-sm:items-center max-sm:flex-col">
      <button disabled={text.length===0} className='bg-sky-300 rounded-3xl max-sm:w-9/12 max-sm:mt-3 px-3 py-2 mx-3 disabled:opacity-90 disabled:cursor-not-allowed' onClick={toUpper}>Uppercase</button>
      <button disabled={text.length===0} className='bg-purple-400 rounded-3xl max-sm:w-9/12 max-sm:mt-3 px-3 py-2 mx-3 disabled:opacity-90 disabled:cursor-not-allowed' onClick={toLower}>Lowecase</button>
      <button disabled={text.length===0} className='bg-purple-400 rounded-3xl max-sm:w-9/12 max-sm:mt-3 px-3 py-2 mx-3 disabled:opacity-90 disabled:cursor-not-allowed' onClick={clearText}>Clear Text</button>
      <button disabled={text.length===0} className='bg-purple-400 rounded-3xl max-sm:w-9/12 max-sm:mt-3 px-3 py-2 mx-3 disabled:opacity-90 disabled:cursor-not-allowed' onClick={copyText}>Copy Text</button>
      <button disabled={text.length===0} className='bg-purple-400 rounded-3xl max-sm:w-9/12 max-sm:mt-3 px-3 py-2 mx-3 disabled:opacity-90 disabled:cursor-not-allowed' onClick={removeSpace}>Remove Extra Spaces</button>
      </div>
      

      <div className="flex flex-col items-center justify-center my-8">
        <h2 className='text-xl sm:text-2xl'>Your Text Summary</h2>
        <p className='my-2'>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
        <p className='my-2'>{0.008 * text.split(/\s+/).filter((e)=>{return e.length!==0}).length} Minutes to read</p>
        <h2 className='my-2 text-xl sm:text-2xl'>Preview</h2>
        <p className='my-2'>{text.length > 0 ? text :  "Nothing to preview here"}</p>
      </div>
      </div>
    </>
  )
}

