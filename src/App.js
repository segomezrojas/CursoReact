import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import FilmsContextProvider from './contexts/FilmsContext';
import Detail_movieContextProvider from './contexts/Detail_movieContext';
import Header from './components/Common/Header';
import Films from './components/Films';
import Detail_movie from './components/Detail_movie';
import NotFound from './components/NotFound';
import Footer from './components/Common/Footer';
import './assets/css/styles.css';


const App = () => (

  <BrowserRouter>
  <Header />
  <Switch>
   <Route exact path='/'>
        <FilmsContextProvider>
            <Films />
        </FilmsContextProvider>
    </Route>
    <Route path='/film/details/:id'>
        <Detail_movieContextProvider>
            <Detail_movie />
        </Detail_movieContextProvider>
    </Route>
    <Route component={NotFound} />     
  </Switch>
  <Footer />
</BrowserRouter>


);

App.displayName = 'App';

export default App;