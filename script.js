const btnEl = document.querySelector(".btn-exp");
const btnexpElo = document.querySelector(".btn-exp-open");
const btnexpElc = document.querySelector(".btn-exp-close");

btnEl.addEventListener("click", function () {
  btnexpElo.classList.toggle("hide");
  btnexpElc.classList.toggle("hide");
});
const btneduEl = document.querySelector(".btn-edu");
const btneduElo = document.querySelector(".btn-edu-open");
const btneduElc = document.querySelector(".btn-edu-close");

btneduEl.addEventListener("click", function () {
  btneduElo.classList.toggle("hide");
  btneduElc.classList.toggle("hide");
});
const btnactEl = document.querySelector(".btn-act");
const btnactElo = document.querySelector(".btn-act-open");
const btnactElc = document.querySelector(".btn-act-close");

btnactEl.addEventListener("click", function () {
  btnactElo.classList.toggle("hide");
  btnactElc.classList.toggle("hide");
});
const btnhobEl = document.querySelector(".btn-hob");
const btnhobElo = document.querySelector(".btn-hob-open");
const btnhobElc = document.querySelector(".btn-hob-close");

btnhobEl.addEventListener("click", function () {
  btnhobElo.classList.toggle("hide");
  btnhobElc.classList.toggle("hide");
});
const btnlangEl = document.querySelector(".btn-lang");
const btnlangElo = document.querySelector(".btn-lang-open");
const btnlangElc = document.querySelector(".btn-lang-close");

btnlangEl.addEventListener("click", function () {
  btnlangElo.classList.toggle("hide");
  btnlangElc.classList.toggle("hide");
});
const btnskillEl = document.querySelector(".btn-skill");
const btnskillElo = document.querySelector(".btn-skill-open");
const btnskillElc = document.querySelector(".btn-skill-close");

btnskillEl.addEventListener("click", function () {
  btnskillElo.classList.toggle("hide");
  btnskillElc.classList.toggle("hide");
});
var emailField = document.getElementById("email-field");
var emailAsk = document.querySelector(".email-ask");
var emailError = document.getElementById("email-error");
var emailButton = document.getElementById("email-btn");
const personInfor = document.querySelector(".personal-info");
const heroDiv = document.querySelector(".hero");
emailButton.addEventListener("click", function () {
  if (
    !emailField.value.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    emailAsk.classList.add("hide");
    emailError.innerHTML = "Hãy nhập Email chính xác";
    return false;
  }
  heroDiv.classList.add("hide");
  personInfor.classList.remove("hide");
  return true;
});
