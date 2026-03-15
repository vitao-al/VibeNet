import { users } from "../services/userServices.js";

const renderProfile = (user) => {
    const profilePanel = document.querySelector('.painel-profile');
    if (!profilePanel || !user) return;

    profilePanel.innerHTML = `
        <div class="profile-card">
            <div class="profile-header">
                <img class="profile-avatar" src="${user.fotoperfil}" alt="Foto de ${user.name}">
                <div class="profile-main-info">
                    <h2 class="profile-name">${user.name}</h2>
                    <span class="profile-username">@${user.username}</span>
                </div>
            </div>

            <div class="profile-body">
                <div class="info-group">
                    <label>E-mail:</label> <span>${user.email}</span>
                </div>
                <div class="info-group">
                    <label>Telefone:</label> <span>${user.phone}</span>
                </div>
                <div class="info-group">
                    <label>Website:</label> <a href="http://${user.website}" target="_blank">${user.website}</a>
                </div>

                <hr>

                <div class="profile-address">
                    <strong>Endereço:</strong>
                    <p>${user.address.street}, ${user.address.suite}</p>
                    <p>${user.address.city} - ${user.address.zipcode}</p>
                </div>

                <hr>

                <div class="profile-company">
                    <strong>Trabalho:</strong>
                    <p class="company-name">${user.company.name}</p>
                    <p class="company-phrase"><em>"${user.company.catchPhrase}"</em></p>
                </div>
            </div>
        </div>
    `;
};

// GAMBIARRA NECESSÁRIA: Esperar a API preencher o array 'users'
const checkData = setInterval(() => {
    if (users.length > 0) {
        renderProfile(users[0]); // Renderiza o primeiro usuário da lista
        clearInterval(checkData); // Para de procurar
    }
}, 100);