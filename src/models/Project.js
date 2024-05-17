import { projectExists } from "../helpers/localStorageHelpers";

const createProject = (name, recreatingFromJSON = false) => {
  if (!recreatingFromJSON && projectExists(name))
    throw new Error(`Project with name, "${name}" already exists`);

  // we presume you can't create a project at the exact same time
  let id = Date.now();
  let taskObjects = [];

  // GETTERS
  const getTasksAsObjects = () => taskObjects;
  const getTaskDetails = () => taskObjects.map((t) => t.viewDetails());
  const getName = () => name;
  const viewDetails = () => ({
    id,
    name,
    taskObjects: getTaskDetails(),
  });

  // SETTERS (kind of)
  //! don't use this setter for id unless you're reconstructing from json
  const setId = (newId) => (id = newId);
  const addTask = (taskObject) => taskObjects.push(taskObject);
  const replaceTasks = (newArrayOfTaskObjects) =>
    (taskObjects = newArrayOfTaskObjects);

  // STORER INTO LOCALSTORAGE
  const store = () => localStorage.setItem(name, JSON.stringify(viewDetails()));

  return {
    viewDetails,
    getName,
    getTasksAsObjects,
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
