import { uniq, isEqual } from "lodash";
import { projectExists } from "../helpers/localStorageHelpers";

const createProject = (name) => {
  if (projectExists(name))
    throw new Error(`Project with name, "${name}" already exists`);

  // we presume you can't create a project at the exact same time
  const id = Date.now();

  // GETTERS
  let tasks = [];
  const getTasks = () => _.uniqWith(tasks, _.isEqual); // tasks are deduplicated
  const getName = () => name;
  const viewDetails = () => ({ id, name, tasks: getTasks() });

  // SETTERS (kind of)
  const addTasks = (...taskObjectsForAdding) => {
    const taskObjects = taskObjectsForAdding.flat(Infinity);

    taskObjects.forEach((t) => {
      const taskDetails = t.hasOwnProperty("viewDetails") ? t.viewDetails() : t;
      tasks.push(taskDetails);
    });
  };

  const replaceTasks = (tasksArray) => (tasks = tasksArray);

  // STORER INTO LOCALSTORAGE
  const store = () => localStorage.setItem(name, JSON.stringify(viewDetails()));

  return {
    viewDetails,
    getName,
    getTasks,
    addTasks,
    replaceTasks,
    store,
  };
};

export { createProject };
