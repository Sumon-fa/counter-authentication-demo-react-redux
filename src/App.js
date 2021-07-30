import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { authActions } from "./store/redux";

import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const authentication = useSelector((state) => state.auth.isAuthentication);
  function loginHandler(e) {
    dispatch(authActions.login());
    e.preventDefault();
  }
  function logoutHandler() {
    dispatch(authActions.logout());
  }
  return (
    <React.Fragment>
      <Header authenticate={authentication} isLogout={logoutHandler} />
      {!authentication && <Auth onClick={loginHandler} />}
      {authentication && <UserProfile />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
