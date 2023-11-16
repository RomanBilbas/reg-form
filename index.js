const nameInput = document.querySelector("form-input");
nameInput.oninput = nameInputHandler;
function nameInputHandler(e) {
  if (/^[A-Z][a-z](1,19)$/.test(e.target.value)) {
    e.target.classList.add(".valid");
    e.target.classList.remove(".invalid");
  } else {
    e.target.classList.add(".invalid");
    e.target.classList.remove(".valid");
  }
}

const INPUTS_REG_EXP = {
  "user-name": /^[A-Z][a-z]{2,19}$/,
  surname: /^[A-Z][a-z]{2,19}$/,
  "user-email": /^.+@.+$/,
  "user-tel": /^\d{3}-\d{3}-\d{4}$/,
  "user-passw": /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*).{6,20}$/,
  "passw-conf": /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*).{6,20}$/,
};

const inputs = document.querySelectorAll("input");

inputs.forEach((i) => i.addEventListener("input", inputHandler));

function inputHandler(e) {
  if (INPUTS_REG_EXP[e.target.name].test(e.target.value)) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
  }
}
