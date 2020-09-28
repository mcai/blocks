import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import {SimpleTodoApp} from "./apps/SimpleTodoApp/SimpleTodoApp";
import {StylesDemo} from "./styles/StylesDemo";

ReactDOM.render(
  <React.StrictMode>
      <Fragment>
          <SimpleTodoApp/>
          <StylesDemo/>
      </Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);
