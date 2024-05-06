const storeProject = (projectObject) => {
  const projectIsNew = projectObject.hasOwnProperty("viewDetails");
  const projectName = projectIsNew
    ? projectObject.getName()
    : projectObject.name;
  const projectDetails = projectIsNew
    ? projectObject.viewDetails()
    : projectObject;
  localStorage.setItem(projectName, JSON.stringify(projectDetails));
};

const retrieveProject = (projectName) =>
  JSON.parse(localStorage.getItem(projectName));
const retrieveAllProjects = () => Object.values(retrieveAll());
const retrieveAllProjectNames = () => Object.keys(localStorage);

const retrieveTask = (taskName) => {
  checkTaskExists(taskName);
  const storedTasks = retrieveAllTasks();
  return storedTasks.filter((task) => task.title === taskName);
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

const checkTaskExists = (taskName) => {
  const retrievedTaskNames = retrieveAllTaskNames();
  if (!retrievedTaskNames.includes(taskName))
    throw new Error(`Task name, "${taskName}", does not exist.`);
  return true;
};

const retrieveAll = () => {
  const obj = {};
  const storedProjects = retrieveAllProjectNames();
  storedProjects.forEach((p) => (obj[p] = retrieveProject(p)));
  return obj;
};

const findProjectsWithTask = (taskName) => {
  checkTaskExists(taskName);

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
  retrieveAllTaskNames,
  checkTaskExists,
  retrieveTask,
};

// ? should these localstorage helpers actually just be methods inside the objects? probably not, because they aren't called on an object but on the app. maybe then in the app controller?
