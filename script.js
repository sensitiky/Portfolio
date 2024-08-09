document.addEventListener("DOMContentLoaded", function () {
  const startMenuButton = document.querySelector(".start-menu-button");
  const startMenu = document.querySelector(".start-menu");
  const projectsIcon = document.getElementById("projects-icon");
  const projectsModal = document.getElementById("projects-modal");
  const closeProjectsBtn = projectsModal.querySelector(".close-btn");
  const chromeIcon = document.getElementById("chrome-icon");
  const chromeModal = document.getElementById("chrome-modal");
  const powerButton = document.querySelector(".power-button");
  const resumeIcon = document.getElementById("resume-icon");
  const resumeModal = document.getElementById("resume-modal");
  const closeResumeBtn = resumeModal.querySelector(".close-resume-btn");
  const techIcon = document.getElementById("tech-icon");
  const techModal = document.getElementById("tech-modal");
  const closeTechBtn = techModal.querySelector(".win11-folder-close-btn");
  const systemTray = document.querySelector(".system-tray");
  const systemTrayModal = document.getElementById("system-tray-modal");
  const vscodeIcon = document.getElementById("vs-code-icon");
  const vsCodeIcon2 = document.getElementById("vs-code-icon-2");
  const vscodeModal = document.getElementById("vs-code-modal");
  const closeVsCodeBtn = vscodeModal.querySelector(".close-btn");

  // Function to toggle the visibility of a modal
  function toggleModal(modal) {
    modal.classList.toggle("hidden");
    modal.classList.toggle("show");
  }

  // Function to close the Projects modal
  function closeProjectsModal() {
    projectsModal.classList.add("hidden");
    projectsModal.classList.remove("show");
  }
  function closeTechmodal() {
    techModal.classList.add("hidden");
    techModal.classList.remove("show");
  }
  // Function to close the Resume modal
  function closeResumeModal() {
    if (resumeModal) {
      resumeModal.classList.add("hidden");
      resumeModal.classList.remove("show");
    }
  }
  // Function to make a modal draggable
  function makeDraggable(modal, header) {
    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener("mousedown", (e) => {
      isDragging = true;
      offsetX = e.clientX - modal.getBoundingClientRect().left;
      offsetY = e.clientY - modal.getBoundingClientRect().top;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });

    function onMouseMove(e) {
      if (isDragging) {
        modal.style.left = `${e.clientX - offsetX}px`;
        modal.style.top = `${e.clientY - offsetY}px`;
        modal.style.transform = `translate(0, 0)`; // Disable center translate when dragging
      }
    }

    function onMouseUp() {
      isDragging = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
  }

  // Apply draggable functionality to each modal
  if (projectsModal) {
    makeDraggable(projectsModal, projectsModal.querySelector(".modal-header"));
  }
  if (chromeModal) {
    makeDraggable(chromeModal, chromeModal.querySelector(".modal-header"));
  }
  if (resumeModal) {
    makeDraggable(resumeModal, resumeModal.querySelector(".modal-header"));
  }
  if (techModal) {
    makeDraggable(techModal, techModal.querySelector(".win11-folder-header"));
  }
  if (vscodeModal) {
    makeDraggable(vscodeModal, vscodeModal.querySelector(".modal-header"));
  }

  // Event listeners for toggling modals
  if (vscodeIcon && vscodeModal) {
    vsCodeIcon2.addEventListener(
      "click",
      () => toggleModal(vscodeModal) & closeStartMenu()
    );
    vscodeIcon.addEventListener("click", () => toggleModal(vscodeModal));
    closeVsCodeBtn.addEventListener("click", () => toggleModal(vscodeModal));
  }

  if (techIcon && techModal) {
    techIcon.addEventListener("click", () => toggleModal(techModal));
    closeTechBtn.addEventListener("click", () => toggleModal(techModal));
  }

  if (resumeIcon && resumeModal) {
    resumeIcon.addEventListener("click", () => toggleModal(resumeModal));
    closeResumeBtn.addEventListener("click", () => toggleModal(resumeModal));
  }

  if (projectsIcon && projectsModal && closeProjectsBtn) {
    projectsIcon.addEventListener("click", () => toggleModal(projectsModal));
    closeProjectsBtn.addEventListener("click", () =>
      toggleModal(projectsModal)
    );
  }

  if (chromeIcon && chromeModal && closeChromeBtn) {
    chromeIcon.addEventListener("click", () => toggleModal(chromeModal));
    closeChromeBtn.addEventListener("click", () => toggleModal(chromeModal));
  }

  // Event listener for System Tray
  if (systemTray && systemTrayModal) {
    systemTray.addEventListener("click", () => toggleModal(systemTrayModal));
  }

  // Function to toggle the Start Menu
  function toggleStartMenu() {
    if (startMenu) {
      startMenu.classList.toggle("show");
    }
  }

  // Event listener for Start Menu button
  if (startMenuButton && startMenu) {
    startMenuButton.addEventListener("click", () => toggleStartMenu());
  }

  // Function to close the Start Menu
  function closeStartMenu() {
    if (startMenu) {
      startMenu.classList.remove("show");
    }
  }

  // Event listener for Power Button
  if (powerButton) {
    powerButton.addEventListener("click", () => closeChromeModal());
  }

  // Close all modals and Start Menu on Escape key press
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeStartMenu();
      closeProjectsModal();
      closeTechmodal();
      closeResumeModal();
      event.preventDefault();
    } else if (
      event.key === "Meta" ||
      (event.key === "Control" && event.key === "Escape")
    ) {
      toggleStartMenu();
      event.preventDefault();
    }
  });

  // Close modals and Start Menu if clicked outside
  document.addEventListener("click", (event) => {
    if (
      startMenu &&
      !startMenu.contains(event.target) &&
      !startMenuButton.contains(event.target)
    ) {
      closeStartMenu();
    }
    if (
      projectsModal &&
      !projectsModal.contains(event.target) &&
      !projectsIcon.contains(event.target) &&
      !closeProjectsBtn.contains(event.target)
    ) {
      closeProjectsModal();
    }
    if (
      chromeModal &&
      !chromeModal.contains(event.target) &&
      !chromeIcon.contains(event.target) &&
      !closeChromeBtn.contains(event.target)
    ) {
      closeChromeModal();
    }
    if (
      resumeModal &&
      !resumeModal.contains(event.target) &&
      !resumeIcon.contains(event.target) &&
      !closeResumeBtn.contains(event.target)
    ) {
      closeResumeModal();
    }
    if (
      techModal &&
      !techModal.contains(event.target) &&
      !techIcon.contains(event.target) &&
      !closeTechBtn.contains(event.target)
    ) {
      closeTechmodal();
    }
    if (
      systemTrayModal &&
      !systemTrayModal.contains(event.target) &&
      !systemTray.contains(event.target)
    ) {
      systemTrayModal.classList.add("hidden");
      systemTrayModal.classList.remove("show");
    }
  });

  // Function to update the time display in the taskbar
  function updateTime() {
    const timeElement = document.querySelector(".time");
    if (timeElement) {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedTime = `${hours % 12 || 12}:${
        minutes < 10 ? "0" : ""
      }${minutes} ${ampm}`;
      timeElement.textContent = formattedTime;
    }
  }

  // Update the time every second
  setInterval(updateTime, 1000);
  updateTime();
});
