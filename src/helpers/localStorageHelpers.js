// checks
const projectExists = (projectName) => !!localStorage.getItem(projectName);

// storers into localStorage
const storeTask = (taskObject, taggedProjectObject) => {
  taggedProjectObject.addTask(taskObject);
  console.log(taggedProjectObject.viewDetails());
};

// retrievers from localStorage
const retrieveProject = (projectName) =>
  JSON.parse(localStorage.getItem(projectName));
const retrieveAllProjects = () => Object.values(retrieveAll());

const retrieveAll = () => {
  const obj = {};
  const storedProjectNames = Object.keys(localStorage);
  storedProjectNames.forEach((p) => (obj[p] = retrieveProject(p)));
  return obj;
};

export { retrieveAllProjects, retrieveProject, storeTask, projectExists };

// ? should these localstorage helpers actually just be methods inside the objects? probably not, because they aren't called on an object but on the app. maybe then in the app controller?

// ? then should these methods be broken down into taskRetrievers/taskStorers and projectRetrievers OR taskManagers and projectManagers? should this all be object(s) with these methods??
