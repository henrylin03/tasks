import { retrieveAllProjectNames } from "../utils/localStorageHelpers";

const createProject = (name) => {
  const tasks = [];

  const viewDetails = () => ({
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

  const addTaskDetails = (taskObject) => tasks.push(taskObject.viewDetails());

  // run checks
  checkIfProjectNameAlreadyExists(name);

  return { viewDetails, addTaskDetails };
};

// const createProjectFromJSON = (retrievedProject) => {
//   const reconstructedProject = createTask({
//     title: retrievedProject.name,
//     description: retrievedProject.description,
//   });

//   for (const [retrievedProperty, retrievedValue] of Object.entries(
//     retrievedTask
//   )) {
//     reconstructedTask.set[retrievedProperty](retrievedValue);
//   }

//   return reconstructedTask;
// };

export { createProject };

// todo: align pattern w/ task for a separate factory to recreate project object with all of its methods from retrieved json. explore benefits of having a setter object (maybe not here)
