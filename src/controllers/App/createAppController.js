import { createProject, recreateProjectFromJSON } from "../../models/Project";
import { createTask } from "../../models/Task";
import {
  retrieveProjects,
  retrieveProjectByName,
} from "../../helpers/localStorageHelpers";

const createAppController = () => {
  // console.log(retrieveProjects());
  const addTask = ({ name, description, dueDate, urgency, projectName }) => {
    if (!name) return;
    const newTask = createTask(name);
    newTask.setDescription(description);
    newTask.setDueDate(dueDate);
    newTask.setUrgency(urgency);

    const project = recreateProjectFromJSON(retrieveProjectByName(projectName));
    project.addTask(newTask);
    project.store();
  };

  const addProject = (newProjectName) => {
    if (!newProjectName) return;
    createProject(newProjectName).store();
  };

  const getProjects = (excludeInbox = true) => {
    let projects = retrieveAllProjectsAsArray();

    if (excludeInbox)
      projects = projects.filter((project) => project.name !== "Inbox");

    return projects.sort((projectA, projectB) => projectA.id - projectB.id);
  };

  const getProject = (projectName) =>
    recreateProjectFromJSON(retrieveProjectByName(projectName));

  // run
  if (localStorage.length === 0) createProject("Inbox").store();

  return { addTask, addProject, getProjects, getProject };
};

export { createAppController };
