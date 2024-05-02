/*
in our localStorage, we can use .getItem(projectId) to return the project object (//? but what about the methods? they need to be recreated it seems...)

// in our localStorage, we will have two "objects".

// -object #1 ("projectIdToTasks"): key = unique id of project, value = array of objects representing the projects' tasks (as objects)
// -object #2 ("projectIdToProjects"): lookup for project where key = unique id of project, value = project object
*/
//todo/? -- how do i ensure that what is displayed re tasks of each project is JSON.parsed??
const getAllStoredTasks = () => ({ ...localStorage });

const storeProject = (projectObject) => {
  const projectDetails = projectObject.viewDetails();
  localStorage.setItem(projectObject.name, JSON.stringify(projectDetails));
};

const getStoredProject = (projectName) =>
  JSON.parse(localStorage.getItem(projectName));

export { getAllStoredTasks, storeProject, getStoredProject };

//todo: in order for your objects to have methods (setters, getters etc), it needs to be recreated using factory after you bring it back. look at: https://stackoverflow.com/questions/64141609/saving-objects-in-localstorage-which-has-a-method
