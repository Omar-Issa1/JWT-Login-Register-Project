const form = document.querySelector(".form");
const usernameInput = document.querySelector(".username-input");
const passwordInput = document.querySelector(".password-input");
const alertDOM = document.querySelector(".form-alert");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  alertDOM.textContent = "";

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  try {
    await axios.post("/api/v1/register", { username, password });
    alertDOM.textContent = "Account created successfully!";
    alertDOM.classList.add("text-success");
    setTimeout(() => (window.location.href = "/login.html"), 1000);
  } catch (error) {
    alertDOM.textContent = error.response?.data?.msg || "Registration failed";
    alertDOM.classList.remove("text-success");
  }
});
