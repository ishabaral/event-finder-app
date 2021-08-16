import { useEffect, useRef } from "react";

const useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    const mabeHandler = (event) => {
      // if (!domNode.current.contains(event.target)) {
      if (domNode.current && !!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", mabeHandler);

    return () => {
      document.removeEventListener("mousedown", mabeHandler);
    };
  });
};

// add this to where you import
// let domNode = useClickOutside(() => {
//     setResponsive(false);
//   });

export default useClickOutside;
