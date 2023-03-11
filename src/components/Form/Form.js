import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validate, setValidate] = useState(false);
  const handleEmail = (e) => {
    let value = e.target.value;
    if (!value.includes("@")) {
      e.target.classList?.remove("green");
      e.target.classList.add("red");
      document.querySelector(".e").classList.remove("hide");
      setValidate(false);
    } else {
      e.target.classList.add("green");
      e.target.classList.remove("red");
      document.querySelector(".e").classList.add("hide");
      setValidate(true);
    }
    setEmail(value);
  };
  const handlePassword = (e) => {
    let value = e.target.value;
    if (value.length < 8) {
      e.target.classList.remove("green");
      e.target.classList.add("red");
      document.querySelector(".p").classList.remove("hide");
      setValidate(false);
    } else {
      e.target.classList.add("green");
      e.target.classList.remove("red");
      document.querySelector(".p").classList.add("hide");
      setValidate(true);
    }
    setPassword(value);
  };
  const handleConfirmPassword = (e) => {
    let value = e.target.value;
    if (value !== password) {
      e.target.classList.remove("green");
      e.target.classList.add("red");
      document.querySelector(".cp").classList.remove("hide");
      setValidate(false);
    } else {
      e.target.classList.add("green");
      e.target.classList.remove("red");
      document.querySelector(".cp").classList.add("hide");
      setValidate(true);
    }
    setConfirmPassword(value);
  };
  const handleClick = (e) => {
    if (validate) alert("Form Submitted Successfully");
    else {
      alert("Form cannot be submitted");
    }
  };

  return (
    <div>
      <form>
        <label>Email:</label>
        <br />

        <input type={"email"} onChange={(e) => handleEmail(e)} />
        <p className="e hide">Invalid Email</p>
        <br />
        <label>Password:</label>
        <br />
        <input type={"password"} onChange={(e) => handlePassword(e)} />
        <p className="p hide">Password must be atleast 8 character long</p>

        <br />
        <label>Confirm Password:</label>
        <br />
        <input type={"password"} onChange={(e) => handleConfirmPassword(e)} />
        <p className="cp hide">password mismatch</p>
        <br />
        <button onClick={(e) => handleClick(e)}>SignUp</button>
      </form>
    </div>
  );
};

export default Form;
