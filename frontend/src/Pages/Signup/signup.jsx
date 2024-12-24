import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClick = async () => {
    let result = await fetch("http://localhost:5000/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "aaplication/json",
      },
    });
    result = result.json();
    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    navigate("/", { replace: true });
    window.location.reload();

    console.log(result);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Signup;
