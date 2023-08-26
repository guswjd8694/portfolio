const motionProject = (() => {
  const info = {
    horizon: { startValue: 0, endValue: 300, startPoint: 0.05, endPoint: 0.3 },
    reverse: { startValue: 0, endValue: 500, startPoint: 0.32, endPoint: 0.8 },
    moon: { startValue: 0, endValue: 300, startPoint: 0.82, endPoint: 0.9 },
    dark: { startValue: 0, endValue: 1, startPoint: 0.92, endPoint: 0.99 },
    light: { startValue: 1, endValue: 0, startPoint: 0, endPoint: 0.3 },
    swim: { startValue: 1, endValue: 0, startPoint: 0, endPoint: 0.3 },
    test: { startValue: 1, endValue: 0, startPoint: 0, endPoint: 0.3 },
  };

  const objs = {
    sun: document.querySelector(".sun"),
    sea: document.querySelector(".sea"),
    skill: document.querySelector(".skill"),
    skillWrap: document.querySelector(".skill-wrap"),
    moon: document.querySelector(".moon"),
    dark: document.querySelector(".skill .dark"),
    project: document.querySelector(".project"),
    projectArt: document.querySelector(".project .dark"),
    hipo: document.querySelector(".hipo-wrap"),
    miniFish: document.querySelector(".miniFish-wrap"),
    miniFish2: document.querySelector(".horizon04 .miniFish-wrap"),
    dori: document.querySelector(".dori"),
    dori2: document.querySelector(".horizon04 .dori"),
    nimo: document.querySelector(".nimo-wrap"),
    skillIntroTxt: document.querySelector(".horizon02 .text"),
    skillList: document.querySelector(".skill_list"),
    test: document.querySelector(".blowFish"),
  };

  const _animate = () => {
    if (motions.ratio(objs.skill) <= info.horizon.endPoint) {
      objs.skillWrap.style.transform = `translate3d(-${motions.calcValue(objs.skill, info.horizon)}vw, -500vh, 0)`;
    } else {
      objs.skillWrap.style.transform = `translate3d(-300vw, ${-500 + motions.calcValue(objs.skill, info.reverse)}vh, 0)`;
    }

    objs.dark.style.opacity = `${motions.calcValue(objs.skill, info.dark)}`;
    objs.projectArt.style.opacity = `${motions.calcValue(objs.project, info.light)}`;
  };

  const _setPosition = () => {
    objs.hipo.style.left = `${900 * (innerWidth / 2560)}px`;
    objs.hipo.style.bottom = `${540 * (innerWidth / 2560)}px`;

    objs.miniFish.style.left = `${650 * (innerWidth / 2560)}px`;
    objs.miniFish.style.bottom = `${700 * (innerWidth / 2560)}px`;

    objs.miniFish2.style.left = `${600 * (innerWidth / 2560)}px`;
    objs.miniFish2.style.bottom = `${850 * (innerWidth / 2560)}px`;

    objs.dori.style.right = `${1000 * (innerWidth / 2560)}px`;
    objs.dori.style.bottom = `${280 * (innerWidth / 2560)}px`;

    objs.dori2.style.right = `${820 * (innerWidth / 2560)}px`;
    objs.dori2.style.bottom = `${740 * (innerWidth / 2560)}px`;

    objs.nimo.style.right = `${680 * (innerWidth / 2560)}px`;
    objs.nimo.style.bottom = `${280 * (innerWidth / 2560)}px`;

    objs.skillIntroTxt.style.bottom = `${320 * (innerWidth / 2560)}px`;

    objs.skillList.style.left = `${540 * (innerWidth / 2560)}px`;
    objs.skillList.style.bottom = `${615 * (innerWidth / 2560)}px`;
  };

  const _addEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(_animate);
    });

    window.addEventListener("resize", _setPosition);
  };

  const initialize = () => {
    _addEvent();
    _setPosition();
  };

  return { init: initialize };
})();

window.onload = motionProject.init();
