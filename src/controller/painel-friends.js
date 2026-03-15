import { users} from "../services/userServices.js";
import { sortearUsuarios } from "../services/userServices.js";
   const aleatoriosusers = sortearUsuarios(users)
const renderFriends = () => {
    const painelfriends = document.querySelector('.painel-friends');
    
    if (!painelfriends) return;

    // Limpa e prepara a estrutura
    painelfriends.innerHTML = `
        <h3 class="friends-title">Amigos</h3>
        <div class="friends-grid"></div>
    `;

    const grid = painelfriends.querySelector('.friends-grid');

    // Aqui está o segredo: percorrer o array de usuários
    aleatoriosusers.forEach((user) => {
        const img = document.createElement('img');
        img.src = user.fotoperfil;
        img.classList.add('friend-img');
        img.title = user.name; // Aparece o nome ao passar o mouse
        
        // Se clicar na foto, você pode fazer algo (opcional)
        img.onclick = () => console.log("Clicou no amigo: " + user.name);
        
        grid.appendChild(img);
    });
};

const checkData = setInterval(() => {
    if (aleatoriosusers.length > 0) {
        renderFriends();
        clearInterval(checkData);
    }
}, 100);