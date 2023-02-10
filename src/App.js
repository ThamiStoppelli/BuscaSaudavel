import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Paths from "./routes";

import { GlobalStyle } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
        <ToastContainer className="toast-style" autoClose={4000} position="top-right" />
        <Paths />
    </BrowserRouter>
    </>
  );
}
