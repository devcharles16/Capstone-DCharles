import React, { Fragment, useState } from 'react';
import { Link, BrowserRouter as Router } from  'react-router-dom';
import { toast } from 'react-toastify';


const Login = ({setAuth}) => {

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const {email, password} = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    };

    const onSubmitForm = async e => {
        e.preventDefault();

        try {
            const body = {email, password}

            const response = await fetch ('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            //parse json response

            const parseRes = await response.json();

            if(parseRes.token) {
                localStorage.setItem('token', parseRes.token);

                setAuth(true);
                toast.success('Logged in!')
            } else {
                setAuth(false);
                toast.error(parseRes); 
            }



        } catch (err) {
            console.error(err.message);
        }
    }
//login form
    return (
        <Fragment>
            <h1 className="text-center my-5">Login</h1>
            <form onSubmit={onSubmitForm}>
                <input type="email" name="email" placeholder="email" className="form-control my-3" value={email} onChange={e => onChange(e)} />
                <input type="password" name="password" placeholder="password" className="form-control my-3" value={password} onChange={e => onChange(e)} />
                <button className="btn btn-primary btn-block">Submit</button>
            </form>
            <Router>
            <Link to="/register">Register</Link>
            </Router>
        </Fragment>
    );
};

export default Login;