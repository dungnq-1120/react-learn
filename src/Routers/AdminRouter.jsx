import { Redirect, Route } from "react-router-dom";

export default function AuthRouter({ authen, author, Children, ...rest }) {
  if (!authen && !author) {
    return <Redirect to="/login" />;
  }
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return (
          <div>
            <Children />
          </div>
        );
      }}
    />
  );
}
