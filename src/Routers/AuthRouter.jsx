import { Redirect, Route } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

export default function AuthRouter({ authen, Children, ...rest }) {
  if (!authen) {
    return <Redirect to="/login" />;
  }
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return (
          <div>
            <Header />
            <Children />
            <Footer />
          </div>
        );
      }}
    />
  );
}
