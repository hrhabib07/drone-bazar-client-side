import "./App.css";
import Navigation from "./Shared/Navbar/Navigation";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Shared/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import Explore from "./Pages/Explore/Explore/Explore";
import Orders from "./Pages/Orders/Orders";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AdminControl from "./Pages/Admin/Admin/AdminControl";
import MyOrders from "./Pages/MyOrders/MyOrders";
import ProcessAfterReview from "./Pages/Orders/ProcessAfterReview";
import Registration from "./Pages/Login/Register/Registration";
import AdminRoute from "./Pages/Login/Login/AdminRoute/AdmiRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/processReview">
              <ProcessAfterReview />
            </Route>
            <PrivateRoute path="/myOrders">
              <MyOrders />
            </PrivateRoute>
            <AdminRoute path="/adminDashboard">
              <AdminControl />
            </AdminRoute>
            <Route path="/register">
              <Registration />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
