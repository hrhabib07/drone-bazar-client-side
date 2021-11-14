import "./App.css";
import Navigation from "./Shared/Navigation/Navigation";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Shared/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import Register from "./Pages/Login/Register/Register";
import Explore from "./Pages/Explore/Explore/Explore";
import AdminLogin from "./Pages/Admin/AdminLogin/AdminLogin";
import Orders from "./Pages/Orders/Orders";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AdminControl from "./Pages/Admin/Admin/AdminControl";
import MyOrders from "./Pages/MyOrders/MyOrders";

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
            <Route path="/adminLogin">
              <AdminLogin />
            </Route>
            <Route path="/myOrders">
              <MyOrders />
            </Route>
            <Route path="/adminInVeryEnglishSystem">
              <AdminControl />
            </Route>
            <Route path="/register">
              <Register />
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
