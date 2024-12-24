import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // console.log(email, password);

  const handleClick = async() => {
    let result = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    result = await result.json();
    localStorage.setItem("user", JSON.stringify({ email, password}));
    navigate("/", { replace: true });
    window.location.reload();

    console.log(result);
  }

  return (
    <div>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Login;