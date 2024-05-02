const createProject = (name) => {
  // the creation timestamp is the unique identifier of this project
  const createdAt = Date.now();
  const taskList = [];

  // getters
  const getName = () => name;
  const getTasks = () => taskList;
  const getCreatedAt = () => createdAt;

  // setters
  const setName = (newProjectName) => (name = newProjectName);

  // other methods
  const addTask = (taskObject) => taskList.push(taskObject);

  return { getName, getTasks, getCreatedAt, setName, addTask };
};

export default createProject;
