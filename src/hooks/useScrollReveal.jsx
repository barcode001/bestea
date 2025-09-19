// import { useEffect, useRef } from "react";

// export function useReveal(inlineOptions) {
//   const ref = useRef(null);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     if (!("IntersectionObserver" in window)) {
//       el.classList.add("is-inview");
//       return;
//     }
//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           el.classList.add("is-inview");
//           io.unobserve(el);
//         }
//       },
//       { rootMargin: "0px 0px -10% 0px", threshold: 0.1, ...inlineOptions }
//     );
//     io.observe(el);
//     return () => io.disconnect();
//   }, [inlineOptions]);
//   return ref;
// }

// import { useReveal } from "../hooks/useReveal";

// export default function MenuCard({ children }) {
//   const ref = useReveal();
//   return (
//     <div ref={ref} className="menu-card reveal reveal--up reveal--d200">
//       {children}
//     </div>
//   );
// }

/* <h2 class="reveal reveal--down">Popular Categories</h2>

<div class="menu-card reveal reveal--up reveal--d100"> … </div>
<div class="menu-card reveal reveal--up reveal--d200"> … </div>
<div class="menu-card reveal reveal--up reveal--d300"> … </div>

<section class="reveal reveal--left"> … </section> */

import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
