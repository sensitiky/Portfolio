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

  startMenuButton.addEventListener("click", () => {
    toggleStartMenu();
  });

  projectsIcon.addEventListener("click", () => {
    toggleProjectsModal();
  });

  closeBtn.addEventListener("click", () => {
    toggleProjectsModal();
  });

  chromeIcon.addEventListener("click", () => {
    toggleChromeModal();
  });

  closeChromeBtn.addEventListener("click", () => {
    toggleChromeModal();
  });

  powerButton.addEventListener("click", () => {
    closeChromeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeStartMenu();
      closeProjectsModal();
      closeChromeModal();
      event.preventDefault();
    } else if (
      event.key === "Meta" ||
      (event.key === "Control" && event.key === "Escape")
    ) {
      toggleStartMenu();
      event.preventDefault();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      !startMenu.contains(event.target) &&
      !startMenuButton.contains(event.target)
    ) {
      closeStartMenu();
    }
    if (
      !projectsModal.contains(event.target) &&
      !projectsIcon.contains(event.target) &&
      !closeBtn.contains(event.target)
    ) {
      closeProjectsModal();
    }
    if (
      !chromeModal.contains(event.target) &&
      !chromeIcon.contains(event.target) &&
      !closeChromeBtn.contains(event.target)
    ) {
      closeChromeModal();
    }
  });

  function toggleStartMenu() {
    startMenu.classList.toggle("show");
  }

  function closeStartMenu() {
    startMenu.classList.remove("show");
  }

  function toggleProjectsModal() {
    projectsModal.classList.toggle("hidden");
    projectsModal.classList.toggle("show");
  }

  function closeProjectsModal() {
    projectsModal.classList.add("hidden");
    projectsModal.classList.remove("show");
  }

  function toggleChromeModal() {
    chromeModal.classList.toggle("hidden");
    chromeModal.classList.toggle("show");
  }

  function closeChromeModal() {
    chromeModal.classList.add("hidden");
    chromeModal.classList.remove("show");
  }

  function updateTime() {
    const timeElement = document.querySelector(".time");
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${hours % 12 || 12}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${ampm}`;
    timeElement.textContent = formattedTime;
  }

  setInterval(updateTime, 1000);
  updateTime();
});
