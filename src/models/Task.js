import { format } from "date-fns";

const create = (name) => {
  let description = "";
  let dueDate = "";
  let urgency = false;
  let completed = false;

  const getName = () => name;
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
    const [year, month, day] = dueDateString.split("-");
    // month is zero-indexed
    dueDate = format(new Date(year, month - 1, day), "dd/MM/yyyy");
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
    getName,
    viewDetails,
    setDescription,
    setDueDate,
    setUrgency,
    setCompletion,
  };
};

const recreateFromJSON = ({
  name,
  description,
  dueDate,
  urgency,
  completed,
}) => {
  const task = create(name);
  task.setDescription(description);
  task.setDueDate(dueDate);
  task.setUrgency(urgency);
  task.setCompletion(completed);

  return task;
};

export { create, recreateFromJSON };
