import React, { useState } from "react";
import { Link } from "react-router-dom";
import { name } from "../constants";
import "./contact.css";
function Contact() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const finalResult = {
    //   userName,
    //   email,
    // };
    setResult({ userName, email });
    console.log(result);
  };
  const Visiblity = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div style={{ marginTop: "200px" }} className="container">
      <div>
        <h4>number of subscribers: {count} </h4>
        <button onClick={handleClick}>subscribe</button>
        <button onClick={() => setCount(count - 1)}>unsubscribe</button>
      </div>
      <br />
      <button onClick={Visiblity}>{isVisible ? "hide" : "show"}</button>
      {isVisible && <h1>I am visible</h1>}
      <div>
        <input
          placeholder="enter username"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" onClick={handleSubmit} />
        <p>
          Welcome {result.userName} your email is: {result.email}
        </p>
      </div>
      <br />
      <textarea onChange={(e) => setText(e.target.value)} />
      <p>number of character is {text.length}</p>
      Contact This person {name}
      <Link to="/">Home</Link>
    </div>
  );
}

export default Contact;
