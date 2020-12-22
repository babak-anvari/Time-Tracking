import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => (
    <div className='jumbotron'>
        <h2>Time Management</h2>
        <Link to='about' className='btn btn-primary btn-lg'>Learn more</Link>
    </div>
);