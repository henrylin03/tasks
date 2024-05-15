import { createProject } from "./factories/project";
import {
  projectExists,
  retrieveAllProjects,
  retrieveProject,
} from "./utils/localStorageHelpers";

const createAppController = () => {
  const addProject = (newProjectName) => {
    if (!newProjectName) return;
    if (projectExists) return false;
    const newProject = createProject(newProjectName);
    newProject.store();
    return;
  };

  const getProjects = () =>
    // exclude inbox, which is a project object behind the scenes
    retrieveAllProjects()
      .filter((project) => project.name != "Inbox")
      .sort((projectA, projectB) => projectA.id - projectB.id);

  const getProject = (projectName) => retrieveProject(projectName);

  // run
  if (localStorage.length === 0) createProject("Inbox").store();

  return { addProject, getProjects, getProject };
};

export { createAppController };
