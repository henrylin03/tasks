import createTask from "./createTask";
import createTaskList from "./createTaskList";

const taskManager = (function () {
  const taskList = createTaskList();

  console.log(" ~ welcome to serenity to-dos ~");

  // adding a bunch of test tasks - these can be deleted when we introduce localStorage management
  taskList.addTask(createTask("Get your shit together"));
  taskList.addTask(
    createTask(
      "Work hard",
      "Do something you love and it won't really feel like work at all"
    )
  );
  taskList.addTask(
    createTask("Relax with your family", "Nothing else has as much meaning")
  );

  taskList.printTasks();
})();
