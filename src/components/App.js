import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../components/home/HomePage';
import { AboutPage } from '../components/about/AboutPage';
import Header from './header/Header';
import PageNotFound from './PageNotFound';
import TimesheetPage from './timesheet/TimesheetPage';
import UserPage from './user/UserPage';
import ProjectPage from './project/ProjectPage';

const App = () => (
    <div className='container-fluid'>
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/user' component={UserPage} />
            <Route path='/project' component={ProjectPage} />
            <Route path='/timesheet' component={TimesheetPage} />
            <Route component={PageNotFound} />
        </Switch>
    </div>
);

export default App;