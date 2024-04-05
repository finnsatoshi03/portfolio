import { motion } from "framer-motion";

const transition = (OgComponent) => {
  const TransitionComponent = () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in fixed left-0 top-0 z-50 h-screen w-full origin-bottom bg-black"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out fixed left-0 top-0 z-50 h-screen w-full origin-top bg-black"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
  TransitionComponent.displayName = `Transition(${getDisplayName(OgComponent)})`;
  return TransitionComponent;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default transition;
