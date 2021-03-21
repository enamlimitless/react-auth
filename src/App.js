import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login';
import Book from './Components/Book/Book';
import NoMatch from './Components/NoMatch/NoMatch';
import { createContext, useState } from 'react';
import Home from './Components/Home/Home';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
        <p className="mr-auto">Name:{loggedInUser.name}</p>
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/book'>
            <Book></Book>
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
    </div>
  );
}

export default App;
