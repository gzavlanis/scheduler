import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";

const PrivateRoute = (props: RouteProps) => {
    const token = localStorage.getItem("auth");
    return <>{token ? <Route {...props} /> : <Navigate to="/login" />}</>;
}

export default PrivateRoute;