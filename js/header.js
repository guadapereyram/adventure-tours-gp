const header = document.getElementById("siteHeader");
const toggle = document.getElementById("menuToggle");

toggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});
