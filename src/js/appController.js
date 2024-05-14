import { createProject } from "./factories/project";

const createAppController = () => {
  const addProject = (newProjectName) => createProject(newProjectName).store();

  const getProjects = () => {};

  // WHAT CAN AN APP DO?
  return { addProject, getProjects };
};

export { createAppController };

// NEED TO CREATE MY PROJECTS IF NOT ALREADY THERE! THIS IS THE INBOX
