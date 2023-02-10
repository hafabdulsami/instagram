import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from "react-redux";
import App from "./App"
import "./indexx.css"
import { store } from "./state/store";
ReactDOM.render( <><Provider store={store}><App/></Provider></> , document.querySelector("#root"));