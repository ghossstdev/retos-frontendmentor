const inputEmail = document.querySelector("#input-email");
const ButtonEmail = document.querySelector("#button-email");
const containerEmail = document.querySelector("#container-email");

ButtonEmail.addEventListener("click", () => {
  if (inputEmail.value === "") return;

  const email = inputEmail.value;

  const isValidEamil = email.includes("@");

  if (isValidEamil) {
    containerEmail.classList.remove("email--error");
  } else {
    containerEmail.classList.add("email--error");
  }
});
