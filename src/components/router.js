import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import CrudApi from "./crudApi/crudApi";
import FakeCrud from "./fakeCrud/fakeCrud";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/fake-crud" element={<FakeCrud />} />
                <Route path="/crud-api" element={<CrudApi/>} />
            </Routes>
    </BrowserRouter>
    )
} 
   
export default Router;