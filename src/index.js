import createToDo from "./createToDo";
import createTaskList from "./createTaskList";

// instantiating/testing
const toDo1 = createToDo("Get your shit together");
const toDo2 = createToDo(
  "Work hard",
  "Do something you love and it won't really feel like work at all"
);
const toDo3 = createToDo(
  "Relax with your family",
  "Nothing else has as much meaning"
);

const taskList = createTaskList();
taskList.add(toDo1);
taskList.add(toDo2);
taskList.add(toDo3);
taskList.print();
