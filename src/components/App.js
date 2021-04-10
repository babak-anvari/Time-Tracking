import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../components/home/HomePage';
import Header from './header/Header';
import PageNotFound from './PageNotFound';
import TimesheetPage from './timesheet/TimesheetPage';
import UserPage from './user/UserPage';
import ProjectPage from './project/ProjectPage';
import ActionItems from './actions/ActionItems';
import ProjectReportPage from './project/ProjectReportPage';

const App = () => (
    <div className='container-fluid'>
        <Header />
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/user' component={UserPage} />
            <Route path='/timesheet' component={TimesheetPage} />
            <Route path='/action' component={ActionItems} />
            <Route path='/project' exact component={ProjectPage} />
            <Route path='/project/:id' component={ProjectReportPage} />
            <Route component={PageNotFound} />
        </Switch>
    </div>
);

export default App;