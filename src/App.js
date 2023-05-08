import "./App.css";
import {
  Switch,
  Route,
  useParams,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";
import AuthRouter from "./Routers/AuthRouter";
function App() {
  return (
    <div>
      <Switch>
        <AuthRouter authen exact path="/dashboard" Children={Component} />
        <AuthRouter authen exact path="/about" Children={About} />
        <AuthRouter authen exact path="/contact" Children={Contact} />
        <AuthRouter
          authen
          exact
          path="/product/:category/:productId"
          Children={ProductDetail}
        />
        <Route exact path="/">
          HOME
        </Route>
        <Route exact path="/login">
          LOGIn
        </Route>
        <Route exact path="*">
          404 - NOT FOUND
        </Route>
      </Switch>
    </div>
  );
}

export default App;

const Component = () => <h1>dashboard</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;
const ProductDetail = () => {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();

  console.log(history);
  function handleGotoDashboard() {
    // history.push("/dashboard");
    // history.goBack();
    history.go(-1);
  }

  return (
    <div>
      <h1>ProductDetail- </h1>
      <button onClick={handleGotoDashboard}>Go to dashboard</button>
    </div>
  );
};
