import { createProject } from "./factories/project";
import { retrieveAllProjectNames } from "./utils/localStorageHelpers";

const createAppController = () => {
  const addProject = (newProjectName) => createProject(newProjectName).store();

  const getProjectNames = () =>
    // we exclude "INBOX", which is a project object
    retrieveAllProjectNames().filter((projectName) => projectName != "INBOX");

  // run
  if (localStorage.length === 0) createProject("INBOX").store();

  // WHAT CAN AN APP DO?
  return { addProject, getProjectNames };
};

export { createAppController };

// NEED TO CREATE MY PROJECTS IF NOT ALREADY THERE! THIS IS THE INBOX
//todo: prevent creation of an empty-named project
