import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import ArticleFeed from '../ArticleFeed';

// components

import InputRequest from './requestlist/InputRequest';
import ListRequests from './requestlist/ListRequests';
 
const Dashboard = ({setAuth}) => {

    const [name, setName] = useState('');
    const [allRequests, setAllRequests] = useState([]);
    const [requestsChange, setRequestsChange] = useState(false);

    async function getProfile() {
        try {
            //get token correctly and get profile data back....user_name
            const response = await fetch('http://localhost:5000/dashboard/',{
                method: 'GET',
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();
            
            setAllRequests(parseRes);
            setName(parseRes[0].user_name);

        } catch (err) {
            console.error(err.message);
        }
    }
//logout
    const logout = (e) => {
        e.preventDefault(); 
        localStorage.removeItem('token');
        setAuth(false);

        toast.success('Logged out successfully');
    };
    
    useEffect(() => {
        getProfile();
        setRequestsChange(false);
    },[requestsChange]);

    return (
        <div>
            <div className="d-flex mt-5 justify-content-around">
                <h2>Hello {name}!</h2>
                <button className="btn btn-primary" onClick={e => logout(e)}>Logout</button>
            </div>
            <InputRequest setrequestsChange={setRequestsChange} />
            <ListRequests allRequests={allRequests} setRequestsChange={setRequestsChange} />

            <div className="jumbotron mt-5">
        <ArticleFeed/>
        </div>
        </div>
        
    );
    
};

export default Dashboard;