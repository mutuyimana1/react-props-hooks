import React, { useState } from 'react'
import './check.css'

const Check = () => {

    let [names, setNames] = useState("");
    
let clicked = () =>{
    console.log("names:",names);
}
return (
    <div className='cont'>
        <div className='one'>
      <h1>
        Activate Your acount
      </h1></div>
      <div className='two'>
        <div className="form">
        <form onSubmit={(e) => {e.preventDefault()}}>
            <input type='text'
            value={names}
            onChange={(e) => setNames(e.target.value)}
            /><br />
            <button
            type='button'
            onClick={() => clicked()}
            >activate</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Check
