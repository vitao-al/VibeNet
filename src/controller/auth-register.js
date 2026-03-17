import { registerUser } from "../services/authService.js";

const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const usuario = document.getElementById("usuario").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value;
        const bio = document.getElementById("bio")?.value.trim() || "";
        const fileInput = document.getElementById("foto-perfil");

        if (senha.length < 6) {
            alert("Senha deve ter pelo menos 6 caracteres");
            return;
        }

        let fotoData = "";
        if (fileInput && fileInput.files && fileInput.files[0]) {
            fotoData = await new Promise((resolve, reject) => {
                const file = fileInput.files[0];
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result.toString());
                reader.onerror = () => reject(new Error("Erro ao carregar imagem"));
                reader.readAsDataURL(file);
            });
        }

        try {
            registerUser({ nome, usuario, email, senha, bio, foto: fotoData });
            alert("Conta criada com sucesso. Redirecionando para login...");
            window.location.href = "/login";
        } catch (err) {
            alert(err.message);
        }
    });
}
