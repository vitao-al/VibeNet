import { registerUser } from "../services/authService.js";

const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const usuario = document.getElementById("usuario").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value;
        const bio = document.getElementById("bio")?.value.trim() || "";

        if (senha.length < 6) {
            alert("Senha deve ter pelo menos 6 caracteres");
            return;
        }

        try {
            const newUser = registerUser({ nome, usuario, email, senha, bio });
            alert("Conta criada com sucesso. Redirecionando para login...");
            window.location.href = "/templates/static/html/login.html";
        } catch (err) {
            alert(err.message);
        }
    });
}
