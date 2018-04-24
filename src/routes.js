import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import NewEntry from './components/NewEntry';
import Auth from './components/HOC/Auth';
import Login from './components/Login';
import Register from './components/Register';

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
      main: Auth(NewEntry),
      footer: () => <Footer />,
  },
  { path: '/register',
      header: () => <Header />,
      sidebar: null,
      main: () => <Register />,
      footer: () => <Footer />
  },
  { path: '/login',
      header: () => <Header />,
      sidebar: null,
      main: () => <Login />,
      footer: () => <Footer />,
  },
  { path: '/logout',
      header: () => <Header />,
      sidebar: null,
      main: () => <h2>logout</h2>,
      footer: () => <Footer />,
  },
];

export default routes;