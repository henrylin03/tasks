const createProject = (name) => {
  const tasksInProject = [];

  const addTaskToProject = (task) => tasksInProject.push(task);

  const removeTaskFromProject = (taskIndex) => {
    if (tasksInProject[taskIndex] === undefined)
      throw new Error("Index does not exist in tasks");
    tasksInProject.splice(taskIndex, 1);
  };

  return {
    name,
    tasksInProject,
    addTaskToProject,
    removeTaskFromProject,
  };
};

export default createProject;
