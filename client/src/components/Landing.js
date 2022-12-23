import React, { Fragment } from 'react';
import { Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import ArticleFeed from './ArticleFeed';

const Landing = () => {
    return (
<Fragment>
        <div className="jumbotron mt-5">

            <h1>Welcome to Charles Vehicle Requests</h1>
            <p>Sign In to Request Parts or Vehicle Trasport</p>
            <Link to='/Login' className="btn btn-primary">Login </Link>
            <Link to='/Register' className="btn btn-primary ml-3">Sign up</Link>
     
        </div>

        <div className="jumbotron mt-5">
        <ArticleFeed/>
        </div>

        </Fragment>
    );
};



        

export default Landing;