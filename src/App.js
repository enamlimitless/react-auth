import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login';
import NoMatch from './Components/NoMatch/NoMatch';
import { createContext, useState } from 'react';
import Home from './Components/Home/Home';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Destination from './Components/Destination/Destination';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/destination'>
            <Destination></Destination>
          </PrivateRoute>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
