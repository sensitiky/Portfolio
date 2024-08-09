document.addEventListener("DOMContentLoaded", () => {
  const fileList = document.querySelectorAll(".file-list li");
  const tabBar = document.querySelector(".tab-bar");
  const codeEditor = document.querySelector(".code-editor");
  const modeToggle = document.getElementById("mode-toggle");

  // Sample content for files
  const filesContent = {
    "index.html":
      '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Simple Text Editor</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n</body>\n</html>',
    "styles.css":
      "body {\n    background-color: #282c34;\n    color: white;\n    font-family: Arial, sans-serif;\n}",
    "app.js": 'console.log("Hello, World!");\n\n// Add your JavaScript here',
  };

  let openFiles = [];

  function openFile(fileName) {
    if (!openFiles.includes(fileName)) {
      openFiles.push(fileName);
      createTab(fileName);
    }
    switchToFile(fileName);
  }

  function createTab(fileName) {
    const tab = document.createElement("div");
    tab.className = "tab";
    tab.dataset.file = fileName;

    const tabText = document.createElement("span");
    tabText.textContent = fileName;

    const closeBtn = document.createElement("span");
    closeBtn.className = "close-btn";
    closeBtn.textContent = "x";
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeTab(fileName);
    });

    tab.appendChild(tabText);
    tab.appendChild(closeBtn);
    tabBar.appendChild(tab);

    tab.addEventListener("click", () => {
      switchToFile(fileName);
    });
  }

  function switchToFile(fileName) {
    codeEditor.value = filesContent[fileName];
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.file === fileName);
    });
    document.querySelectorAll(".file-list li").forEach((file) => {
      file.classList.toggle("active", file.dataset.file === fileName);
    });
  }

  function closeTab(fileName) {
    openFiles = openFiles.filter((file) => file !== fileName);
    const tab = document.querySelector(`.tab[data-file="${fileName}"]`);
    if (tab) {
      tab.remove();
    }
    if (openFiles.length > 0) {
      switchToFile(openFiles[openFiles.length - 1]);
    } else {
      codeEditor.value = "";
    }
  }

  // Event listeners
  fileList.forEach((file) => {
    file.addEventListener("click", () => {
      openFile(file.dataset.file);
    });
  });

  // Open the first file by default
  openFile("index.html");

  // Mode toggle functionality
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
  });
});
