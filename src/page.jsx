import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import About from "./page/About";
import Product from "./page/Product";
import Contact from "./page/Contact";
export default function Page({ isAuth }) {
  if (!isAuth) {
    return <Redirect to={"/login"} />;
  }
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-[30%] h-screen bg-slate-200">
          <ul>
            <li>
              <NavLink activeClassName="nav--link__active" to="/about">
                About Page
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav--link__active" to="/login">
                login
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav--link__active" to="/product">
                Product Page
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav--link__active" to="/contact">
                Contact Page
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-[60%]">
          <Route path="/" exact>
            HOME
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/login">LOGIN</Route>
        </div>
      </div>
    </div>
  );
}
