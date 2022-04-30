// функция для создания страницы поражения
function renderLoseScreen() { 
    window.application.timers = [];
    const app = document.querySelector('.app');
    app.textContent = '';

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Очень жаль, но вы проиграли!';

    const fieldLoseImg = document.createElement('div');
    fieldLoseImg.classList.add('fieldLoseImg');
    const fieldButtonLobby = document.createElement('div');
    fieldButtonLobby.classList.add('fieldButtonLobby');
    const fieldButton = document.createElement('div');
    fieldButton.classList.add('fieldButton');
    
    app.appendChild(title);
    app.appendChild(fieldLoseImg);
    app.appendChild(fieldButtonLobby);
    app.appendChild(fieldButton);

    window.application.renderBlock('fieldLoseImg', fieldLoseImg); // создаем поле для иконки поражения
    window.application.renderBlock('fieldButtonLobby', fieldButtonLobby); // создаем поле для кнопки "В Лобби"
    window.application.renderBlock('startGame', fieldButton); // создаем поле для кнопки "Играть ещё"
    document.querySelector('.buttonStartGame').textContent = 'Играть ещё'; // меняем текст на кнопке
}

// создать блок с победной картинкой 
function renderLoseImg (container) { 
    const emojio = document.createElement('p');
    emojio.classList.add('emojio');
    emojio.textContent = '🥺';
    container.appendChild(emojio);
}

// создать блок с кнопкой в Лобби
function renderButtonLobby (container) { 
    const buttonLobby = document.createElement('button');
    buttonLobby.classList.add('buttonLobby');
    buttonLobby.textContent = 'В лобби';
    container.appendChild(buttonLobby);

    buttonLobby.addEventListener('click', (event) => { 
        event.preventDefault();
        window.application.renderScreen('lobby'); // переходим на страницу Лобби
    });
}


