const welcomeDOM = document.querySelector(".welcome");
const resultDOM = document.querySelector(".result");
const logoutBtn = document.querySelector(".logout-btn");

const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "/login.html";
}

const getDashboard = async () => {
  try {
    const { data } = await axios.get("/api/v1/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    });

    welcomeDOM.textContent = `Hello, ${data.msg}`;
    resultDOM.textContent = data.secret;
  } catch (error) {
    localStorage.removeItem("token");
    window.location.href = "/login.html";
  }
};

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "/login.html";
});

getDashboard();
