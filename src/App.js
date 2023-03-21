import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

import {connect} from 'react-redux';

import Header from './Components/Header/Header';

import Login from './Containers/Login/Login';
import Dashboard from './Containers/Dashboard/Dashboard';

import Footer from './Components/Footer/Footer';

function App(props) {
  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
       <div className="App">

        {/* here goes components, switch and route */}

        <Header></Header>

        <Switch>

          {/* <Route path='/' component={Login}></Route> */}

          <Route path='/' render={(routeProps) => props.loggedStatus 
                                                  ? 
                                                  <Dashboard {...routeProps}/>
                                                  :
                                                  <Login/>
          }/>

          

        </Switch>

        <Footer></Footer> 
      
      </div>
    </BrowserRouter>
   
  );
}

const mapGlobalToProps = (globalState) => {
  return {
    loggedStatus: globalState.loggedIn
  }
}


export default connect(mapGlobalToProps)(App);
