import { useEffect, useRef } from "react";

export function useReveal(inlineOptions) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-inview");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-inview");
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1, ...inlineOptions }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inlineOptions]);
  return ref;
}

// import { useReveal } from "../hooks/useReveal";

// export default function MenuCard({ children }) {
//   const ref = useReveal();
//   return (
//     <div ref={ref} className="menu-card reveal reveal--up reveal--d200">
//       {children}
//     </div>
//   );
// }

{
  /* <h2 class="reveal reveal--down">Popular Categories</h2>

<div class="menu-card reveal reveal--up reveal--d100"> … </div>
<div class="menu-card reveal reveal--up reveal--d200"> … </div>
<div class="menu-card reveal reveal--up reveal--d300"> … </div>

<section class="reveal reveal--left"> … </section> */
}
