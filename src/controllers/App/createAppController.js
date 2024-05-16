import { createProject, recreateRetrievedProject } from "../../models/Project";
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

    // find out which project it should be tagged to
    const project = recreateRetrievedProject(getProject(projectName));

    console.log(retrievedProjectObject);
    console.log();
    // store into localStorage based on project
    // OR is there a way to store the task FIRST into a "tasks" storage, and then added to project later on? i guess, is there a way to not know its project first?
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
