import { format } from "date-fns";

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

  const setName = (newName) => (name = newName);
  const setDescription = (newDescription) => (description = newDescription);
  const setDueDate = (dueDateString) => {
    const [day, month, year] = dueDateString.split("/");
    // month is zero-indexed
    dueDate = format(new Date(year, month - 1, day), "dd/MM/yyyy");
  };
  const setAsUrgent = () => (urgency = true);
  const setComplete = () => (completed = true);

  return {
    viewDetails,
    setDescription,
    setDueDate,
    setAsUrgent,
    setComplete,
  };
};

const createTaskFromJSON = (retrievedTask) => {
  const reconstructedTask = createTask(retrievedTask.name);

  for (const [retrievedProperty, retrievedValue] of Object.entries(
    retrievedTask
  )) {
    reconstructedTask.set[retrievedProperty](retrievedValue);
  }

  return reconstructedTask;
};

export { createTask, createTaskFromJSON };
