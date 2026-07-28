(function () {
  var headers = document.querySelectorAll(".site-header .header-inner");

  headers.forEach(function (header) {
    var nav = header.querySelector(".top-nav");
    if (!nav || header.querySelector(".mobile-menu-toggle")) return;

    var button = document.createElement("button");
    button.className = "mobile-menu-toggle";
    button.type = "button";
    button.setAttribute("aria-label", "Открыть меню страниц");
    button.setAttribute("aria-expanded", "false");
    button.innerHTML = '<span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>';

    header.insertBefore(button, nav);

    button.addEventListener("click", function () {
      var isOpen = header.classList.toggle("menu-open");
      button.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        header.classList.remove("menu-open");
        button.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("click", function (event) {
      if (!header.contains(event.target)) {
        header.classList.remove("menu-open");
        button.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        header.classList.remove("menu-open");
        button.setAttribute("aria-expanded", "false");
      }
    });
  });
})();
