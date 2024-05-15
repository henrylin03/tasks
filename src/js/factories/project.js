import { uniq, isEqual } from "lodash";
import { projectExists } from "../utils/localStorageHelpers";

const createProject = (name, isNewlyCreated = true) => {
  if (isNewlyCreated && projectExists(name))
    throw new Error(`Project with name, "${name}" already exists`);

  let tasks = [];
  const getTasks = () => _.uniqWith(tasks, _.isEqual);

  const getName = () => name;
  const viewDetails = () => ({
    name,
    tasks: getTasks(),
  });

  const addTasks = (...taskObjectsForAdding) => {
    const taskObjects = taskObjectsForAdding.flat(Infinity);

    taskObjects.forEach((t) => {
      const taskDetails = t.hasOwnProperty("viewDetails") ? t.viewDetails() : t;
      tasks.push(taskDetails);
    });
  };

  const replaceTasks = (tasksArray) => (tasks = tasksArray);

  const store = () => localStorage.setItem(name, JSON.stringify(viewDetails()));

  return { viewDetails, getName, getTasks, addTasks, replaceTasks, store };
};

const createProjectFromJSON = (retrievedProject) => {
  const reconstructedProject = createProject(retrievedProject.name, false);
  reconstructedProject.replaceTasks(retrievedProject.tasks);
  return reconstructedProject;
};

export { createProject, createProjectFromJSON };
