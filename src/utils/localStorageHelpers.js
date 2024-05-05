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

const retrieveAllProjects = () => Object.keys(localStorage);

const findProjectsWithTask = (taskName) => {
  const projectsArray = Object.values(retrieveAll());
  console.log("projects array", projectsArray);
  const projectsWithInputtedTaskName = projectsArray.filter((project) =>
    project.tasks.some((task) => task.title == taskName)
  );
  return projectsWithInputtedTaskName;
};

//todo: handle when user input does not actually exist as a task

const retrieveAll = () => {
  const obj = {};
  const storedProjects = retrieveAllProjects();
  storedProjects.forEach((p) => (obj[p] = retrieveProject(p)));
  return obj;
};

export {
  retrieveAll,
  retrieveAllProjects,
  retrieveProject,
  findProjectsWithTask,
  storeProject,
};
