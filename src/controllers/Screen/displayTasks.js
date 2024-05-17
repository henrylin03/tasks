const displayTasks = (project) => {
  // #1: for given project object (argument), get all of the task objects. clear the main section of all cards.
  const tasks = project.getTasks();
  console.log(tasks); //todo: remove

  // #2: for each task object, generate a task card
  tasks.forEach((t) => generateTaskDiv(t));

  // #3 each task card can be opened and enable modification/deletion (this might have to be done later in a separate pr)

  return;
};

const generateTaskDiv = (task) => {
  console.log(task);
};

export default displayTasks;
