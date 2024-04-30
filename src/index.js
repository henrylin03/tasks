import createTask from "./createTask";

const taskManager = (function () {
  const taskList = [];

  const addTask = (taskObject) => taskList.push(taskObject);

  const viewTasks = () => {
    const tasksWithPropertiesShown = taskList.map((task) => ({
      title: task.viewTitle(),
      details: task.viewDetails(),
      due: task.viewDueDateAndTime(),
    }));
    console.log("Your tasks: ", tasksWithPropertiesShown);
  };

  const updateTask = (taskIndex, setter, updatedValue) => {
    if (taskList[taskIndex] === undefined)
      throw new Error("Index does not exist in tasks");
    taskList[taskIndex].setterHandler[setter](updatedValue);
  };

  const deleteTask = (taskIndex) => {
    if (taskList[taskIndex] === undefined)
      throw new Error("Index does not exist in tasks");
    console.log("Deleting task...");
    taskList.splice(taskIndex, 1);
    console.log("Done");
    viewTasks();
  };

  // adding a bunch of test tasks - these can be deleted when we introduce localStorage management
  addTask(
    createTask("Analyse latest news articles to find the most relevant quotes")
  );
  addTask(
    createTask(
      "Write email to Mary Jin",
      "see earlier email from 20 March 2022 for reply"
    )
  );

  // run
  console.log(" ~ welcome to serenity to-dos ~");
  viewTasks();

  updateTask(0, "setDetails", "This task has been updated");
  viewTasks();

  // taskList[0].setterHandler["setDueDateAndTime"](2024, 10, 4);

  // const newTask = prompt("Please add in the title of your new task");
  // addTask(createTask(newTask));
  // viewTasks();
  return { addTask, viewTasks, deleteTask, updateTask };
})();
