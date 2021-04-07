import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => (
    <div className="container">
        <h3>Time Management Web App</h3>
        <hr></hr>
        <div className="margin-top-20">
            <p>
                This is a simple time management web application implemented using Express/Node.js, MongoDB and React. <br></br>
                It is deployed on a Herokuapp server.
            </p>
            <p>Click on the link below to navigate the implementation code and learn more about the installation steps: </p>
        </div>
        <Link to={{ pathname: "https://github.com/babak-anvari/Time-Management-Software#readme" }} target="_blank" className='btn btn-primary btn-lg margin-top-20'>
            Learn more on GitHub
        </Link>
    </div>
);