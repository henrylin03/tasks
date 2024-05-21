import { createAppController } from "../../App/createAppController";
import displayTasks from "./displayTasks";
import updateHeader from "./updateHeader";

const displayPage = (projectName) => {
  const app = createAppController();
  const project = app.getProject(projectName);

  updateHeader(project);
  displayTasks(project);
};

export default displayPage;
