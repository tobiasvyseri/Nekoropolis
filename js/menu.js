/* The Nekoropolis: mobile menu toggle (progressive enhancement).
   Without JS the button stays hidden and the nav shows as a plain row of links. */
(function () {
  "use strict";

  var menuButtonCld = document.querySelector(".menu-button");
  var siteNavCld = document.getElementById("site-nav");

  if (!menuButtonCld || !siteNavCld) {
    return;
  }

  document.documentElement.classList.add("has-menu-js");
  menuButtonCld.hidden = false;

  function setMenuOpenCld(isOpenCld) {
    menuButtonCld.setAttribute("aria-expanded", isOpenCld ? "true" : "false");
    siteNavCld.classList.toggle("is-open", isOpenCld);
  }

  function menuIsOpenCld() {
    return menuButtonCld.getAttribute("aria-expanded") === "true";
  }

  menuButtonCld.addEventListener("click", function () {
    setMenuOpenCld(!menuIsOpenCld());
  });

  // Escape closes the menu and returns focus to the button
  document.addEventListener("keydown", function (keyEventCld) {
    if (keyEventCld.key === "Escape" && menuIsOpenCld()) {
      setMenuOpenCld(false);
      menuButtonCld.focus();
    }
  });

  // A click outside the open menu closes it
  document.addEventListener("click", function (clickEventCld) {
    if (menuIsOpenCld() &&
        !siteNavCld.contains(clickEventCld.target) &&
        !menuButtonCld.contains(clickEventCld.target)) {
      setMenuOpenCld(false);
    }
  });
}());
