import displayPage from "../displayPage";

function handleNavLinkClicks(projectId) {
  const projectsIncludingInbox = document.querySelectorAll(
    "div[class=link], div.link.selected"
  );
  const navbarLink = document.querySelector(`[data-id="${projectId}"]`);

  projectsIncludingInbox.forEach((div) => div.classList.remove("selected"));
  navbarLink.classList.add("selected");
  displayPage(projectId);
}

export default handleNavLinkClicks;
