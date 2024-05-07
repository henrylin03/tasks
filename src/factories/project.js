import { projectExists } from "../utils/localStorageHelpers";

const createProject = (name) => {
  if (projectExists(name))
    throw new Error(`Project with name, "${name}" already exists`);

  const tasks = [];
  const getTasks = () => [...new Set(tasks)];

  const getName = () => name;
  const viewDetails = () => ({
    name,
    tasks: getTasks(),
  });

  // accepts 1+ task objects
  const addTasks = (...taskObjects) =>
    // we do not need the tasks' methods, so we only add tasks' details to project
    taskObjects.forEach((task) => {
      // ? we may wish to ensure all tasks are also reconstructed to avoid manipulating properties that were intended to be private upon creation, just because we've retrieved from localStorage

      const isReconstructedTask = task.hasOwnProperty("viewDetails");
      const taskDetails = isReconstructedTask ? task.viewDetails() : task;
      if (tasks.includes(taskDetails)) return;
      tasks.push(taskDetails);
    });

  return { viewDetails, getName, getTasks, addTasks };
};

const createProjectFromJSON = (retrievedProject) => {
  const reconstructedProject = createProject(retrievedProject.name);
  reconstructedProject.addTasks(retrievedProject.tasks);
  return reconstructedProject;
};

export { createProject, createProjectFromJSON };

//todo: once we have cerate project factory from json, adjust localstorage helpers - it should reduce linecount there

//TODO: deduplicate tasks within a project
