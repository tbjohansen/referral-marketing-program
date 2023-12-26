import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages/Home";

// ?############## GUEST ELEMENTS ###########
const LoginElement = () => <SignIn />;
const RegisterElement = () => <SignUp />;
const HomeElement = () => (
    <Layout>
      <Home />
    </Layout>
  );

// ?############## PROTECTED ELEMENTS ###########
const OrdersElement = () => (
  <Layout>
    <Home />
  </Layout>
);



// !############## MAIN FUNC ###########
const App = () => {
  return (
    <React.Fragment>
      <Routes>
        {/* ################## GUEST ROUTES ################## */}
        <Route>
        <Route path="/" element={<HomeElement />} />
          <Route path="/sign-in" element={<LoginElement />} />
          <Route path="/sign-up" element={<RegisterElement />} />
        </Route>

        {/* ################## PROTECTED ROUTES ################## */}
        <Route>
          <Route path="/orders" element={<OrdersElement />} />

          {/* <Route
            path="/users/employees/:employeeId"
            element={<ViewEmployeeElement />}
          /> */}
          </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
