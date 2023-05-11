import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import DefaultRouter from "./Routers/DefaultRouter";
import AuthRouter from "./Routers/AuthRouter";
import Login from "./page/Login";
import About from "./page/About";
import Product from "./page/Product";
import { useState } from "react";
function App() {
  const [isAuthen, setIsAuth] = useState(false);

  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </header>

      <Switch>
        <DefaultRouter exact Children={About} path="/"></DefaultRouter>
        <DefaultRouter exact Children={Login} path="/login"></DefaultRouter>
        <AuthRouter Children={Product} path="/product" authen={isAuthen} />
      </Switch>
    </div>
  );
}

export default App;
