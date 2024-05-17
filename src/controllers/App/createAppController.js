import { createProject, recreateProjectFromJSON } from "../../models/Project";
import { createTask } from "../../models/Task";
import {
  retrieveAllProjects,
  retrieveProject,
} from "../../helpers/localStorageHelpers";

const createAppController = () => {
  const addTask = ({ name, description, dueDate, urgency, projectName }) => {
    if (!name) return;
    const newTask = createTask(name);
    newTask.setDescription(description);
    newTask.setDueDate(dueDate);
    newTask.setUrgency(urgency);

    const project = recreateProjectFromJSON(retrieveProject(projectName));
    project.addTask(newTask);
    project.store();
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

  const getProject = (projectName) =>
    recreateProjectFromJSON(retrieveProject(projectName));

  // run
  if (localStorage.length === 0) createProject("Inbox").store();

  return { addTask, addProject, getProjects, getProject };
};

export { createAppController };
