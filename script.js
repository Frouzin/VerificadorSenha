const passwordInput = document.querySelector("#passwordInput");

passwordInput.addEventListener("input", function () {
  const password = this.value;
  const strengthIndicator = document.querySelector(
    "#password-strength-indicator"
  );

  const strengthText = document.querySelector("#password-strength-text");

  const strengths = {
    0: "Muito Fraca",
    1: "Fraca",
    2: "Moderada",
    3: "Forte",
    4: "Muito Forte",
  };

  let score = 0;

  if (password.length >= 8) score++;
  if (password.match(/[a-z]/)) score++;
  if (password.match(/[A-Z]/)) score++;
  if (password.match(/[0-9]/)) score++;
  if (password.match(/[^a-zA-Z0-9]/)) score++;

  const width = (score / 4) * 100;

  strengthIndicator.computedStyleMap.width = `${width}%`;

  if (password.length > 0) {
    strengthText.innerHTML = `Força: ${strengths[score]}`;
  }
});
