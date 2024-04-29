const createToDo = (title, details = "") => {
  return { title, details };
};

const toDo1 = createToDo("Get your shit together");
console.log(toDo1);
