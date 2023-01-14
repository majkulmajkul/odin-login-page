const passwordOne = document.querySelector("#password-one");
const passwordTwo = document.querySelector("#password-two");
const passwordsDontMatchWarning = document.querySelector(".password-warning");
const form = document.querySelector(".sign-up-form");

function passwordsValid() {
  console.log("triggered");
  if (passwordOne.value === passwordTwo.value && passwordOne.value !== "") {
    passwordOne.style.outline = "";
    passwordTwo.style.outline = "";
    passwordsDontMatchWarning.style.visibility = "hidden";
    return true;
  } else {
    passwordOne.style.outline = "1px solid red";
    passwordTwo.style.outline = "1px solid red";
    passwordsDontMatchWarning.style.visibility = "visible";
    return false;
  }
}

passwordOne.addEventListener("change", (e) => passwordsValid());
passwordTwo.addEventListener("change", (e) => passwordsValid());

function submitForm() {
  if (passwordsValid()) {
    form.reportValidity() && form.submit();
  }
}
