/*
in our localStorage, we can use .getItem(projectId) to return the project object (//? but what about the methods? they need to be recreated it seems...)
*/

const storeProject = (projectObject) => {
  const projectIsNew = projectObject.hasOwnProperty("viewDetails");
  const projectDetails = projectIsNew
    ? projectObject.viewDetails()
    : projectObject;
  localStorage.setItem(projectObject.name, JSON.stringify(projectDetails));
};

const retrieveProject = (projectName) =>
  JSON.parse(localStorage.getItem(projectName));

const retrieveAll = () => ({ ...localStorage });

export { retrieveAll, retrieveProject, storeProject };

//todo: in order for your objects to have methods (setters, getters etc), it needs to be recreated using factory after you bring it back. look at: https://stackoverflow.com/questions/64141609/saving-objects-in-localstorage-which-has-a-method
