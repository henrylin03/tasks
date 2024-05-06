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

const retrieveAllTasks = () => {
  const storedProjectsArray = retrieveAllProjects();
  const retrievedTasks = [];

  storedProjectsArray.forEach((project) => {
    const taskList = project.tasks;
    if (Array.isArray(taskList) && !taskList.length) return;
    retrievedTasks.push(...project.tasks);
  });

  return new Set(retrievedTasks);
};

const retrieveAllTaskNames = () =>
  [...retrieveAllTasks()].map((task) => task.title);

const retrieveAll = () => {
  const obj = {};
  const storedProjects = retrieveAllProjectNames();
  storedProjects.forEach((p) => (obj[p] = retrieveProject(p)));
  return obj;
};

const findProjectsWithTask = (taskName) => {
  const storedProjectsArray = retrieveAllProjects();
  const projectsWithInputtedTaskName = storedProjectsArray.filter((project) =>
    project.tasks.some((task) => task.title == taskName)
  );
  if (!projectsWithInputtedTaskName.length)
    throw new Error("That task name was not found.");
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
};
