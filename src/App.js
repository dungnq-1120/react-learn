import "./App.css";
import { Switch, Route } from "react-router-dom";
import AuthRouter from "./component/AuthRouter";
function App() {
  return (
    <div>
      <Switch>
        <AuthRouter authen exact path="/dashboard" Children={Component} />
        <AuthRouter authen exact path="/about" Children={About} />
        <AuthRouter authen exact path="/contact" Children={Contact} />
        <Route exact path="/">
          HOME
        </Route>
        <Route exact path="/login">
          LOGIn
        </Route>
      </Switch>
    </div>
  );
}

export default App;

const Component = () => <h1>dashboard</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;
