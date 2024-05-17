const createTask = (name) => {
  let description = "";
  let dueDate = "";
  let urgency = false;
  let completed = false;

  const viewDetails = () => ({
    name,
    description,
    dueDate,
    urgency,
    completed,
  });

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
    viewDetails,
    setDescription,
    setDueDate,
    setUrgency,
    setCompletion,
  };
};

const recreateTaskFromJSON = ({
  name,
  description,
  dueDate,
  urgency,
  completed,
}) => {
  const task = createTask(name);
  task.setDescription(description);
  task.setDueDate(dueDate);
  task.setUrgency(urgency);
  task.setCompletion(completed);

  return task;
};

export { createTask, recreateTaskFromJSON };
