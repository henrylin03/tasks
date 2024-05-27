import addSuffixToDuplicateProjectName from "../helpers/addSuffixToDuplicateProjectNames";
import {
  retrieveProjects,
  retrieveTaskById,
} from "../helpers/localStorageHelpers";
import { recreateTaskFromJSON } from "./Task";

const createProject = (recreatingFromJSON = false) => {
  const isInitialLoadOfApp = retrieveProjects().length === 0;

  let name = isInitialLoadOfApp ? "Inbox" : "";
  let id = isInitialLoadOfApp ? "inbox" : `P${Date.now()}`;
  let taskIds = [];

  // GETTERS
  const getId = () => id;
  const getName = () => name;
  const getTaskIds = () => taskIds;
  const getTasksAsObjects = () =>
    taskIds.map((taskId) => recreateTaskFromJSON(retrieveTaskById(taskId)));
  const viewDetails = () => ({ id, name, taskIds });

  // SETTERS
  const setName = (retrievedOrNewName) => {
    if (recreatingFromJSON) return (name = retrievedOrNewName);
    name = addSuffixToDuplicateProjectName(retrievedOrNewName);
  };

  const setId = (retrievedId) => {
    if (!recreatingFromJSON)
      throw new Error(
        "Cannot update the ID of a project unless you're recreating it from localStorage in JSON format.",
      );
    id = retrievedId;
  };

  // OTHER METHODS
  const addTask = (newTaskId) => taskIds.push(newTaskId);
  const removeTask = (taskId) =>
    (taskIds = taskIds.filter((id) => id !== taskId));
  const replaceTasks = (newTaskIds) => (taskIds = newTaskIds);

  const store = () => {
    const storedProjectsArray = retrieveProjects();
    const newProjectsArray = storedProjectsArray.filter((p) => p.id != id);
    newProjectsArray.push(viewDetails());
    localStorage.setItem("projects", JSON.stringify(newProjectsArray));
  };

  const remove = () => {
    const storedProjectsArray = retrieveProjects();
    const projectsArrayWithoutSelf = storedProjectsArray.filter(
      (p) => p.id !== id,
    );
    localStorage.setItem("projects", JSON.stringify(projectsArrayWithoutSelf));
  };

  return {
    getId,
    getName,
    getTaskIds,
    getTasksAsObjects,
    viewDetails,
    setId,
    setName,
    addTask,
    removeTask,
    replaceTasks,
    store,
    remove,
  };
};

const recreateProjectFromJSON = ({ id, name, taskIds }) => {
  const project = createProject(name, true);

  project.setId(id);
  project.setName(name);
  project.replaceTasks(taskIds);

  return project;
};

export { createProject, recreateProjectFromJSON };
