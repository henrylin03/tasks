import { createProject } from "../../models/Project";
import { createTask } from "../../models/Task";
import {
  retrieveAllProjects,
  retrieveProject,
} from "../../helpers/localStorageHelpers";

const createAppController = () => {
  const addTask = (newTaskName) => {
    if (!newTaskName) return;
    const newTask = createTask(newTaskName);
    console.log(newTask.viewDetails());
  };

  const addProject = (newProjectName) => {
    if (!newProjectName) return;
    createProject(newProjectName).store();
  };

  const getProjects = () =>
    // exclude inbox, which is a project object behind the scenes
    retrieveAllProjects()
      .filter((project) => project.name != "Inbox")
      .sort((projectA, projectB) => projectA.id - projectB.id);

  const getProject = (projectName) => retrieveProject(projectName);

  // run
  if (localStorage.length === 0) createProject("Inbox").store();

  return { addTask, addProject, getProjects, getProject };
};

export { createAppController };
