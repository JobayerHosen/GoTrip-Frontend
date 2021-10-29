import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Booking from "./components/Booking/Booking";
import Footer from "./components/Footer/Footer";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./contexts/AuthProvider";
import Spinner from "./components/Spinner/Spinner";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <HeaderNav></HeaderNav>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path="/spinner">
              <Spinner></Spinner>
            </Route>
            <Route exact path="*">
              <Home></Home>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
