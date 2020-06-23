import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Login from '../src/components/Login';
import Register from '../src/components/Register';

function App() {
  return (
    <Router>
      <div className="container">
      
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      </div>
    </Router>
  );
}

export default App;
