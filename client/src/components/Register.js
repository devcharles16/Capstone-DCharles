import React, { Fragment, useState } from 'react';
import { Link, BrowserRouter as Router } from  'react-router-dom';
import { toast } from 'react-toastify';


const Register = ({ setAuth }) => {
    const [inputs, setInputs] = useState({
      email: "",
      password: "",
      name: ""
    });
  //destructure and allow field inputs
    const { email, password, name } = inputs;
  
    const onChange = e =>
      setInputs({ ...inputs, [e.target.name]: e.target.value });
  
    const onSubmitForm = async e => {
      e.preventDefault();
      try {
        //call register route from backend, set body and package response
        const body = { email, password, name };
        const response = await fetch(
          "http://localhost:5000/auth/register",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(body)
          }
        );
        //parse json response
        const parseRes = await response.json();

        if (parseRes.token){
            localStorage.setItem('token', parseRes.token);
        
            setAuth(true);
            toast.success('Registered successfully')  
            } else {
                setAuth(false);
                toast.error(parseRes);
            }
        } catch (err) {
            console.error(err.message);
        }
    };
//input form
    return (
      
        <Fragment>
            <h1 className="text-center my-5">Register</h1>
            <form onSubmit={onSubmitForm}>
                <input type="email" name="email" placeholder="email" className="form-control my-3" value={email} onChange={e => onChange(e)} />
                <input type="password" name="password" placeholder="password" className="form-control my-3" value={password} onChange={e => onChange(e)} />
                <input type="text" name="name" placeholder="name" className="form-control my-3" value={name} onChange={e => onChange(e)} />
                <button aria-label = "submit" className="btn btn-primary btn-block">Sign up</button>
            </form>
            <Router>
            <Link to="/Login">Login</Link>
            </Router>
        </Fragment>
    );
};

export default Register;