import { retrieveAllProjects } from "../utils/localStorageHelpers";

const createProject = (name) => {
  // the creation timestamp is the unique identifier of this project
  const id = Date.now();
  const tasks = [];

  const getName = () => name;
  const getId = () => id;
  const viewDetails = () => ({
    id,
    name,
    tasks,
  });

  const checkIfProjectNameAlreadyExists = (projectNameForChecking) => {
    const storedProjectsArray = retrieveAllProjects();
    if (storedProjectsArray.includes(projectNameForChecking))
      throw new Error(
        `Project name, "${projectNameForChecking}" already exists.`
      );
  };

  const setName = (newName) => {
    checkIfProjectNameAlreadyExists(newName);
    name = newName;
  };

  const addTaskDetails = (taskObject) => tasks.push(taskObject.viewDetails());

  // run checks
  checkIfProjectNameAlreadyExists(name);

  return { addTaskDetails, viewDetails, getName, getId };
};

export default createProject;
