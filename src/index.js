import createTask from "./createTask";
import createTaskList from "./createTaskList";

// instantiating/testing
const taskList = createTaskList();
taskList.add(createTask("Get your shit together"));
taskList.add(
  createTask(
    "Work hard",
    "Do something you love and it won't really feel like work at all"
  )
);
taskList.add(
  createTask("Relax with your family", "Nothing else has as much meaning")
);
taskList.print();
