import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root")); // here "ReactDOM" this is known as virtual DOM
// creatRoot does is hydrate ur Dom with the Javascript
root.render(<App />); // here "<App />" is known as companent and this is know as rendering of component
