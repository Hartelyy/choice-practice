const scripts = [
  {
    "number": "01",
    "question": "산을 좋아하나요, 바다를 좋아하나요?",
    "choices": [
      { "text": "산", "next": "02A" },
      { "text": "바다", "next": "02B" }
    ]
  },
  {
    "number": "02A",
    "question": "등산을 좋아하시나요?",
    "choices": [
      { "text": "예", "result": "등산을 좋아하는 분이시군요!" },
      { "text": "아니요", "next": "03A" }
    ]
  },
  {
    "number": "02B",
    "question": "바다에서 수영을 좋아하시나요?",
    "choices": [
      { "text": "예", "result": "수영을 좋아하는 분이시군요!" },
      { "text": "아니요", "next": "03B" }
    ]
  },
  {
    "number": "03A",
    "question": "하이킹을 좋아하시나요?",
    "choices": [
      { "text": "예", "result": "하이킹을 좋아하는 분이시군요!" }
    ]
  }
];

let currentNumber = "01";

function renderQuestion() {
  const script = scripts.find(s => s.number === currentNumber);
  if (!script) return;
  
  document.getElementById("question").innerText = script.question;

  const choicesBox = document.getElementById("choices-box");
  choicesBox.innerHTML = ''; // 이전 선택지 제거

  script.choices.forEach(choice => {
    const choiceElement = document.createElement("div");
    choiceElement.className = "choice";
    choiceElement.innerText = choice.text;
    choiceElement.onclick = () => handleChoice(choice);
    choicesBox.appendChild(choiceElement);
  });
}

function handleChoice(choice) {
  if (choice.next) {
    currentNumber = choice.next;
    renderQuestion();
  } else if (choice.result) {
    displayResult(choice.result);
  }
}

function displayResult(result) {
  document.getElementById("question-box").innerHTML = `<p>${result}</p>`;
  document.getElementById("choices-box").innerHTML = ''; // 선택지 제거
}

document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});
