import "./assets/styles/normalise.css";
import "./assets/styles/global.css";
import createScreenController from "./controllers/Screen";

// localStorage.clear(); // comment out when you need to reset
createScreenController();
console.log(localStorage);
console.log(JSON.parse(localStorage.getItem("projects")));
// console.log(Object.keys(JSON.parse(localStorage.getItem("projects"))));
