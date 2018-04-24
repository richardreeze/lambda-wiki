import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';
import routes from './routes';
import Loading from './components/HOC/Loading';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/responsive-tweaks.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className='app container is-widescreen'>
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
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
