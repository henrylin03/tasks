import addTaskUsingModal from "../modals/addTaskUsingModal";

const updateHeader = (project) => {
  const SVGS = {
    project: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-list">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l11 0" />
                <path d="M9 12l11 0" />
                <path d="M9 18l11 0" />
                <path d="M5 6l0 .01" />
                <path d="M5 12l0 .01" />
                <path d="M5 18l0 .01" />
              </svg>`,
    inbox: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-inbox">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M4 13h3l3 3h4l3 -3h3" />
          </svg>`,
  };
  const pageIcon = document.querySelector(".page-icon");
  const pageTitle = document.querySelector("#page-title");
  const addTaskBtn = document.querySelector(".add-task");

  const currentProjectPageId = project.getId();
  const isInboxPage = currentProjectPageId === "inbox";

  pageTitle.value = project.getName();
  pageTitle.setAttribute("data-id", currentProjectPageId);
  pageTitle.disabled = isInboxPage;
  pageIcon.innerHTML = isInboxPage ? SVGS.inbox : SVGS.project;
  addTaskBtn.addEventListener("mousedown", () =>
    addTaskUsingModal(currentProjectPageId),
  );
};

export default updateHeader;
