import { createProject } from "./factories/project";
import { retrieveAllProjectNames } from "./utils/localStorageHelpers";

const createAppController = () => {
  const addProject = (newProjectName) => {
    if (!newProjectName) return;
    const newProject = createProject(newProjectName);
    newProject.store();
  };

  const getProjectNames = () =>
    // we exclude "INBOX", which is a project object
    retrieveAllProjectNames().filter((projectName) => projectName != "INBOX");

  // run
  if (localStorage.length === 0) createProject("INBOX").store();

  return { addProject, getProjectNames };
};

export { createAppController };
