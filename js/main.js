const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");

if (menuButton && navigation) {
  const menuLabel = menuButton.querySelector(".sr-only");

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);

    if (menuLabel) {
      menuLabel.textContent = isOpen ? "Abrir menú" : "Cerrar menú";
    }
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");

      if (menuLabel) {
        menuLabel.textContent = "Abrir menú";
      }
    }
  });
}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  const fields = [...contactForm.querySelectorAll("input, textarea")];

  fields.forEach((field) => {
    field.addEventListener("input", () => {
      field.removeAttribute("aria-invalid");
      const message = document.querySelector("#" + field.id + "-error");

      if (message) {
        message.classList.remove("is-visible");
        message.textContent = "";
      }
    });
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstInvalidField = null;

    fields.forEach((field) => {
      const message = document.querySelector("#" + field.id + "-error");

      if (!field.checkValidity()) {
        field.setAttribute("aria-invalid", "true");

        if (message) {
          message.textContent = field.validity.valueMissing
            ? "Este campo es obligatorio."
            : "Revisa el formato de este campo.";
          message.classList.add("is-visible");
        }

        if (!firstInvalidField) {
          firstInvalidField = field;
        }
      }
    });

    if (firstInvalidField) {
      firstInvalidField.focus();
    }
  });
}
