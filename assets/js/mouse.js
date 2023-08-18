const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".popupCloseBtn");

popup.addEventListener("mousemove", (e) => {
  if (closeBtn) {
    closeBtn.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  }
});
