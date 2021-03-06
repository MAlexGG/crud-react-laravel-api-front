import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import CrudFetch from "../components/crudFetch/crudFetch";
import CrudAxios from "../components/crudAxios/crudAxios";
import FakeCrud from "../components/fakeCrud/fakeCrud";
import HomeApi from "../components/crudApi/homeApi";
import Signin from "../components/crudApi/Auth/signin";
import Login from "../components/crudApi/Auth/login";
import CrudCreateApiForm from "../components/crudApi/CrudCreateApiForm";
import CrudEditApiForm from "../components/crudApi/CrudEditApiForm";
import CrudApiDetail from "../components/crudApi/CrudApiDetail";

function Router() {

    const AuthRoute = ({ children }) => {
        if (localStorage.getItem('auth_token')) {
            return <Navigate to="/crud-api" />
        }
        return children
    };    

    const AuthCrud = ({ children }) => {
        if (!localStorage.getItem('auth_token')) {
            return <Navigate to="/crud-api-login" />
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

                <Route path="/crud-api" element={<AuthCrud><HomeApi /></AuthCrud>} />
                <Route path="/crud-api-signin" element={<AuthRoute><Signin/></AuthRoute>} />
                <Route path="/crud-api-login" element={<AuthRoute><Login /></AuthRoute>} />
                <Route path="/crud-api-form" element={<AuthCrud><CrudCreateApiForm /></AuthCrud>} />
                <Route path="/crud-api-edit-form/:id" element={<AuthCrud><CrudEditApiForm /></AuthCrud>} />
                <Route path="/crud-api-detail/:id" element={<CrudApiDetail/>}/>
            </Routes>
    </BrowserRouter>
    )
} 
   
export default Router;

