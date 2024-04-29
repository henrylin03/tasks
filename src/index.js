import createToDo from "./createToDo";

// a task list should be an array of objects, each object representing a todo
const createTaskList = () => {
  const taskList = [];
  const add = (toDoObject) => {
    taskList.push(toDoObject);
  };

  const print = () => {
    console.log("Your tasks are below:");
    taskList.forEach((t) => console.log(t));
  };

  return { add, print };
};

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
