import React, { Fragment, useState, useEffect } from 'react';
import EditRequests from './EditRequests';

const ListRequests = ({ allRequests, setRequestsChange }) => {
    console.log(allRequests);
    const [requests, setRequests] = useState([allRequests]); // empty array

    //delete request function

    async function deleteRequest(id) {
        try {
            await fetch (`http://localhost:5000/dashboard/requests/${id}`, {
                method: 'DELETE',
                headers: {token: localStorage.token}
            });
            setRequests(requests.filter(request => request.request_id !== id));

        } catch (err) {
            console.error(err.message);
        }
    }


    useEffect(() => {
        setRequests(allRequests)
    }, [allRequests]);


    console.log(requests);

    return (
    <Fragment>
        <table className="table mt-5">
        <thead className="thead-light">
            <tr>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
         {
         requests.length !== 0 && requests[0].request_id !== null && 
            requests.map(request => (
             <tr key={request.request_id}>
                 <td>{request.description}</td>
                 <td><EditRequests request={request} setRequestsChange={setRequestsChange} /></td>
                 <td><button 
                 className="btn btn-danger"
                 onClick={() => deleteRequest(request.request_id)}>Delete</button></td>
             </tr>
         ))
         }
        </tbody>
        </table>
    </Fragment>
)};


export default ListRequests;