// функция для создания страницы Лобби
function renderLobbyScreen() { 
    const app = document.querySelector('.app');
    app.textContent = '';

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Список активных игроков';

    const fieldList = document.createElement('div');
    fieldList.classList.add('fieldList');
    const fieldButton = document.createElement('div');
    fieldButton.classList.add('fieldButton');
    
    app.appendChild(title);
    app.appendChild(fieldList);
    app.appendChild(fieldButton);

    window.application.renderBlock('fieldList', fieldList); // создаем блок для списка
    window.application.renderBlock('startGame', fieldButton); // создаем блок для кнопки
}

// создаем с список в поле для списка
function renderList (container) {
    const render = function() {
        httpRequest({
            url: 'https://skypro-rock-scissors-paper.herokuapp.com/player-list',
            onSuccess: function (data) {
                container.textContent = '';
                const listPlayersArray = data.list; // массив с инфой про игроков
    
                listPlayersArray.forEach((player) => {
                    let playerInfo = document.createElement('p');
                    playerInfo.classList.add('playerInfo');
                    playerInfo.textContent = `${player['login']}: ${player['wins']} (победы), ${player['loses']} (поражения)`;
                    
                    container.appendChild(playerInfo);
                });
            },
            onError: showError,
        });
    };
    
    const intervalFirst = setInterval(render, 2000); 
    render();
    window.application.timers.push(intervalFirst);
};

function startGame (data) { 
    if (data.status === 'error' && data.message === "token doesn't exist") {
        window.application.renderScreen('error');
        document.querySelector('.errorText').textContent = 'Кажется, игрока с таким токеном не существует. Попробуйте ввести никнейм ;)';
        
    } else if (data.status === 'error' && data.message === "player is already in game") {
        window.application.renderScreen('error');
        document.querySelector('.errorText').textContent = 'Такой игрок уже в игре! Вернитесь в активную игру или введите новый никнейм ;)';
        
    } else if (data.status !== 'error') {
        window.application.idGame = data['player-status'].game.id;
        window.application.renderScreen('waitingGame'); // Переход на страницу ожидания соперника
    }
}





