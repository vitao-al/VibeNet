import { users } from "../services/userServices.js"; // Lembre-se do .js no final

const initTimeline = () => {
    const container = document.querySelector('.timeline-container');

    if (!container) return;

    container.innerHTML = '';

    // 1. Percorremos cada usuário do array 'users'
    users.forEach(user => {
        
        // 2. Para cada usuário, percorremos o array de posts dele
        user.posts.forEach(post => {
            const card = document.createElement('div');
            card.classList.add('card-post');

            // 3. Use innerHTML em vez de innerText para que as tags <h3> e <p> funcionem
            card.innerHTML = `
                <div class="user-info">
                    <img src="${user.fotoperfil}" style="width:30px; height:30px;">
                    <strong>${user.name}</strong>
                </div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;

            container.appendChild(card);
        });
    });
};

// Se o seu script no HTML já tem "defer" ou "type=module", 
// os dados podem demorar a carregar. Vamos garantir a execução:
if (users.length > 0) {
    initTimeline();
} else {
    // Gambiarra necessária enquanto a API não responde
    setTimeout(initTimeline, 500); 
}