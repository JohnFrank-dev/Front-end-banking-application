import React from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import Card from "./card";

function Login() {
  const [status, setStatus] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleLogin() {
    console.log(email, password);
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.currentUser = email;
  }

  function signOut() {
    setEmail("");
    setPassword("");
    ctx.currentUser = null;
  }

  return (
    <div className="px-3 py-3">
      <Card
        bgcolor="primary"
        header="Login"
        status={status}
        body={
          !ctx.currentUser ? (
            <>
              Email address
              <br />
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <br />
              Password
              <br />
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleLogin}
              >
                Login
              </button>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <p>You are loged in as {ctx.currentUser}</p>
              <button type="submit" className="btn btn-light" onClick={signOut}>
                Sign Out
              </button>
            </>
          )
        }
      />
    </div>
  );
}
export default Login;
