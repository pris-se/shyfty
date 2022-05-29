let navbarToggler = document.querySelector("#navbarToggler");
let navBar = document.querySelector("#navbarCollapse");
let registrationModal = document.querySelector("#registration-modal");
let modalsScreen = document.querySelector("#modals");
let registrationButtons = [...document.querySelectorAll(".registration-button")];
let closeButtons = [...document.querySelectorAll(".close-modal")];

let userOffer = document.querySelector("#userOffer");
let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#userEmail");

let userOfferConfirm = document.querySelector("#userOfferConfirm");
let userNameConfirm = document.querySelector("#userNameConfirm");
let userEmailConfirm = document.querySelector("#userEmailConfirm");

// Show Menu
navBar.addEventListener("click", (e) => {
  // if (e.target.classList.contains("navbar__link")) {
  // }
  navBar.classList.remove("navbar-open");
  navbarToggler.classList.remove("open");
});

navbarToggler.addEventListener("click", () => {
  document.querySelector("#navbarCollapse").classList.toggle("navbar-open");
  navbarToggler.classList.toggle("open");
});

// -------------------

// close modal
function closeModal(e) {
  if (e.target.closest(".open-modal")) {
    e.target.closest(".open-modal").classList.remove("open-modal");
  }
}

function closeModalScreen(e) {
  [...document.querySelectorAll(".open-modal")].forEach((e) => e.classList.remove("open-modal"));
}
closeButtons.forEach((e) => e.addEventListener("click", closeModalScreen));

// show modal
function showModal(e) {
  if (e.target.closest("#registration-modal")) {
    verification(e);
  } else if (e.target.closest("#verification-modal") && !e.target.classList.contains("button-back")) {
    success(e);
  } else if (e.target.classList.contains("button-back")) {
    closeModal(e);
    registrationModal.classList.add("open-modal");
  } else if (!e.target.closest(".open-modal") || e.target.closest("#offers-modal")) {
    modalsScreen.classList.add("open-modal");
    registrationModal.classList.add("open-modal");
  } else {
    closeModalScreen(e);
  }
}

// success screen
function success(e) {
  document.querySelector("#success-modal").classList.add("open-modal");
  closeModal(e);
}
// verification screen

function verification(e) {
  userOfferConfirm.textContent = userOffer.textContent;
  userNameConfirm.textContent = userName.value;
  userEmailConfirm.textContent = userEmail.value;
  document.querySelector("#verification-modal").classList.add("open-modal");
  closeModal(e);
}

// open modal button
registrationButtons.forEach((e) => e.addEventListener("click", showModal));

// offers Changer

let offersChangerButton = document.querySelector("#offersChanger");
function offersChanger(e) {
  let el = document.querySelector("#offers-modal").classList.add("open-modal");
  closeModal(e);
}
offersChangerButton.addEventListener("click", offersChanger);

let offerChooseButton = [...document.querySelectorAll(".choose-button")];
function offerChoose(e) {
  userOffer.textContent = e.target.attributes.key.value;
  closeModal(e);
  showModal(e);
}
offerChooseButton.forEach((e) => e.addEventListener("click", offerChoose));

// registration data

// let userData = {
//   userOffer: userOfferConfirm.textContent,
//   userName: userNameConfirm.textContent,
//   userEmail: userEmailConfirm.textContent,
// };
let bb = document.querySelector(".button-back").classList.contains("button-back");
console.log(bb);
