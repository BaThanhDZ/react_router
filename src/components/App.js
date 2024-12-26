import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import routes from '../route-config';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Nav';

function App() {
  function showRoute(routes) {
    let xhtml = null;

    if(routes.length > 0) {
      xhtml = routes.map((route, index) => {
        return (
          <Route key={index} exact={route.exact} path={route.path} component={route.main}/>
        )
      })
    }
    return <Switch>{xhtml}</Switch>;
  }
  return (
    <Router>
      <div className="App">
        <Header/>
        <Navigation/>
        {/* <Slider/>
        <ParaItem/> */}
        {showRoute(routes)}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
