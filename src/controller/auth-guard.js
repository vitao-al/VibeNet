import { getCurrentUser } from "../services/authService.js";

const user = getCurrentUser();
if (!user) {
    // não logado -> manda para login
    window.location.href = "/templates/static/html/login.html";
}
