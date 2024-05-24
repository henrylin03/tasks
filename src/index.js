import "./assets/styles/normalise.css";
import "./assets/styles/global.css";
import createScreenController from "./controllers/Screen";
import { createAppController } from "./controllers/App/createAppController";

createAppController();
createScreenController();
