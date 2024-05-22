import {
  getCleanedProjectNames,
  retrieveProjectNames,
  retrieveProjects,
  retrieveTaskById,
} from "../helpers/localStorageHelpers";
import { recreateTaskFromJSON } from "./Task";

const createProject = (recreatingFromJSON = false) => {
  const isInitialLoadOfApp = localStorage.length === 0;

  let name = isInitialLoadOfApp ? "Inbox" : "";
  let id = isInitialLoadOfApp ? "inbox" : `P${Date.now()}`;
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
  const setName = (retrievedOrNewName) => {
    const projectNamesInStorage = retrieveProjectNames();
    const cleanedProjectNamesInStorage = getCleanedProjectNames();
    const projectNameExists =
      projectNamesInStorage.includes(retrievedOrNewName);

    if (!projectNameExists || recreatingFromJSON)
      return (name = retrievedOrNewName);

    const duplicateCount = cleanedProjectNamesInStorage.filter(
      (n) => n === retrievedOrNewName
    ).length;

    for (let suffixInt = 1; suffixInt <= duplicateCount; suffixInt++) {
      const projectNameWithSuffix = `${retrievedOrNewName} (${suffixInt})`;
      if (!projectNamesInStorage.includes(projectNameWithSuffix))
        return (name = projectNameWithSuffix);
    }
  };

  const setId = (retrievedId) => {
    if (!recreatingFromJSON)
      throw new Error(
        "Cannot update the ID of a project unless you're recreating it from localStorage in JSON format."
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

  return {
    getId,
    getName,
    getTasksAsObjects,
    viewDetails,
    setId,
    setName,
    addTask,
    removeTask,
    replaceTasks,
    store,
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
