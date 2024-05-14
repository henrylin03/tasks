import { createProject } from "./factories/project";
import { retrieveAllProjectNames } from "./utils/localStorageHelpers";

const createAppController = () => {
  const addProject = (newProjectName) => createProject(newProjectName).store();

  const getProjects = () => {};

  // run
  if (localStorage.length === 0) createProject("INBOX").store();

  // WHAT CAN AN APP DO?
  return { addProject, getProjects };
};

export { createAppController };

// NEED TO CREATE MY PROJECTS IF NOT ALREADY THERE! THIS IS THE INBOX
