import { format } from "date-fns";

const createTask = (title) => {
  const viewTitle = () => title;
  const setTitle = (updatedTitle) => (title = updatedTitle);

  // use description field to add more specific requirements and context that isn't necessarily a subtask
  let description = "";
  const setDescription = (text) => (description = text);
  const viewDescription = () => description;

  let dueDate = null;
  const setDueDate = (year, month, date) =>
    (dueDate = format(new Date(year, month, date), "dd/MM/yyyy"));
  const viewDueDate = () => dueDate;

  const setterHandler = { setTitle, setDescription, setDueDate };
  return {
    viewTitle,
    viewDescription,
    viewDueDate,
    setterHandler,
  };
};

export default createTask;
