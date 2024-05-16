import displayProjectPage from "./displayProjectPage";

function handleNavLinkClicks(projectName) {
  const projectsIncludingInbox = document.querySelectorAll(
    "div[class=link], div.link.selected"
  );
  // clear all previously selected pages (link has '.selected' attached)
  projectsIncludingInbox.forEach((div) => div.classList.remove("selected"));
  displayProjectPage(projectName);
}

export default handleNavLinkClicks;
