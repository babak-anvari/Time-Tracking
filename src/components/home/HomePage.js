import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => (
    <div className='jumbotron'>
        <h1>Time-Tracking Application</h1>
        <Link to='about' className='btn btn-primary btn-lg'>Learn more</Link>
    </div>
);