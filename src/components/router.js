import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import CrudFetch from "./crudFetch/crudFetch";
import CrudAxios from "./crudAxios/crudAxios";
import FakeCrud from "./fakeCrud/fakeCrud";
import HomeApi from "./crudApi/homeApi";
import Signin from "./crudApi/Auth/signin";
import Login from "./crudApi/Auth/login";

function Router() {

    const AuthRoute = ({ children }) => {
        if (localStorage.getItem('auth_token')) {
            return <Navigate to="/crud-api" />
        }
        return children
    };    

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/fake-crud" element={<FakeCrud />} />
                <Route path="/crud-fetch" element={<CrudFetch />} />
                <Route path="/crud-axios" element={<CrudAxios />} />
                <Route path="/crud-api" element={<HomeApi />} />
                <Route path="/crud-api-signin" element={<AuthRoute><Signin/></AuthRoute>} />
                <Route path="/crud-api-login" element={<AuthRoute><Login /></AuthRoute>} />
            </Routes>
    </BrowserRouter>
    )
} 
   
export default Router;