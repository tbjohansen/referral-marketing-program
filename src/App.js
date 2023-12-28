import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRoutes from "./routes/App.routes";
import { Toaster } from "react-hot-toast";
import useAuth from "./hooks/useAuth";


// !#################### MAIN FUNC ##################
const App = () => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const token = auth?.token || "";

  return (
    <React.Fragment>
      <Toaster />
      <AppRoutes />
    </React.Fragment>
  );
};

export default App;
