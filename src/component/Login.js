import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import {Link,useNavigate} from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email,password)
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async(e) => {
      e.preventDefault();
      try{
            await googleSignIn();
            navigate("/home")
      }catch(err){
        setError(err.message)
      }
  };
  return (
    <div className="p-4 box">
      <h2 className="text-center">Firebase Auth Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group style = {{marginBottom: "20px"}}>
          <Form.Control
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group style = {{marginBottom: "20px"}}>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="d-grid gap-2 "  style={{ display:"flex",alignItems:"center",justifyContent:"center" }}>
          <Button variant="primary" type="Submit" style = {{minWidth: "350px"}}>
            Log In
          </Button>
        </div>
      </Form>
      <hr />
      <div   style = {{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <GoogleButton
          className="g-btn"
          type="dark"
          
          onClick={handleGoogleSignIn}
        />
      </div>
      <div className="p-4 box mt-3 text-center">Don't have an account? 
       <Link to ="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
