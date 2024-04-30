const createProject = (name) => {
  const tasksInProject = [];

  const addTaskToProject = (task) => tasksInProject.push(task);

  const viewTasksInProject = () => {
    console.log(
      `The following are the tasks in the project "${name}": [${tasksInProject}]`
    );
  };

  const removeTaskFromProject = (taskIndex) => {
    if (tasksInProject[taskIndex] === undefined)
      throw new Error("Index does not exist in tasks");
    tasksInProject.splice(taskIndex, 1);
    viewTasksInProject();
  };

  return { name, addTaskToProject, viewTasksInProject, removeTaskFromProject };
};

export default createProject;
