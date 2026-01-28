/* ================= LOGIN ================= */
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // akun dummy
    if (username === "admin" && password === "123") {
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("username", username);
        window.location.href = "index.html";
    } else {
        alert("Username atau password salah!");
    }
}

/* ================= CEK LOGIN ================= */
function checkLogin() {
    const isLogin = localStorage.getItem("isLogin");

    if (!isLogin) {
        window.location.href = "login.html";
    } else {
        const username = localStorage.getItem("username");
        const welcome = document.getElementById("welcome");
        if (welcome) {
            welcome.innerText = "Selamat datang, " + username;
        }
    }
}

/* ================= LOGOUT ================= */
function logout() {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("username");
    window.location.href = "login.html";
}
