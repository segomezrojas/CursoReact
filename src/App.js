import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import FilmsContextProvider from './contexts/FilmsContext';
import Detail_movieContextProvider from './contexts/Detail_movieContext';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import './assets/css/styles.css';
import NotFound from './components/NotFound';

const Films = lazy(() => import('./components/Films'));
const Detail_movie = lazy(() => import('./components/Detail_movie'));



const App = () => (

  <BrowserRouter>
  <Header />
  <Switch>
    <Suspense fallback={(<div><h1>Loading...</h1></div>)}>
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
      
    </Suspense>  
    <Route component={NotFound} />   
  </Switch>
  <Footer />
</BrowserRouter>


);

App.displayName = 'App';

export default App;