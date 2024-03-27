function useVisibilityChange() {
  document.addEventListener("visibilitychange", function () {
    const elements = document.querySelectorAll(
      ".spin, .spin-reverse, .animate-slide-toRight, .animate-slide-toLeft",
    );
    if (document.hidden) {
      console.log("Document is hidden");
      elements.forEach((element) => {
        console.log("Pausing animation for element:", element);
        element.style.animationPlayState = "paused";
      });
    } else {
      console.log("Document is visible");
      elements.forEach((element) => {
        console.log("Resuming animation for element:", element);
        element.style.animationPlayState = "running";
      });
    }
  });
}

export default useVisibilityChange;
