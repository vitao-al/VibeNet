// gerencia cadastro/login com localStorage em ambiente static
const STORAGE_USERS = "vibenet_users";
const STORAGE_SESSION = "vibenet_current_user";

const readUsers = () => {
    try {
        const raw = localStorage.getItem(STORAGE_USERS);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        console.error("Erro ao ler usuários", e);
        return [];
    }
};

const saveUsers = (users) => {
    localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
};

export const registerUser = ({ nome, usuario, email, senha, bio, foto }) => {
    const users = readUsers();
    const exists = users.some((u) => u.email.toLowerCase() === email.toLowerCase() || u.usuario.toLowerCase() === usuario.toLowerCase());
    if (exists) {
        throw new Error("E-mail ou usuário já cadastrado");
    }
    const newUser = {
        id: Date.now(),
        nome,
        usuario,
        email,
        senha,
        bio: bio || "",
        foto: foto || "https://via.placeholder.com/150?text=Avatar",
        createdAt: new Date().toISOString(),
    };
    users.push(newUser);
    saveUsers(users);
    return newUser;
};

export const loginUser = ({ emailOuUsuario, senha }) => {
    const users = readUsers();
    const user = users.find((u) =>
        (u.email.toLowerCase() === emailOuUsuario.toLowerCase() || u.usuario.toLowerCase() === emailOuUsuario.toLowerCase())
        && u.senha === senha
    );
    if (!user) {
        throw new Error("Credenciais inválidas");
    }
    localStorage.setItem(STORAGE_SESSION, JSON.stringify(user));
    return user;
};

export const getCurrentUser = () => {
    try {
        const raw = localStorage.getItem(STORAGE_SESSION);
        return raw ? JSON.parse(raw) : null;
    } catch (e) {
        console.error("Erro ao ler sessão", e);
        return null;
    }
};

export const logout = () => {
    localStorage.removeItem(STORAGE_SESSION);
};
