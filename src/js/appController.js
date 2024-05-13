import { createProject } from "./factories/project";

const createAppController = () => {
  const addProject = (newProjectName) => {
    const project = createProject(newProjectName);
    project.store();
    alert("project created and stored.");
    console.log(project.viewDetails());
    return;
  };

  // WHAT CAN AN APP DO?
  // an app should be able to add a project first and foremost
  return { addProject };
};

export { createAppController };
