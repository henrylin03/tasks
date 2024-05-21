import {
  getCleanedProjectNames,
  retrieveProjectNames,
  retrieveProjects,
  retrieveTaskById,
} from "../helpers/localStorageHelpers";
import { recreateTaskFromJSON } from "./Task";

const createProject = (recreatingFromJSON = false) => {
  let name = "";
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

  const addTask = (newTaskId) => taskIds.push(newTaskId);
  const replaceTasks = (newTaskIds) => (taskIds = newTaskIds);

  // OTHER METHODS
  const store = () => {
    const storedProjectsArray = retrieveProjects();
    const newProjectsArray = storedProjectsArray.filter((p) => p.id != id);
    newProjectsArray.push(viewDetails());
    localStorage.setItem("projects", JSON.stringify(newProjectsArray));
  };

  // RUN
  // append number in parentheses to project name if name already exists
  // the display of the project name should be `project duplicated name (_number of existing projects with same name_)`
  // go through each of the names in projects and remove all parentheses+number and see how many duplicates there are, try and name it and see if it already exists (if yes, then increment the next number), otherwise just name that number. this needs to be run WHEN the project is being created. when we introduce updating of name, we will also need to have this as a setter i think

  return {
    getId,
    getName,
    getTasksAsObjects,
    viewDetails,
    setId,
    setName,
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
