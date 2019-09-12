import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';
import styled from 'styled-components';
import './App.css';
import { theme, Colors } from './theme';

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

const Container = styled.div`
  background-color: ${Colors.lightGrey};
  min-height: 100vh;
`;

function App() {
  return (
    <Container className="App">
      <MuiThemeProvider theme={theme}>
        <Header />
        <Router>
          <Route exact path="/" component={TodoContainer} />
          <Route exact path="/backlog" component={BacklogContainer} />
        </Router>
      </MuiThemeProvider>
    </Container>
  );
}

export default App;
