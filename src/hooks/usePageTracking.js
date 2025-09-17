// hooks/useReveal.js
import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            observer.unobserve(entry.target); // only animate once
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

// import React from "react";
// import usePageTracking from "./hooks/usePageTracking";

// const App = () => {
//   usePageTracking();

//   return (
//     <>
//       {/* Your existing router, navbar, routes, etc */}
//     </>
//   );
// };

// export default App;