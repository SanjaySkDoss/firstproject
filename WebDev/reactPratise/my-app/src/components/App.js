import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Info from "./info"
import Home from './home';


function App() {
  return (
    <Router>
      <Route path="/"  exact component={Home} />
      <Route path="/:id"  exact component={Info} />
    </Router>
  );
}

export default App;
