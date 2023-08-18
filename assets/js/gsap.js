gsap.registerPlugin(ScrollTrigger);

const kvWrap = document.querySelector("section.kv");
const sun = document.querySelector(".sun");

const introWrap = document.querySelector("section.intro");
const intro = document.querySelector(".intro_wrap");

gsap.to(sun, {
  bottom: "-70%",

  scrollTrigger: {
    trigger: kvWrap,
    start: "top 5%",
    end: "bottom 50%",
    scrub: true,
  },
});

gsap.to(intro, {
  opacity: "1",

  scrollTrigger: {
    trigger: introWrap,
    start: "top -20%",
    end: "bottom 50%",
    scrub: true,
  },
});
