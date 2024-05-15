import { createProject } from "./factories/project";
import { retrieveAllProjectNames } from "./utils/localStorageHelpers";

const createAppController = () => {
  const addProject = (newProjectName) => {
    if (!newProjectName) return;
    const newProject = createProject(newProjectName);
    newProject.store();
  };

  const getProjectNames = () =>
    // exclude inbox, which is a project object behind the scenes
    retrieveAllProjectNames()
      .filter((projectName) => projectName != "INBOX")
      .sort((a, b) => a.id - b.id);

  // run
  if (localStorage.length === 0) createProject("INBOX").store();

  return { addProject, getProjectNames };
};

export { createAppController };
