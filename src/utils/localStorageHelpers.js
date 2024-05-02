/*
in our localStorage, we can use .getItem(projectId) to return the project object (//? but what about the methods? they need to be recreated it seems...)
*/

const getAllStoredTasks = () => ({ ...localStorage });

const storeProject = (projectObject) => {
  const projectDetails = projectObject.viewDetails();
  localStorage.setItem(projectObject.name, JSON.stringify(projectDetails));
};

const getStoredProject = (projectName) =>
  JSON.parse(localStorage.getItem(projectName));

export { getAllStoredTasks, storeProject, getStoredProject };

//todo: in order for your objects to have methods (setters, getters etc), it needs to be recreated using factory after you bring it back. look at: https://stackoverflow.com/questions/64141609/saving-objects-in-localstorage-which-has-a-method
