import {
  retrieveProjects,
  projectExists,
} from "../helpers/localStorageHelpers";

const createProject = (name, recreatingFromJSON = false) => {
  if (!recreatingFromJSON && projectExists(name))
    throw new Error(`Project with name, "${name}" already exists`);

  const isInitialLoadOfApp = localStorage.length === 0 || name === "Inbox";

  let id = isInitialLoadOfApp ? "inbox" : `P${Date.now()}`;
  let taskIds = [];

  // GETTERS
  const getId = () => id;
  const getName = () => name;
  const viewDetails = () => ({ id, name, taskIds });

  // SETTERS (kind of)
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

  return {
    getId,
    getName,
    viewDetails,
    setId,
    addTask,
    replaceTasks,
    store,
  };
};

const recreateProjectFromJSON = ({ id, name, tasks }) => {
  const project = createProject(name, true);
  project.setId(id);
  project.replaceTasks(tasks);

  return project;
};

export { createProject, recreateProjectFromJSON };
