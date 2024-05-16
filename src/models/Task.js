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
  const setAsUrgent = (bool) => {
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
    setAsUrgent,
    setCompletion,
  };
};

export { createTask };
