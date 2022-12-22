import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

import ArticleFeed from './ArticleFeed';

const Landing = () => {
    return (
<Fragment>
        <div className="jumbotron mt-5">

            <h1>Welcome to Charles Vehicle Requests</h1>
            <p>Sign In to Request Parts or Vehicle Trasport</p>
            
            <Link to='/login' className="btn btn-primary">Login</Link>
            <Link to='/register' className="btn btn-primary ml-3">Sign up</Link>
            
        </div>

        <div className="jumbotron mt-5">
        <ArticleFeed/>
        </div>

        </Fragment>
    );
};



        

export default Landing;