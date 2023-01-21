const welcomeSign = document.getElementById("welcome-sign");

welcomeSign.addEventListener("mouseenter", changeWelcomeSignColor);

welcomeSign.addEventListener("mouseleave", restoreWelcomeSignColor);

welcomeSign.addEventListener("click", showModal);

function changeWelcomeSignColor() {
  welcomeSign.style.backgroundColor = "violet";
  welcomeSign.style.cursor = "pointer";
}

function restoreWelcomeSignColor() {
  welcomeSign.style.backgroundColor = "lavender";
  welcomeSign.style.cursor = "auto";
}

const modal = document.getElementById("modal");

modal.querySelector("#modal-close-button").addEventListener("click", hideModal);

modal
  .querySelector("#modal-answer-button")
  .addEventListener("click", toggleAnswer);

function showModal() {
  modal.style.display = "block";
}
function hideModal() {
  modal.style.display = "none";
}

function toggleAnswer() {
  const answerButton = modal.querySelector("#modal-answer-button");
  const answerText = modal.querySelector("#modal-text");

  if (answerButton.textContent === "Show Answer") {
    answerButton.textContent = "Hide Answer";
    answerText.textContent = "Because he didn't get arrays!";
  } else {
    answerButton.textContent = "Show Answer";
    answerText.textContent = "Question: Why did the Programmer quit his job?";
  }
}
document.getElementById("night-mode-button").addEventListener("click", function () {
    document.body.classList.toggle("night-mode");
  });

document.querySelectorAll(".star").forEach(function (star) {
  const xPos = Math.floor(Math.random() * 100);
  const yPos = Math.floor(Math.random() * 100);
  star.style.top = `${yPos}%`;
  star.style.left = `${xPos}%`;
});

const sky = $("#sky");
for (let i = 0; i < 100; i++) {
  const xPos = Math.floor(Math.random() * 100);
  const yPos = Math.floor(Math.random() * 100);
  $("<div>", {
    class: "star",
    css: {
      top: `${yPos}%`,
      left: `${xPos}%`
    }
  }).appendTo(sky);
}
