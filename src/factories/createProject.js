const createProject = (name) => {
  // the creation timestamp is the unique identifier of this project
  const id = Date.now();
  const getId = () => id;

  const tasks = [];

  return { name, tasks, getName, getId };
};

export default createProject;

//! it might be dangerous to have taskList be public property that can be manipulated at will (can it potentially be reassigned too despite being a const?? probably??)
