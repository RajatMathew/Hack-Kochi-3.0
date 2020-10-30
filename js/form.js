const formContainer = document.querySelector(".form-container");
const name = document.getElementById("name");
const email = document.getElementById("email");
const college = document.getElementById("college");
const contactNo = document.getElementById("contact-no");
const yearOfStudy = document.getElementById("year-of-study");
const department = document.getElementById("department");
const ieeeSection = document.getElementById("ieee-section");
const ieeeRegion = document.getElementById("ieee-region");
const message = document.getElementById("message");
const btn = document.getElementById("btn-submit");
//const tc =  document.getElementById("btn-submit");



const scriptURL =
  "https://script.google.com/macros/s/AKfycbwB20DxeFi-3VbgG64q5tyLlk85VS2UtOhAlnjB28vKhTce9Ls/exec";
const form = document.forms["google-sheet"];

document.getElementById("hi").innerHTML = "dsfbgfd";

form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateForm() && confirm("Are You Sure To Submit?")) {
    addBtnLoader();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(response => {
        hideFormDisplaySuccess();
      })
      .catch(error => console.error("Error!", error.message));
  }
});

function addBtnLoader() {
  btn.disabled = "true";
  btn.innerHTML = `
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Submitting...
  `;
}

function hideFormDisplaySuccess() {
  document.querySelector(".form-container").style.display = "none";
  let div = document.createElement("div");
  div.innerHTML = `
    <i class="fa fa-check-circle fa-3x" aria-hidden="true"></i>
    <h3>Thank You For Registering for Hack 3.0.</h3>
    <br>
    <h5><a href="https://ieeespaam.macehub.in/" class="text-white">Back to home</a></h5>
  `;
  div.className = "successContainer";
  document.querySelector(".container").appendChild(div);
}

function validateForm() {
  const checked = Array.from(
    document.querySelectorAll("input[name=tc]:checked")
  );
  const isMember = document.querySelector("input[name=isMember]:checked");
  if (
    name.value == "" ||
    email.value == "" ||
    college.value == "" ||
    contactNo.value == "" ||
    department.value == ""
  ) {
    showMessage(
      "alert alert-danger",
      "Fields marked important cannot be empty"
    );
  } else if (!isValidEmail(email.value)) {
    showMessage("alert alert-danger", "Invalid Email Address");
  } else if (!isPhoneValid(contactNo.value)) {
    showMessage("alert alert-danger", "Phone number invalid");
  } else if (yearOfStudy.value === "") {
    showMessage("alert alert-danger", "Year of study not selected");
  } else if (checked.length < 2) {
    showMessage("alert alert-danger", "Please agree to the terms and conditions.");
  } else if (isMember == null) {
    showMessage("alert alert-danger", "Check if you are an IEEE Member");
  } else {
    return true;
  }
}

function showMessage(classes, msg) {
  let div = document.createElement("div");
  div.className = classes;
  div.textContent = msg;
  formContainer.insertBefore(div, form);
  scrollTo(0, 0);

  setTimeout(() => {
    div.remove();
  }, 3000);
}

function isPhoneValid(inputtxt) {
  // var phoneno = /^\d{10}$/;
  var phoneno = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  if (inputtxt.match(phoneno)) {
    return true;
  } else {
    return false;
  }
}

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
