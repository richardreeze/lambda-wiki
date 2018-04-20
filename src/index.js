import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div className='container is-widescreen'>
            <Route path='/' component={Header} />
            <div className='bodyContainer container is-widescreen columns'>
                    <Route path='/' component={Nav} />
                    <Switch>
                        {/* <Route path='/' /> default page */}
                        {/* <Route path='/view/:title' /> view page */}
                    </Switch>
            </div>
            <Route path='/' component={Footer} />
        </div>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
