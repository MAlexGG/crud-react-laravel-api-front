import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import CrudFetch from "./crudFetch/crudFetch";
import CrudAxios from "./crudAxios/crudAxios";
import FakeCrud from "./fakeCrud/fakeCrud";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/fake-crud" element={<FakeCrud />} />
                <Route path="/crud-fetch" element={<CrudFetch />} />
                <Route path="/crud-axios" element={<CrudAxios />}/>
            </Routes>
    </BrowserRouter>
    )
} 
   
export default Router;