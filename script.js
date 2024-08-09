document.addEventListener("DOMContentLoaded", function () {
  const startMenuButton = document.querySelector(".start-menu-button");
  const startMenu = document.querySelector(".start-menu");
  const projectsIcon = document.getElementById("projects-icon");
  const projectsModal = document.getElementById("projects-modal");
  const closeBtn = document.querySelector(".close-btn");
  const chromeIcon = document.getElementById("chrome-icon");
  const chromeModal = document.getElementById("chrome-modal");
  const closeChromeBtn = document.querySelector(".close-chrome-btn");
  const powerButton = document.querySelector(".power-button");
  const resumeIcon = document.getElementById("resume-icon");
  const resumeModal = document.getElementById("resume-modal");
  const closeResumeBtn = document.querySelector(".close-resume-btn");
  const techIcon = document.getElementById("tech-icon");
  const techModal = document.getElementById("tech-modal");
  const closeTechBtn = document.querySelector(".win11-folder-close-btn");
  const systemTray = document.querySelector(".system-tray");
  const systemTrayModal = document.getElementById("system-tray-modal");

  // Function to toggle the System Tray modal
  function toggleSystemTrayModal() {
    systemTrayModal.classList.toggle("hidden");
    systemTrayModal.classList.toggle("show");
  }
  // Event listener for System Tray click
  if (systemTray && systemTrayModal) {
    systemTray.addEventListener("click", () => {
      toggleSystemTrayModal();
    });
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

  // Make each modal draggable
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

  // Function to toggle the Tech Stack modal
  function toggleTechModal() {
    techModal.classList.toggle("hidden");
    techModal.classList.toggle("show");
  }

  // Event listeners for Tech Stack modal
  if (techIcon && techModal) {
    techIcon.addEventListener("click", () => {
      toggleTechModal();
    });

    if (closeTechBtn) {
      closeTechBtn.addEventListener("click", () => {
        toggleTechModal();
      });
    }
  }

  // Function to toggle the Resume modal
  function toggleResumeModal() {
    resumeModal.classList.toggle("hidden");
    resumeModal.classList.toggle("show");
  }

  // Event listeners for Resume modal
  if (resumeIcon && resumeModal) {
    resumeIcon.addEventListener("click", () => {
      toggleResumeModal();
    });

    if (closeResumeBtn) {
      closeResumeBtn.addEventListener("click", () => {
        toggleResumeModal();
      });
    }
  }

  // Function to toggle the Start Menu
  function toggleStartMenu() {
    if (startMenu) startMenu.classList.toggle("show");
  }

  // Event listener for Start Menu button
  if (startMenuButton && startMenu) {
    startMenuButton.addEventListener("click", () => {
      toggleStartMenu();
    });
  }

  // Function to toggle the Projects modal
  function toggleProjectsModal() {
    if (projectsModal) {
      projectsModal.classList.toggle("hidden");
      projectsModal.classList.toggle("show");
    }
  }

  // Event listeners for Projects modal
  if (projectsIcon && projectsModal && closeBtn) {
    projectsIcon.addEventListener("click", () => {
      toggleProjectsModal();
    });

    closeBtn.addEventListener("click", () => {
      toggleProjectsModal();
    });
  }

  // Function to toggle the Chrome modal
  function toggleChromeModal() {
    if (chromeModal) {
      chromeModal.classList.toggle("hidden");
      chromeModal.classList.toggle("show");
    }
  }

  // Event listeners for Chrome modal
  if (chromeIcon && chromeModal && closeChromeBtn) {
    chromeIcon.addEventListener("click", () => {
      toggleChromeModal();
    });

    closeChromeBtn.addEventListener("click", () => {
      toggleChromeModal();
    });
  }

  // Function to close the Chrome modal
  function closeChromeModal() {
    chromeModal.classList.add("hidden");
    chromeModal.classList.remove("show");
  }

  // Function to close the Projects modal
  function closeProjectsModal() {
    projectsModal.classList.add("hidden");
    projectsModal.classList.remove("show");
  }

  //Function to close the Start menu
  function closeStartMenu() {
    startMenu.classList.remove("show");
  }

  // Function to close the Resume modal
  function closeResumeModal() {
    if (resumeModal) {
      resumeModal.classList.add("hidden");
      resumeModal.classList.remove("show");
    }
  }

  // Event listener for the Power Button to close Chrome modal
  if (powerButton) {
    powerButton.addEventListener("click", () => {
      closeChromeModal();
    });
  }

  // Close all modals and start menu on Escape key press
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeStartMenu();
      closeProjectsModal();
      closeChromeModal();
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

  // Close modals and start menu if clicked outside
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
      !closeBtn.contains(event.target)
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
  });

  // Close the System Tray modal when clicking outside
  document.addEventListener("click", (event) => {
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
