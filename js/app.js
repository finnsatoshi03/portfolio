// Function to apply the glitch effect to an element
function applyGlitchEffect(element, glitchedWords) {
  const originalText = element.innerText;
  let currentWordIndex = 0;

  setInterval(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      element.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return glitchedWords[currentWordIndex % glitchedWords.length][
              index %
                glitchedWords[currentWordIndex % glitchedWords.length].length
            ];
          }
          return String.fromCharCode(32 + Math.floor(Math.random() * 95)); // Random character from ASCII 32 to 126 (including symbols)
        })
        .join("");

      if (
        iterations >=
        glitchedWords[currentWordIndex % glitchedWords.length].length * 6
      ) {
        clearInterval(interval);
      }

      iterations += 1;
    }, 30);

    currentWordIndex = (currentWordIndex + 1) % glitchedWords.length;
  }, 2000); // Change word every 2 seconds
}

// Automatically apply the glitch effect when the page loads
window.onload = () => {
  const designsElement = document.getElementById("change-designs");
  const wordsElement = document.getElementById("change-words");

  const designsGlitchedText = [
    "# designs",
    "AnotherDesign",
    "MoreDesigns",
    "GlitchDesigns",
    "RandomDesigns",
    "FinalDesign",
  ]; // Modify as needed
  const wordsGlitchedText = [
    "develop",
    "AnotherWord",
    "MoreWords",
    "GlitchWords",
    "RandomWords",
    "FinalWord",
  ]; // Modify as needed

  applyGlitchEffect(designsElement, designsGlitchedText);
  applyGlitchEffect(wordsElement, wordsGlitchedText);
};
