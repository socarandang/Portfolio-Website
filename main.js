/*================== TOGGLE ICON NAVBAR ==============*/
let menuIcon = document.querySelectorSelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

/*================== SCROLL SECTION ACTIVE LINK ==============*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach.apply((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*================== STICKY NAVBAR ==============*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*================== REMOVE TOGGLE ICON AND NAVBAR ==============*/
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

/*=================== CONTACT FORM =================*/
document.getElementById("contact-form").addEventListerner("submit", (event) => {
  const contactForm = event.target;
  if (!validateContactForm(contactForm)) {
    event.preventDefault();
    displayError(contactForm, "Invalid Input");
  }
});

function isValidEmail(email) {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

function validateContactForm(contactForm) {
  const name = contactForm["name"].value;
  const email = contactForm["email"].value;
  const phone = contactForm["phone"].value;
  const message = contactForm["message"].value;

  if (!name || !email || !message) {
    return false;
  }

  if (!isValidEmail(email) || (phone && !isValidPhoneNumber(phone))) {
    return false;
  }
  return true;
}

function displayError(formElement, message) {
  const errorElement = formElement.getElementByClassName("form-error")[0];
  errorElement.innerHTML = message;
  errorElement.style.display = "block";
}
