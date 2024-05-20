import { createProject, recreateProjectFromJSON } from "../../models/Project";
import { createTask } from "../../models/Task";
import {
  retrieveProjectByName,
  retrieveProjects,
} from "../../helpers/localStorageHelpers";

const createAppController = () => {
  const addTask = ({ name, description, dueDate, urgency, projectName }) => {
    if (!name) return;
    const newTask = createTask(name);
    newTask.setDescription(description);
    newTask.setDueDate(dueDate);
    newTask.setUrgency(urgency);

    const project = recreateProjectFromJSON(retrieveProjectByName(projectName));
    project.addTask(newTask.getId());
    console.log(project.viewDetails());
    console.log(newTask.viewDetails());
    // project.store();
  };

  const addProject = (newProjectName) => {
    if (!newProjectName) return;
    createProject(newProjectName).store();
  };

  const getProjects = (excludeInbox = true) => {
    let projects = retrieveProjects();

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
