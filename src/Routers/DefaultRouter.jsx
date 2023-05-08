import { Redirect, Route } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

export default function DefaultRouter({ Children, ...rest }) {
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
