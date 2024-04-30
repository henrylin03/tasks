import { format } from "date-fns";

const createTask = (title) => {
  const viewTitle = () => title;
  const setTitle = (updatedTitle) => (title = updatedTitle);

  // use description field to add more specific requirements and context that isn't necessarily a subtask
  let description = "";
  const setDescription = (text) => (description = text);
  const viewDescription = () => description;

  let dueDateAndTime = null;
  // default to 12am of due date if user does not provide a time
  const setDueDateAndTime = (year, month, date, time = 0) => {
    dueDateAndTime = format(
      new Date(year, month, date, time),
      "dd/MM/yyyy (hh:mm aaa)"
    );
  };
  const viewDueDateAndTime = () => dueDateAndTime;

  const setterHandler = { setTitle, setDescription, setDueDateAndTime };
  return {
    viewTitle,
    viewDescription,
    viewDueDateAndTime,
    setterHandler,
  };
};

export default createTask;
