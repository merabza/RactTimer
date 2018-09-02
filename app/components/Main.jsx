import React from "react";
import { Switch, Route } from 'react-router-dom'
import Nav from "Nav";

var Main = () => {
  return (
    <div>
      <Nav />
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            <Switch>
              {/* <Route exact path='/' component={Timer}/>
              <Route path='/Timer' component={Timer}/>
              <Route path='/CountDown' component={Countdown}/> */}
            </Switch>
          </div>
        </div>
    </div>
  );
};


module.exports = Main;