import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div className='appContainer'>
            <Route path='/' component={Header} />
            <div className='bodyContainer'>
                <Route path='/' component={Nav} />
                <Switch>
                    {/* <Route path='/' /> default page */}
                    {/* <Route path='/view/:title' /> view page */}
                </Switch>
            </div>
            {/* <Route path="/" component={} /> */}
        </div>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
