const motionProject = (() => {
  // 스크롤 시작점과 끝점, 애니메이션 수치 시작 값과 끝 값
  const info = {
    horizon: { startValue: 0, endValue: 300, startPoint: 0.05, endPoint: 0.3 },
    reverse: { startValue: 0, endValue: 500, startPoint: 0.32, endPoint: 0.8 },
    moon01: { startValue: -50, endValue: 50, startPoint: 0.92, endPoint: 0.99 },
    moon02: { startValue: 20, endValue: 10, startPoint: 0, endPoint: 0.4 },
    dark: { startValue: 0, endValue: 1, startPoint: 0.92, endPoint: 0.99 },
    light: { startValue: 1, endValue: 0, startPoint: 0, endPoint: 0.3 },
    swim: { startValue: 1, endValue: 0, startPoint: 0, endPoint: 0.3 },
    blowFish: { startValue: -17, endValue: 17, startPoint: 0, endPoint: 0.5 },
  };

  // 움직일 요소
  const objs = {
    sun: document.querySelector(".sun"),
    sea: document.querySelector(".sea"),
    skill: document.querySelector(".skill"),
    skillWrap: document.querySelector(".skill-wrap"),
    moon01: document.querySelector(".moon_wrap01"),
    moon02: document.querySelector(".moon_wrap02"),
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
    caveEyes: document.querySelector(".caveEyes"),
    blowFish: document.querySelector(".blowFish"),
  };

  // 애니메이션 처리
  const _animate = () => {
    if (motions.ratio(objs.skill) <= info.horizon.endPoint) {
      objs.skillWrap.style.transform = `translate3d(-${motions.calcValue(objs.skill, info.horizon)}vw, -500vh, 0)`;
    } else {
      objs.skillWrap.style.transform = `translate3d(-300vw, ${-500 + motions.calcValue(objs.skill, info.reverse)}vh, 0)`;
    }

    objs.dark.style.opacity = `${motions.calcValue(objs.skill, info.dark)}`;
    objs.projectArt.style.opacity = `${motions.calcValue(objs.project, info.light)}`;
    objs.blowFish.style.right = `${motions.calcValue(objs.blowFish, info.blowFish)}vw`;
    objs.moon01.style.transform = `translate3d(0, ${motions.calcValue(objs.skill, info.moon01)}%, 0)`;
    objs.moon02.style.top = `${motions.calcValue(objs.project, info.moon02)}vw`;

    if (objs.projectArt.style.opacity == 0) {
      objs.projectArt.style.zIndex = 0;
    } else {
      objs.projectArt.style.zIndex = 1;
    }
  };

  // 요소 위치 설정(반응형)
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

    objs.caveEyes.style.right = `${1000 * (innerWidth / 2560)}px`;
    objs.caveEyes.style.bottom = `${260 * (innerWidth / 2560)}px`;
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
