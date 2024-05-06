import { retrieveAllProjectNames } from "../utils/localStorageHelpers";

const createProject = (name) => {
  // the creation timestamp is the unique identifier of this project
  const id = Date.now();
  const tasks = [];

  const getName = () => name;
  const viewDetails = () => ({
    id,
    name,
    tasks,
  });

  const checkIfProjectNameAlreadyExists = (projectNameForChecking) => {
    const storedProjectsArray = retrieveAllProjectNames();
    if (storedProjectsArray.includes(projectNameForChecking))
      throw new Error(
        `Project name, "${projectNameForChecking}" already exists.`
      );
  };

  // const setName = (newName) => {
  //   checkIfProjectNameAlreadyExists(newName);
  //   name = newName;
  // };

  const addTaskDetails = (taskObject) => tasks.push(taskObject.viewDetails());

  // run checks
  checkIfProjectNameAlreadyExists(name);

  return { addTaskDetails, viewDetails, getName };
};

export default createProject;

// todo: align pattern w/ task for a separate factory to recreate project object with all of its methods from retrieved json. explore benefits of having a setter object (maybe not here)
