const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#main-nav");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

function closeMenu() {
  nav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("open", !isOpen);
});

nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  formStatus.textContent = "Mensaje preparado correctamente. Gracias por contactar.";
  contactForm.reset();
});
