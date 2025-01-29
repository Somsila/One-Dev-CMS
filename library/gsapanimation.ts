// composables/useGSAPAnimations.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

export function useGSAPAnimations() {
  const animateFromTo = (
    selector: string,
    from: gsap.TweenVars,
    to: gsap.TweenVars
  ) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        from,
        {
          ...to,
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none",
            ...(typeof to.scrollTrigger === 'object' ? to.scrollTrigger : {}),
            // ...(to.scrollTrigger as ScrollTrigger.Vars),
          },
        }
      );
    });
  };
  const animateTyping = (selector: string) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      const textContent = element.textContent || "";
      element.innerHTML = textContent
        .split("")
        .map(
          (char) =>
            `<span style="opacity: 0; display: inline-block;">${char}</span>`
        )
        .join("");

      gsap.to(element.children, {
        opacity: 1,
        duration: 0.5,
        stagger: 0.05, // Delay between letters
        ease: "power2.inOut",

      });
    });
  };
  onMounted(() => {
    // Animate elements from Left to Right
    animateFromTo(".elementL_R", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 });

    // Animate elements from Right to Left
    animateFromTo(".elementR_L", { opacity: 0, x: 800 }, { opacity: 1, x: 0, duration: 1 });

    // Animate elements from Bottom to Top
    animateFromTo(".elementB_T", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 });

    // Animate elements from Top to Bottom
    animateFromTo(".elementT_B", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });

    // Animate opacity from 0 to 1
    animateFromTo(".element0_100", { opacity: 0 }, { opacity: 1, duration: 3 });
    animateFromTo(".element0_1001s", { opacity: 0 }, { opacity: 1, duration: 1 });
    animateFromTo(".roundL_R", {x: 0},{rotation: 360,  duration: 1});
    animateFromTo(".roundL_R-1500", {x: -1500},{x: 0, rotation: 360,  duration: 1});
    gsap.fromTo(".roundR_L", {y: -100},{rotation: 360, y: 100, duration: 1});
gsap.to(".animateB_S", { duration: 1, scale: 2, ease: "expoScale(1, 2)" });

  });

  return {
    animateFromTo,
    animateTyping,
  };
}
