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
    const { data } = await axios.post("/api/v1/login", { username, password });
    localStorage.setItem("token", data.token);
    alertDOM.textContent = "Login successful!";
    alertDOM.classList.add("text-success");
    setTimeout(() => (window.location.href = "/dashboard.html"), 1000);
  } catch (error) {
    alertDOM.textContent = error.response?.data?.msg || "Login failed";
    alertDOM.classList.remove("text-success");
  }
});
