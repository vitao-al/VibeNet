import { loginUser } from "../services/authService.js";

const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const emailOuUsuario = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value;

        try {
            loginUser({ emailOuUsuario, senha });
            alert("Login efetuado com sucesso! Redirecionando...");
            window.location.href = "/index.html";
        } catch (err) {
            alert(err.message);
        }
    });
}
