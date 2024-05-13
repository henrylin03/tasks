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
  return { addProject };
};

export { createAppController };
