import * as Project from "../../models/Project";
import * as Task from "../../models/Task";
import {
  retrieveAllProjects,
  retrieveProject,
} from "../../helpers/localStorageHelpers";

const createAppController = () => {
  const addTask = ({ name, description, dueDate, urgency, projectName }) => {
    if (!name) return;
    const newTask = Task.create(name);
    newTask.setDescription(description);
    newTask.setDueDate(dueDate);
    newTask.setUrgency(urgency);

    const project = Project.recreateFromJSON(retrieveProject(projectName));
    project.addTask(newTask);
    project.store();

    console.log(getProjects());
  };

  const addProject = (newProjectName) => {
    if (!newProjectName) return;
    Project.create(newProjectName).store();
  };

  const getProjects = () =>
    // exclude inbox, which is a project object behind the scenes
    retrieveAllProjects()
      .filter((project) => project.name != "Inbox")
      .sort((projectA, projectB) => projectA.id - projectB.id);

  const getProject = (projectName) =>
    Project.recreateFromJSON(retrieveProject(projectName));

  // run
  if (localStorage.length === 0) Project.create("Inbox").store();

  return { addTask, addProject, getProjects, getProject };
};

export { createAppController };
