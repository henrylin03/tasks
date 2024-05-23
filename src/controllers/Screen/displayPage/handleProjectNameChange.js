export default function handleProjectNameChange(e) {
  const newProjectName = e.target.value;

  e.target.addEventListener("blur", () => alert("hello"));

  console.log(newProjectName);
  return;
}
