const createTask = (title) => {
  let details = "";
  const setDetails = (detailsText) => (details = detailsText);
  const viewDetails = () => details;

  return { title, setDetails, viewDetails };
};

export default createTask;
