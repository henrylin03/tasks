import { createProject } from "./factories/project";
import { retrieveAllProjects } from "./utils/localStorageHelpers";

const createAppController = () => {
  const addProject = (newProjectName) => {
    if (!newProjectName) return;
    const newProject = createProject(newProjectName);
    newProject.store();
  };

  const getProjects = () =>
    // exclude inbox, which is a project object behind the scenes
    retrieveAllProjects()
      .filter((project) => project.name != "INBOX")
      .sort((projectA, projectB) => projectA.id - projectB.id);

  // run
  if (localStorage.length === 0) createProject("INBOX").store();

  return { addProject, getProjects };
};

export { createAppController };
