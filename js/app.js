// Function to apply the glitch effect to an element
function applyGlitchEffect(element, glitchedWords) {
  let currentWordIndex = 0;

  setInterval(() => {
    const desiredText = glitchedWords[currentWordIndex % glitchedWords.length];
    let currentText = element.innerText;
    let iterations = 0;

    const interval = setInterval(() => {
      if (currentText.length !== desiredText.length) {
        currentText = desiredText;
      }

      element.innerText = currentText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return desiredText[index % desiredText.length];
          }
          return String.fromCharCode(32 + Math.floor(Math.random() * 95)); // Random character from ASCII 32 to 126 (including symbols)
        })
        .join("");

      if (iterations >= desiredText.length * 6) {
        clearInterval(interval);
      }

      iterations += 1;
    }, 70);

    currentWordIndex = (currentWordIndex + 1) % glitchedWords.length;
  }, 4000); // Change word every 4 seconds
}

// Automatically apply the glitch effect when the page loads
window.onload = () => {
  const designsElement = document.getElementById("change-designs");
  const wordsElement = document.getElementById("change-words");

  const designsGlitchedText = [
    "minimal",
    "eye-catching",
    "creative",
    "interactive",
    "good",
    "remarkable",
  ]; // Modify as needed
  const wordsGlitchedText = ["program", "code", "develop"]; // Modify as needed

  applyGlitchEffect(designsElement, designsGlitchedText);
  applyGlitchEffect(wordsElement, wordsGlitchedText);
};

// Function to apply the glitch effect to an element
function applyHoverGlitchEffect(element, glitchedWords) {
  let currentWordIndex = 0;

  function startGlitch() {
    const desiredText = glitchedWords[currentWordIndex % glitchedWords.length];
    const span = element.querySelector(".glitch-on-hover"); // Select the <span> element

    let currentText = span.innerText;
    let iterations = 0;

    const interval = setInterval(() => {
      if (currentText.length !== desiredText.length) {
        currentText = desiredText;
      }

      span.innerText = currentText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return desiredText[index % desiredText.length];
          }
          return String.fromCharCode(32 + Math.floor(Math.random() * 95)); // Random character from ASCII 32 to 126 (including symbols)
        })
        .join("");

      if (iterations >= desiredText.length * 6) {
        clearInterval(interval);
      }

      iterations += 1;
    }, 70);

    currentWordIndex = (currentWordIndex + 1) % glitchedWords.length;
  }

  element.addEventListener("mouseenter", startGlitch);
  element.addEventListener("mouseleave", () => {
    const span = element.querySelector(".glitch-on-hover");
    span.innerText = glitchedWords[currentWordIndex % glitchedWords.length];
  });
}

// Automatically apply the glitch effect to li elements on hover
document.querySelectorAll(".glitch-on-hover").forEach((span) => {
  const glitchedText = span.innerText;
  applyHoverGlitchEffect(span.parentElement, [glitchedText]);
});
