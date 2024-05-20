import {
  retrieveProjects,
  projectExists,
} from "../helpers/localStorageHelpers";

const createProject = (name, recreatingFromJSON = false) => {
  if (!recreatingFromJSON && projectExists(name))
    throw new Error(`Project with name, "${name}" already exists`);

  const isInitialLoadOfApp = localStorage.length === 0 || name === "Inbox";

  // we presume you can't create a project at the exact same time
  let id = isInitialLoadOfApp ? "inbox" : `P${Date.now()}`;
  let tasks = [];

  // GETTERS
  const getName = () => name;
  const viewDetails = () => ({ id, name, tasks });

  // SETTERS (kind of)
  const setId = (retrievedId) => {
    if (!recreatingFromJSON)
      throw new Error(
        "Cannot update the ID of a project unless you're recreating it from localStorage in JSON format."
      );
    id = retrievedId;
  };
  const addTask = (newTask) => tasks.push(newTask);
  const replaceTasks = (newTasks) => (tasks = newTasks);

  // STORER INTO LOCALSTORAGE
  const store = () => {
    const storedProjectsArray = retrieveProjects();
    const storedProjectIds = storedProjectsArray.map((p) => p.id);

    // checks
    const isExistingProject = storedProjectIds.includes(id);

    if (isExistingProject) storedProjectsArray.filter((p) => p.id == id);

    console.log(storedProjectsArray, "after filtering");

    storedProjectsArray.push(viewDetails());
    console.log("storedProjectsArray", storedProjectsArray);
    localStorage.setItem("projects", JSON.stringify(storedProjectsArray));
  };

  return {
    viewDetails,
    getName,
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
