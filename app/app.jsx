import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, IndexRoute, hashHistory } from "react-router-dom";
import Main from "Main";

// load foundation
require('style-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!foundation-sites/dist/css/foundation-float.min.css');

$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles')


ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('app')
);
