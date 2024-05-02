/*
in our localStorage, we can use .getItem(projectId) to return the project object (//? but what about the methods? they need to be recreated it seems...)

// in our localStorage, we will have two "objects".

// -object #1 ("projectIdToTasks"): key = unique id of project, value = array of objects representing the projects' tasks (as objects)
// -object #2 ("projectIdToProjects"): lookup for project where key = unique id of project, value = project object
*/

const getAllStoredTasks = () => ({ ...localStorage });

const storeProject = (projectObject) => {
  const projectId = projectObject.getId();
  const tasksInProjectAsObjects = projectObject.taskList;

  localStorage.setItem(
    projectObject.getName(),
    JSON.stringify(tasksInProjectAsObjects)
  );
};

// function to create a new project and add task objects to its array OR update existing project with new tasks array
// const storeProjectAndTasks = (projectObject) => {
//   const projectsTasksArray = projectObject.getTasks();
//   localStorage.setItem(
//     JSON.stringify(projectObject),
//     JSON.stringify(projectsTasksArray)
//   );
// };

export { getAllStoredTasks, storeProject };

//todo: in order for your objects to have methods (setters, getters etc), it needs to be recreated using factory after you bring it back. look at: https://stackoverflow.com/questions/64141609/saving-objects-in-localstorage-which-has-a-method
