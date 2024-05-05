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

const retrieveAllProjectNames = () => Object.keys(localStorage);
const retrieveAllProjects = () => Object.values(retrieveAll());

// returns a set of tasks (objects)
const retrieveAllTasks = () => {
  const set = new Set();
  const storedProjectsArray = retrieveAllProjects();

  storedProjectsArray.forEach((project) => set.add(...project.tasks));

  return set;
};

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
  findProjectsWithTask,
  storeProject,
  retrieveAllTasks,
};
