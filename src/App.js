import React from 'react';
import TodoContainer from './containers/TodoContainer';
import './App.css';

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
      <TodoContainer />
    </div>
  );
}

export default App;
