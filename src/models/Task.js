const createTask = (name, recreatingFromJSON = false) => {
  let id = Date.now();
  let description = "";
  let dueDate = "";
  let urgency = false;
  let completed = false;

  const getId = () => id;
  const viewDetails = () => ({
    id,
    name,
    description,
    dueDate,
    urgency,
    completed,
  });

  const setId = (retrievedId) => {
    if (!recreatingFromJSON)
      throw new Error(
        "Cannot update the ID of a task unless you're recreating it from localStorage in JSON format."
      );
    id = retrievedId;
  };

  const setDescription = (newDescription) => (description = newDescription);
  const setDueDate = (dueDateString) => {
    if (!dueDateString) return;
    dueDate = dueDateString;
  };
  const setUrgency = (bool) => {
    if (typeof bool != "boolean") return;
    urgency = bool;
  };
  const setCompletion = (bool) => {
    if (typeof bool != "boolean") return;
    completed = bool;
  };

  return {
    getId,
    viewDetails,
    setId,
    setDescription,
    setDueDate,
    setUrgency,
    setCompletion,
  };
};

const recreateTaskFromJSON = ({
  id,
  name,
  description,
  dueDate,
  urgency,
  completed,
}) => {
  const task = createTask(name, true);
  task.setId(id);
  task.setDescription(description);
  task.setDueDate(dueDate);
  task.setUrgency(urgency);
  task.setCompletion(completed);

  return task;
};

export { createTask, recreateTaskFromJSON };
