const body = document.querySelector("body");
const popupOpenBtn = document.querySelectorAll('[data-popupBtn="open"]');
const popupCloseBtn = document.querySelectorAll('[data-popupBtn="close"]');
const popupContents = document.querySelector(".popup_contents");
const popupVideo = popupContents.querySelector("video");

function setupPopup() {
  const currentOpenPopup = [];
  const currentOpenPopupBtn = [];

  function addContents(e) {
    const targetProject = e.target.closest("button").getAttribute("data-project");
    const projectInfo = [
      {
        project: "galaxy",
        src: "./assets/video/galaxy.mov",
        client: "samsung",
        desc: "responsive web site",
        role: "KV부터 충전기 까지 컨텐츠 반응형과 탭버튼 모션",
        date: "2023. 02",
      },
      {
        project: "fave",
        src: "./assets/video/fave.mov",
        client: "fave",
        desc: "interactive web site (3d ver, static ver)",
        role: "로딩 화면, 메뉴 모션 등 static 요소 곳곳(현재 사라진 static ver도 작업)",
        date: "2022. 05",
      },
      {
        project: "hanwha",
        src: "./assets/video/hanwha.mov",
        client: "hanwha",
        desc: "Three.js Interactive Study",
        role: "Three.js 스터디용으로, 스크롤 모션 구현에 큰 도움이 된 작업",
        date: "2022. 11",
      },
      {
        project: "semiconductor",
        src: "./assets/video/semiconductor.mov",
        client: "samsung",
        desc: "Samsung Semiconductor PROD",
        role: "Header, Footer 제외 모든 컨텐츠 작업",
        date: "2023. 07",
      },
      {
        project: "wine",
        src: "./assets/video/weeklywine.mov",
        client: "weekly wine",
        desc: "cafe24 site renewal",
        role: "About, Magazine, Cart, Header, Footer",
        date: "2023. 08",
      },
      // {
      //   project: "airpods",
      //   src: "./assets/video/hanwha.mov",
      //   client: "study",
      //   desc: "scroll interaction practice",
      //   role: "스크롤 모션 연습용 클론 코딩",
      //   date: "2022. 09",
      // },
    ];
    const client = popupContents.querySelector(".client p");
    const desc = popupContents.querySelector(".desc p");
    const role = popupContents.querySelector(".role p");
    const date = popupContents.querySelector(".date p");

    for (let i = 0; i < projectInfo.length; i++) {
      if (projectInfo[i].project == targetProject) {
        popupVideo.setAttribute("src", projectInfo[i].src);
        client.innerText = projectInfo[i].client;
        desc.innerText = projectInfo[i].desc;
        role.innerText = projectInfo[i].role;
        date.innerText = projectInfo[i].date;
      }
    }
  }

  function openPopup(e) {
    const targetPopupId = e.target.closest("button").getAttribute("data-popup");
    const targetPopup = document.querySelector(`.popup[data-popup="${targetPopupId}"]`);

    const focusableElements = targetPopup.querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex="0"]');
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    body.classList.add("popupOpen");
    targetPopup.style.display = "block";
    currentOpenPopup.push(targetPopup);
    currentOpenPopupBtn.push(e.target);

    firstFocusableElement.focus();

    popupCloseBtn.forEach((closeBtn) => {
      closeBtn.addEventListener("click", closePopup);
    });

    targetPopup.addEventListener("keydown", (e) => {
      if (e.key === "Tab" || e.keyCode === 9) {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    });

    addContents(e);
  }

  function closePopup() {
    const targetPopup = currentOpenPopup.pop();
    const openButton = currentOpenPopupBtn.pop();

    body.classList.remove("popupOpen");
    targetPopup.style.display = "none";
    popupVideo.setAttribute("src", "");
    openButton.focus();
  }

  popupOpenBtn.forEach((openBtn) => {
    openBtn.addEventListener("click", openPopup);
  });

  document.addEventListener("keydown", (e) => {
    if ((e.key === "Escape" || e.keyCode === 27) && currentOpenPopup.length > 0) {
      closePopup();
    }
  });
}

setupPopup();
