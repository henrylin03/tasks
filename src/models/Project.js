import {
  projectNameExists,
  retrieveProjects,
  retrieveTaskById,
} from "../helpers/localStorageHelpers";
import { recreateTaskFromJSON } from "./Task";

const createProject = (name, recreatingFromJSON = false) => {
  let id = localStorage.length === 0 ? "inbox" : `P${Date.now()}`;
  let taskIds = [];

  // GETTERS
  const getId = () => id;
  const getName = () => name;
  const getTasksAsObjects = () => {
    if (!taskIds) return;
    return taskIds.map((id) => recreateTaskFromJSON(retrieveTaskById(id)));
  };
  const viewDetails = () => ({ id, name, taskIds });

  // SETTERS
  const setId = (retrievedId) => {
    if (!recreatingFromJSON)
      throw new Error(
        "Cannot update the ID of a project unless you're recreating it from localStorage in JSON format."
      );
    id = retrievedId;
  };
  const addTask = (newTaskId) => taskIds.push(newTaskId);
  const replaceTasks = (newTaskIds) => (taskIds = newTaskIds);

  // STORER INTO LOCALSTORAGE
  const store = () => {
    const storedProjectsArray = retrieveProjects();
    const newProjectsArray = storedProjectsArray.filter((p) => p.id != id);
    newProjectsArray.push(viewDetails());
    localStorage.setItem("projects", JSON.stringify(newProjectsArray));
  };

  // RUN
  // append number in parentheses to project name if name already exists
  // in localstorage, the name will be the same (so that we can count how many there are)
  // however, the display depends on how many there are already
  // the display of the project name should be `project duplicated name (_number of existing projects with same name_)`

  return {
    getId,
    getName,
    getTasksAsObjects,
    viewDetails,
    setId,
    addTask,
    replaceTasks,
    store,
  };
};

const recreateProjectFromJSON = ({ id, name, taskIds }) => {
  const project = createProject(name, true);
  project.setId(id);
  project.replaceTasks(taskIds);

  return project;
};

export { createProject, recreateProjectFromJSON };
