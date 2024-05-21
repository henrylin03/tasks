import "./assets/styles/normalise.css";
import "./assets/styles/global.css";
import createScreenController from "./controllers/Screen";
import { projectNameExists } from "./helpers/localStorageHelpers";

// localStorage.clear(); // comment out when you need to reset
createScreenController();
console.log(localStorage);
projectNameExists("hello");
