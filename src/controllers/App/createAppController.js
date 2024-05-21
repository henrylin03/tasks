import { createProject, recreateProjectFromJSON } from "../../models/Project";
import { createTask } from "../../models/Task";
import {
  retrieveProjectById,
  retrieveProjects,
} from "../../helpers/localStorageHelpers";

const createAppController = () => {
  const addTask = ({ name, description, dueDate, urgency, projectName }) => {
    if (!name) return;
    const newTask = createTask(name);
    newTask.setDescription(description);
    newTask.setDueDate(dueDate);
    newTask.setUrgency(urgency);
    newTask.store();

    const project = recreateProjectFromJSON(retrieveProjectByName(projectName));
    project.addTask(newTask.getId());
    project.store();
  };

  const addProject = (newProjectName) => {
    if (!newProjectName) return;
    const newProject = createProject();
    newProject.setName(newProjectName);
    newProject.store();
  };

  const getProjects = (excludeInbox = true) => {
    let projects = retrieveProjects();

    if (excludeInbox)
      projects = projects.filter((project) => project.name !== "Inbox");

    return projects.sort((projectA, projectB) => projectA.id - projectB.id);
  };

  const getProject = (projectId) =>
    recreateProjectFromJSON(retrieveProjectById(projectId));

  // run
  if (localStorage.length === 0) createProject("Inbox").store();

  return { addTask, addProject, getProjects, getProject };
};

export { createAppController };
