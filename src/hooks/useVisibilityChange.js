import { useEffect } from "react";

function useVisibilityChange(sidebar) {
  useEffect(() => {
    let isWindowActive = true;

    const handleVisibilityChange = () => {
      const elements = document.querySelectorAll(
        ".spin, .spin-reverse, .animate-slide-toRight, .animate-slide-toLeft",
      );
      if (!isWindowActive || sidebar) {
        // console.log("Window is not active or sidebar is active");
        elements.forEach((element) => {
          // console.log("Pausing animation for element:", element);
          element.style.animationPlayState = "paused";
        });
      } else {
        // console.log("Window is active and sidebar is not active");
        elements.forEach((element) => {
          // console.log("Resuming animation for element:", element);
          element.style.animationPlayState = "running";
        });
      }
    };

    const onBlur = () => {
      isWindowActive = false;
      handleVisibilityChange();
    };

    const onFocus = () => {
      isWindowActive = true;
      handleVisibilityChange();
    };

    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);

    // Run handleVisibilityChange once to handle the initial sidebar value
    handleVisibilityChange();

    return () => {
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
    };
  }, [sidebar]); // Re-run the effect when `sidebar` changes
}

export default useVisibilityChange;
