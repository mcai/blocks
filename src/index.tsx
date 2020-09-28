import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import {SimpleTodoApp} from "./apps/SimpleTodoApp/SimpleTodoApp";

ReactDOM.render(
  <React.StrictMode>
      {/*<StylesDemo/>*/}
      <SimpleTodoApp/>
  </React.StrictMode>,
  document.getElementById('root')
);
