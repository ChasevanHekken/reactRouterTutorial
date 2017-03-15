import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/about" render={() => <h1>About</h1>} />
      <Route exact path="/contact" render={() => <h1>Contact</h1>} />
    </div>
  </Router>
);

export default App