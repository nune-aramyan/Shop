import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Products from './pages/Products';
import About from './pages/About';
import FormLogin from './FormLogin';
import FormRegistr from './FormRegistr';
import initFirebase from './config'


import './App.css';


const routing = <Router>
    <Switch>
    <Route exact path="/" component={App} />
    <Route path="/home" component={Home} />
    <Route path="/categories" component={Categories} />
    <Route path="/products" component={Products} />
    <Route path="/about" component={About} />
    <Route path="/sign-in" component={FormRegistr} />
    <Route path="/sign-up" component={FormLogin} />

    </Switch>

</Router>
 
 initFirebase();

ReactDOM.render(routing, document.getElementById('root'));

