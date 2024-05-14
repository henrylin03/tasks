import { createProject } from "./factories/project";

const createAppController = () => {
  const addProject = (newProjectName) => {
    const project = createProject(newProjectName);
    project.store();
    alert("project created and stored.");
    console.log(project.viewDetails());
    return;
  };

  const getProjects = () => {};

  // WHAT CAN AN APP DO?
  return { addProject, getProjects };
};

export { createAppController };

// NEED TO CREATE MY PROJECTS IF NOT ALREADY THERE! THIS IS THE INBOX
