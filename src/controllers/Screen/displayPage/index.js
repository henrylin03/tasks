import { createAppController } from "../../App/createAppController";
import displayTasks from "./displayTasks";
import updateHeader from "./updateHeader";

const displayPage = (projectId) => {
  const app = createAppController();
  const project = app.getProject(projectId);

  updateHeader(project);
  displayTasks(project);
};

export default displayPage;
