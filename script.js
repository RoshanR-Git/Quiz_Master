const input = document.querySelector("input");
const result = document.querySelector(".paracap");
const buttons = document.querySelectorAll(".button");
function strictScoring(answer) 
{
  return answer === "4" ? 1 : 0;
}

function lenientScoring(answer) 
{
  return answer.includes("4") ? 1 : 0;
}
function calculateScore(callback) 
{
  const userAnswer = input.value.trim();
  const score = callback(userAnswer); // calls either strictScoring or lenientScoring
  result.innerText = `Your score is: ${score}/1`;
}

buttons[0].addEventListener("click", () => calculateScore(strictScoring));
buttons[1].addEventListener("click", () => calculateScore(lenientScoring));
