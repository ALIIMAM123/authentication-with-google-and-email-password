import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';


const SignUp = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {signUp}  = useUserAuth();

    let navigate = useNavigate();
  
    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(email,password)
        setError("");
        try{
      await signUp(email,password);
      navigate("/");
        }catch(err){
           setError(err.message)
        }

    }

    const handleGoogleSignIn = () => {
        alert("google")
    }
  return (
    <div className = "p-4 box">
      <h2 className='text-center' >Firebase Auth Login</h2>
      <Form onSubmit = {handleSubmit}>
      <Form.Group style = {{marginBottom: "20px"}}>
      <Form.Control 
      type = "email"
      placeholder = "Email Address"
      value = {email}
      onChange = {(e) => setEmail(e.target.value)}
      />
     
      </Form.Group>

      <Form.Group style = {{marginBottom: "20px"}}>
      <Form.Control 
      type = "password"
      placeholder = "Password"
      value = {password}
      onChange = {(e) => setPassword(e.target.value)}
      />
      </Form.Group>
      <div className="d-grid gap-2" style={{ display:"flex",alignItems:"center",justifyContent:"center" }}>
      <Button variant="primary" type="Submit" style = {{minWidth: "350px"}}>
        Sign Up
      </Button>
      </div>
      </Form>
      <hr/>
      <div className='button' style={{ display:"flex",alignItems:"center",justifyContent:"center" }}>
      <GoogleButton  className='g-btn' type = "dark" onClick = {handleGoogleSignIn}/>
      </div>
      <div className = "p-4 box mt-3 text-center">
       Don't havean account ?   <Link to ="/login">login</Link>
      </div>
    </div>
  );
}

export default SignUp;
