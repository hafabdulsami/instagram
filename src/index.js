import ReactDOM from "react-dom"
import { Provider } from "react-redux";
import App from "./App"
import "./indexx.css"
ReactDOM.render(  <React.StrictMode><Provider><App/></Provider> </React.StrictMode> , document.querySelector("#root"));