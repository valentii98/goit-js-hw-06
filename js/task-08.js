const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value.trim();
  const password = formElements.password.value;
  if (mail === "" || password === "") {
    return alert("Всі поля повинні бути заповнені!");
  }
  const formData = {
    mail,
    password,
  };
  console.log(formData);
  event.target.reset();
}
