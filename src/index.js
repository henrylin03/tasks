import createToDo from "./createToDo";
import createTaskList from "./createTaskList";

// instantiating/testing
const taskList = createTaskList();
taskList.add(createToDo("Get your shit together"));
taskList.add(
  createToDo(
    "Work hard",
    "Do something you love and it won't really feel like work at all"
  )
);
taskList.add(
  createToDo("Relax with your family", "Nothing else has as much meaning")
);
taskList.print();
