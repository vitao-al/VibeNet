import { users } from "../services/userServices.js";

// Assumindo que o usuário atual é o primeiro (você pode mudar isso para o usuário logado)
const currentUser = users[0]; // Ou defina como necessário

const renderFriends = () => {
    const painelfriends = document.querySelector('.painel-friends');
    
    if (!painelfriends) return;

    // Limpa e prepara a estrutura
    painelfriends.innerHTML = `
        <h3 class="friends-title">Amigos</h3>
        <div class="friends-grid"></div>
    `;

    const grid = painelfriends.querySelector('.friends-grid');

    // Acessa os friends do usuário atual
    const friends = currentUser.get_friends();

    friends.forEach((friend) => {
        const img = document.createElement('img');
        img.src = friend.fotoperfil;
        img.classList.add('friend-img');
        img.title = friend.name; // Aparece o nome ao passar o mouse
        
        // Se clicar na foto, você pode fazer algo (opcional)
        img.onclick = () => console.log("Clicou no amigo: " + friend.name);
        
        grid.appendChild(img);
    });
};

const checkData = setInterval(() => {
    if (users.length > 0 && currentUser.get_friends().length > 0) {
        renderFriends();
        clearInterval(checkData);
    }
}, 100);