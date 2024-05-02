const createProject = (name) => {
  // the creation timestamp is the unique identifier of this project
  const id = Date.now();
  const taskList = [];

  // getters
  const getName = () => name;
  const getId = () => id;

  // setters
  const setName = (newProjectName) => (name = newProjectName);

  return { getName, getId, setName, taskList };
};

export default createProject;

//! it might be dangerous to have taskList be public property that can be manipulated at will (can it potentially be reassigned too despite being a const?? probably??)
