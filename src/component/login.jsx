import React, { useState } from "react";
import { Form,Button } from "react-bootstrap";
export function Login(){
    let [userName,setUserName]=useState("");
    let [password,setPassword]=useState("");
    let [email,setEmail]=useState("");
    let [phone,setPhone]=useState("");
    let errors={};
    let [error,setEror]=useState({userName:null,password:null,email:null,phone:null,message:null});
    let submitHandler=(e)=>{
        e.preventDefault();

        if(Validate()){
            let values ={userName,password,email,phone}
        }
        
       
    }
    
    let Validate=()=>{
      let regularrstr = /^[a-zA-Z]{3,15}$/;
      let regularrage = /^[0-9]{11}$/;
      let regularmail=/^([a-zA-Z0-9_]{3,15})@([a-zA-Z0-9]{2,10})\.([a-z]{2,7})$/
        
        if(!(userName.match(regularrstr))){
            errors.userName="username lenght must be >3 and string";
        }
        if(!(email.match(regularmail))){
          errors.email="Enter valid email";
      }
        if(password.length!=4){
          errors.password="password lenght must be 4 digit";
      }
      if(!(phone.match(regularrage))){
        errors.phone="phone lenght must be 11 digit";
    }
    else{
      errors.message="Submit Successed"
    }
        setEror(errors);

        return Object.keys(errors).length!=0?false:true
    }
    let getUserNameValue=(e)=>{
        setUserName(e.target.value)
    }
    let getUserpasswordValue=(e)=>{
      setPassword(e.target.value)
  }
  let getUserEmailValue=(e)=>{
    setEmail(e.target.value)
}
let getUserPhoneValue=(e)=>{
  setPhone(e.target.value)
}
    return(
    <div className="container bg-info pl-5">

   
        <Form className="text-left w-30 m-5 p-3" onSubmit={submitHandler}>
    <Form.Group className="text-right" controlId="formBasicName">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="text" placeholder="User Name" 
    value={userName}
    onChange={(event)=>getUserNameValue(event)}
    />
    <Form.Text className="text-danger">{error.userName}</Form.Text>
  </Form.Group>
  <Form.Group className="text-right">
    <Form.Label className="text-left">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" 
   value={email}
   onChange={(event)=>getUserEmailValue(event)}
   />
   <Form.Text className="text-danger">{error.email}</Form.Text>
  </Form.Group>

  <Form.Group className="text-right" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    value={password}
    onChange={(event)=>getUserpasswordValue(event)}
    />
    <Form.Text className="text-danger">{error.password}</Form.Text>
  </Form.Group>
  <Form.Group className="text-right" controlId="formBasicPhone">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="text" placeholder="Phone" 
   value={phone}
   onChange={(event)=>getUserPhoneValue(event)}
   />
   <Form.Text className="text-danger">{error.phone}</Form.Text>
   <Form.Text className="text-success">{error.message}</Form.Text>
  </Form.Group>
  <Button className="text-left m-3" variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
    )
}




