import { projectExists } from "../utils/localStorageHelpers";

const createProject = (name, isNewlyCreated = true) => {
  if (isNewlyCreated && projectExists(name))
    throw new Error(`Project with name, "${name}" already exists`);

  const tasks = [];
  const getTasks = () => [...new Set(tasks)];

  const getName = () => name;
  const viewDetails = () => ({
    name,
    tasks: getTasks(),
  });

  // accepts 1+ task objects. we only need tasks' details in project, not
  const addTasks = (...taskObjectsForAdding) => {
    console.log(taskObjectsForAdding);
    const taskObjects = taskObjectsForAdding.flat(1);
    console.log(taskObjects);
    taskObjects.forEach((t) => {
      const taskDetails = t.hasOwnProperty("viewDetails") ? t.viewDetails() : t;
      if (tasks.includes(taskDetails)) return;
      tasks.push(taskDetails);
    });
    console.log(tasks);
  };

  return { viewDetails, getName, getTasks, addTasks };
};

const createProjectFromJSON = (retrievedProject) => {
  const reconstructedProject = createProject(retrievedProject.name, false);
  reconstructedProject.addTasks(retrievedProject.tasks);
  return reconstructedProject;
};

export { createProject, createProjectFromJSON };

//todo: once we have cerate project factory from json, adjust localstorage helpers - it should reduce linecount there

//TODO: deduplicate tasks within a project
