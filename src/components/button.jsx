import React from 'react'

const Button = ({btnName}) => {
    // let btnName=props.btnName
    // console.log(props.btnName)
  return (
    <div>
      <button style={{backgroundColor:"green", border:"none",padding:"10px", borderRadius:"5px"}}>
         {btnName}</button>
    </div>
  )
}

export default Button
