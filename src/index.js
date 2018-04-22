import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import NewEntry from './components/NewEntry';
import Loading from './components/HOC/Loading';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const routes = [
    { path: '/',
        exact: true,
        header: () => <Header />,
        sidebar: () => <Nav />,
        main: () => <Welcome />,
        footer: () => <Footer />,
    },
    { path: '/new',
        header: () => <Header />,
        sidebar: null,
        main: () => <NewEntry />,
        footer: () => <Footer />,
    },
    { path: '/login',
        header: () => <Header />,
        sidebar: null,
        main: () => <h2>login</h2>,
        footer: () => <Footer />,
    },
    { path: '/logout',
        header: () => <Header />,
        sidebar: null,
        main: () => <h2>logout</h2>,
        footer: () => <Footer />,
    },
];

ReactDOM.render(
    <Router>
        <div className='container is-widescreen'>
            {routes.map((route, i) => (
                <Loading key={i} path={route.path} exact={route.exact} component={route.header} />
            ))}
            <div className='bodyContainer container is-widescreen is-marginless columns is-4'>
                {routes.map((route, i) => (
                    <Loading key={i} path={route.path} exact={route.exact} component={route.sidebar} />
                ))}
                {routes.map((route, i) => (
                    <Loading key={i} path={route.path} exact={route.exact} component={route.main} />
                ))}
            </div>
            {routes.map((route, i) => (
                    <Loading key={i} path={route.path} exact={route.exact} component={route.footer} />
            ))}
        </div>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
