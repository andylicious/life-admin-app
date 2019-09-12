import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import './App.css';

import BacklogContainer from './containers/BacklogContainer';
import Header from './components/Header';
import TodoContainer from './containers/TodoContainer';

// Check for token
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   setAuthToken(localStorage.jwtToken);

//   // Decode token and get user info and exp
//   const decoded = jwt_decode(localStorage.jwtToken);

//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));

//   // Check for expired token
//   const currentTime = Date.now() / 1000;

//   if (decoded.exp < currentTime) {
//     store.dispatch(clearCurrentProfile);
//     store.dispatch(logoutUser);

//     window.location.href = '/login';
//   }
// }

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={TodoContainer} />
        <Route exact path="/backlog" component={BacklogContainer} />
      </Router>
    </div>
  );
}

export default App;
