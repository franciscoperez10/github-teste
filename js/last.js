console.log("JavaScript is working!");

const pageTitle = document.getElementById("pageTitle");
const welcomeMessage = document.getElementById("welcomeMessage");
const statusMessage = document.getElementById("statusMessage");

statusMessage.textContent = "O JavaScript encontrou este parágrafo.";
pageTitle.textContent = "Olá, turma!";
welcomeMessage.textContent = "Hoje vamos aprender DOM.";

const messages = document.getElementsByClassName("message");
const paragraphs = document.getElementsByTagName("p");
messages[1].textContent = "Encontrada pela classe.";
console.log(`A página tem ${paragraphs.length} parágrafos.`);

const selectedTitle = document.querySelector("#pageTitle");
const firstMessage = document.querySelector(".message");
const allMessages = document.querySelectorAll(".message");
selectedTitle.classList.add("highlighted");
firstMessage.textContent = "Encontrada por querySelector.";
allMessages[1].textContent = "Encontrada por querySelectorAll.";

const helloButton = document.getElementById("helloButton");
const resultMessage = document.getElementById("resultMessage");

helloButton.addEventListener("click", () => {
  resultMessage.textContent = "Olá!";
});

const searchInput = document.getElementById("searchInput");
const previewMessage = document.getElementById("previewMessage");

searchInput.addEventListener("input", (event) => {
  previewMessage.textContent = event.target.value;
});

const ageInput = document.getElementById("ageInput");
const ageMessage = document.getElementById("ageMessage");

ageInput.addEventListener("input", () => {
  if (ageInput.value === "") {
    ageMessage.textContent = "";
    return;
  }

  const age = Number(ageInput.value);
  if (age >= 18) {
    ageMessage.textContent = "Adulto";
  } else {
    ageMessage.textContent = "Menor de idade";
  }
});

const themeSelect = document.getElementById("themeSelect");
const themeMessage = document.getElementById("themeMessage");

themeSelect.addEventListener("change", () => {
  if (themeSelect.value === "dark") {
    document.body.classList.add("dark-mode");
    themeMessage.textContent = "Modo escuro ativo";
  } else {
    document.body.classList.remove("dark-mode");
    themeMessage.textContent = "Modo claro ativo";
  }
});

const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const feedbackMessage = document.getElementById("feedbackMessage");

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  feedbackMessage.textContent = `Olá, ${nameInput.value}!`;
});

const taskList = document.getElementById("taskList");
const sampleTaskItem = document.createElement("li");
sampleTaskItem.textContent = "Estudar DOM ";

const removeSampleTaskButton = document.createElement("button");
removeSampleTaskButton.type = "button";
removeSampleTaskButton.textContent = "Remover";
removeSampleTaskButton.addEventListener("click", () => {
  sampleTaskItem.remove();
});

sampleTaskItem.append(removeSampleTaskButton);
taskList.append(sampleTaskItem);

const objectTask = { title: "Praticar eventos" };
const tasks = [objectTask, { title: "Rever seletores" }];

for (const task of tasks) {
  const taskItem = document.createElement("li");
  taskItem.textContent = task.title;
  taskList.append(taskItem);
}
