// checks
const taskExists = (taskName) => {
  const retrievedTaskNames = retrieveAllTaskNames();
  return retrievedTaskNames.includes(taskName);
};

const projectExists = (projectName) => !!localStorage.getItem(projectName);

// storers into localStorage
const storeProject = (projectObject) =>
  localStorage.setItem(
    projectObject.getName(),
    JSON.stringify(projectObject.viewDetails())
  );

const storeTask = (taskObject) => {
  const taskName = taskObject.viewDetails().title;
  const projectsWithTask = findProjectsWithTask(taskName);

  projectsWithTask.forEach((project) => {
    project.tasks = project.tasks.filter((task) => task.title != taskName);
    project.tasks.push(taskObject.viewDetails());
    storeProject(project);
  });
};

// retrievers from localStorage
const retrieveProject = (projectName) =>
  JSON.parse(localStorage.getItem(projectName));
const retrieveAllProjects = () => Object.values(retrieveAll());
const retrieveAllProjectNames = () => Object.keys(localStorage);

const retrieveTask = (taskName) => {
  const storedTasks = retrieveAllTasks();
  return storedTasks.filter((task) => task.title === taskName)[0];
};
const retrieveAllTasks = () => {
  const storedProjectsArray = retrieveAllProjects();
  const retrievedTasks = [];

  storedProjectsArray.forEach((project) => {
    const taskList = project.tasks;
    if (Array.isArray(taskList) && !taskList.length) return;
    retrievedTasks.push(...project.tasks);
  });

  return [...new Set(retrievedTasks)];
};

const retrieveAllTaskNames = () =>
  [...retrieveAllTasks()].map((task) => task.title);

const retrieveAll = () => {
  const obj = {};
  const storedProjects = retrieveAllProjectNames();
  storedProjects.forEach((p) => (obj[p] = retrieveProject(p)));
  return obj;
};

// identifier methods
const findProjectsWithTask = (taskName) => {
  const storedProjectsArray = retrieveAllProjects();
  const projectsWithInputtedTaskName = storedProjectsArray.filter((project) =>
    project.tasks.some((task) => task.title == taskName)
  );

  return projectsWithInputtedTaskName;
};

export {
  retrieveAll,
  retrieveAllProjectNames,
  retrieveProject,
  retrieveAllTasks,
  findProjectsWithTask,
  storeProject,
  storeTask,
  taskExists,
  projectExists,
  retrieveTask,
};

// ? should these localstorage helpers actually just be methods inside the objects? probably not, because they aren't called on an object but on the app. maybe then in the app controller?

// ? then should these methods be broken down into taskRetrievers/taskStorers and projectRetrievers OR taskManagers and projectManagers? should this all be object(s) with these methods??
