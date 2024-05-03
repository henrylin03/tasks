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

const retrieveAll = () => {
  const obj = {};
  const storedProjects = retrieveAllProjects();
  storedProjects.forEach((p) => (obj[p] = retrieveProject(p)));
  return obj;
};

export { retrieveAll, retrieveAllProjects, retrieveProject, storeProject };
