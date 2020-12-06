import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../components/home/HomePage';
import { AboutPage } from '../components/about/AboutPage';
import { Header } from './common/Header';
import PageNotFound from './PageNotFound';
import TimesheetPage from './timesheet/TimesheetPage';
import UserPage from './user/UserPage';

const App = () => (
    <div className='container-fluid'>
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/timesheet' component={TimesheetPage} />
            <Route path='/user' component={UserPage} />
            <Route component={PageNotFound} />
        </Switch>
    </div>
);

export default App;