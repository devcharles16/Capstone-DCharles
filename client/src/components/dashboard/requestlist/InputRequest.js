import React, { Fragment, useState } from 'react';

const InputRequest = ({ setRequestChange }) => {

    const [description, setDescription] = useState('');
    
    const onSubmitForm  = async e => {
        e.preventDefault();
        try {

            const myHeaders = new Headers();

            myHeaders.append('Content-Type', 'application/json');
            myHeaders.append('token', localStorage.token);

            const body = { description };
            const response = await fetch('http://localhost:5000/dashboard/requests', 
            {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(body)
            });

            const parseResponse = await response.json();

            console.log(parseResponse);

            setRequestChange(true);
            setDescription('');

             window.location = "/";
        } catch (err) {
            console.error(err.message);
        }

    }
    return(
        <Fragment>
            <h1 className="text-center my-5">Enter Your Part or Transport Request</h1>
            <form className="d-flex" onSubmit={onSubmitForm}>
                <input 
                type="text" 
                placeholder="Enter Vehicle's Year, Make, and Model and Transport or Part Request" 
                className="form-control" 
                value={description} 
                onChange={e => setDescription(e.target.value)} 
                /> 
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
}

export default InputRequest;