import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Admin from './Components/Admin/Admin';
import CheckOut from './Components/CheckOut/CheckOut';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import DeleteProduct from './Components/DeleteProduct/DeleteProduct';
import EditProduct from './Components/EditProduct/EditProduct';

export const UserContex = createContext()

function App() {

  const [LogegInUser, setLogedInUser] = useState({});
  return (<UserContex.Provider value={[LogegInUser, setLogedInUser]}>

    <Router>

      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivetRoute path="/admin">
          <Admin></Admin>
        </PrivetRoute>
        <PrivetRoute path="/deletProduct">
          <DeleteProduct></DeleteProduct>
        </PrivetRoute>
        <PrivetRoute path="/editProduct">
        <EditProduct></EditProduct>
        </PrivetRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivetRoute path="/checkout/:id">
          <CheckOut></CheckOut>
        </PrivetRoute>
        <PrivetRoute path="/order">
          <Orders></Orders>
        </PrivetRoute>
      </Switch>

    </Router>
  </UserContex.Provider>

  );
}

export default App;
