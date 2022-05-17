import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import CreateAccount from "./components/createaccount";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
import AllData from "./components/alldata";

const UserContext = React.createContext({
  currentUser: "john@mit.edu",
  users: [
    {
      name: "John Figueroa",
      email: "john@mit.edu",
      password: "secret",
      balance: 100,
    },
  ],
});

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="deposit" element={<Deposit />} />
        <Route path="withdraw" element={<Withdraw />} />
        <Route path="all-data" element={<AllData />} />
        <Route path="create-account" element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default App;
export { UserContext };
