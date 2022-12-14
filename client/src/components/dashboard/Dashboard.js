import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

// components

import InputRequest from './requestlist/InputRequest';
import ListRequests from './requestlist/ListRequests';
 
const Dashboard = ({setAuth}) => {

    const [name, setName] = useState('');
    const [allrequests, setAllrequests] = useState([]);
    const [requestsChange, setrequestsChange] = useState(false);

    async function getProfile() {
        try {
            const response = await fetch('http://localhost:5000/dashboard/',{
                method: 'GET',
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();
            
            setAllrequests(parseRes);
            setName(parseRes[0].user_name);

        } catch (err) {
            console.error(err.message);
        }
    }

    const logout = (e) => {
        e.preventDefault(); 
        localStorage.removeItem('token');
        setAuth(false);

        toast.success('Logged out successfully');
    };
    
    useEffect(() => {
        getProfile();
        setrequestsChange(false);
    },[requestsChange]);

    return (
        <div>
            <div className="d-flex mt-5 justify-content-around">
                <h2>Hello {name}!</h2>
                <button className="btn btn-primary" onClick={e => logout(e)}>Logout</button>
            </div>
            <InputRequest setrequestsChange={setrequestsChange} />
            <ListRequests allrequests={allrequests} setrequestsChange={setrequestsChange} />
        </div>
    );
};

export default Dashboard;