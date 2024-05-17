import { createAppController } from "../../App/createAppController";
import displayTasks from "./displayTasks";
import updateHeader from "./updateHeader";

const displayProjectPage = (projectName) => {
  const app = createAppController();
  const project = app.getProject(projectName);

  updateHeader(project);
  displayTasks(project);
};

export default displayProjectPage;
