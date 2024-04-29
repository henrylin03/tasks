import createTask from "./createTask";
import createTaskList from "./createTaskList";

// instantiating/testing
// const taskList = createTaskList();
// taskList.addTask(createTask("Get your shit together"));
// taskList.addTask(
//   createTask(
//     "Work hard",
//     "Do something you love and it won't really feel like work at all"
//   )
// );
// taskList.addTask(
//   createTask("Relax with your family", "Nothing else has as much meaning")
// );
// taskList.printTask();

const taskManager = (function () {
  console.log(" ~ welcome to serenity to-dos ~");

  const taskList = createTaskList();
  taskList.printTasks();

  return;
})();
