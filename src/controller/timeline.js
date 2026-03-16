import { users } from "../services/userServices.js"; // Lembre-se do .js no final
import { get_comments_id } from "./api.js";

const timelineContainerSelector = '.timeline-container';

const renderCard = (container, user, post) => {
    const card = document.createElement('div');
    card.classList.add('card-post');
    card.style.cursor = 'pointer';
    card.dataset.postId = post.id;

    card.innerHTML = `
        <div class="user-info">
            <img src="${user.fotoperfil}" style="width:30px; height:30px;">
            <strong>${user.name}</strong>
        </div>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;

    card.addEventListener('click', () => showComments(post, user));

    container.appendChild(card);
};

const showComments = async (post, user) => {
    const container = document.querySelector(timelineContainerSelector);
    if (!container) return;

    let panel = document.querySelector('.comments-panel');
    if (!panel) {
        panel = document.createElement('div');
        panel.classList.add('comments-panel');

        const closeBtn = document.createElement('button');
        closeBtn.classList.add('comments-close');
        closeBtn.textContent = '✕';
        closeBtn.addEventListener('click', () => panel.remove());
        panel.appendChild(closeBtn);

        const header = document.createElement('div');
        header.classList.add('comments-header');
        panel.appendChild(header);

        const list = document.createElement('div');
        list.classList.add('comments-list');
        panel.appendChild(list);

        const form = document.createElement('div');
        form.classList.add('comments-form');
        form.innerHTML = `<input class="comment-input" placeholder="Escreva um comentário..."/><button class="comment-send">Enviar</button>`;
        panel.appendChild(form);

        container.appendChild(panel);
    }

    // atualiza header e limpa lista
    const header = panel.querySelector('.comments-header');
    header.innerHTML = `
        <div class="user-info">
            <img src="${user.fotoperfil}" style="width:30px; height:30px;">
            <strong>${user.name}</strong>
        </div>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;

    const list = panel.querySelector('.comments-list');
    list.innerHTML = '<p class="loading-comments">Carregando comentários...</p>';

    // busca comentários via api.js
    let comments = [];
    try {
        comments = await get_comments_id(post.id);
    } catch (e) {
        comments = [];
        console.error('Erro ao carregar comentarios:', e);
    }

    list.innerHTML = '';
    const renderComment = (c) => {
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `<strong>${c.name}</strong> <small class="comment-email">${c.email || ''}</small><p>${c.body}</p>`;
        list.appendChild(div);
    };

    if (!comments || comments.length === 0) {
        list.innerHTML = '<p>Nenhum comentário encontrado.</p>';
    } else {
        comments.forEach(renderComment);
    }

    // (não envia à API — apenas simula/insere localmente)
    const input = panel.querySelector('.comment-input');
    const send = panel.querySelector('.comment-send');
    send.onclick = () => {
        const text = input.value.trim();
        if (!text) return;
        const newComment = { name: user.name || 'Você', email: user.email || '', body: text };
        renderComment(newComment);
        input.value = '';
        list.scrollTop = list.scrollHeight;
    };

    panel.scrollIntoView({ behavior: 'smooth' });
};

const initTimeline = () => {
    const container = document.querySelector(timelineContainerSelector);
    if (!container) return;

    container.innerHTML = '';

    // 1. Percorremos cada usuário do array 'users'
    users.forEach(user => {
        // 2. Para cada usuário, percorremos o array de posts dele
        user.posts.forEach(post => {
            renderCard(container, user, post);
        });
    });
};

// Garantir a execução quando os dados estiverem prontos
if (users && users.length > 0) {
    initTimeline();
} else {
    setTimeout(initTimeline, 500);
}