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
import AllEvents from "./components/AllEvents/AllEvents";
import NotFound from "./components/NotFound/NotFound";
import MyOrders from "./components/MyOrders/MyOrders";
import ManageOrders from "./components/ManageOrders/ManageOrders";
import AddEvent from "./components/AddEvent/AddEvent";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

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
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/allEvents">
              <AllEvents></AllEvents>
            </Route>
            <PrivateRoute exact path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/addEvent">
              <AddEvent></AddEvent>
            </PrivateRoute>
            <Route exact path="/about">
              <WhyChooseUs></WhyChooseUs>
            </Route>
            <Route exact path="/spinner">
              <Spinner></Spinner>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
