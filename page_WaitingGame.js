// функция для создания страницы ожидания соперника
function renderWaitingGameScreen() { 
    const app = document.querySelector('.app');
    app.textContent = '';

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Ожидаем подключение соперника';

    const fieldWaitingGame = document.createElement('div');
    
    app.appendChild(title);
    app.appendChild(fieldWaitingGame);

    window.application.renderBlock('fieldWaitingGame', fieldWaitingGame); // создаем поле для иконки ожидания
}

// создаем блок с иконкой ожидания
function renderWaitingGame (container) { 
    const emojio = document.createElement('p');
    emojio.classList.add('emojio');
    emojio.textContent = '⌛';
    container.appendChild(emojio);

    const intervalWaitingGame = setInterval(function () {
        httpRequest({
            url: `https://skypro-rock-scissors-paper.herokuapp.com/game-status?token=${window.application.token}&id=${window.application.idGame}`,
            onSuccess: function (data) {
                if (data['game-status'].status !== 'waiting-for-start') {
                    window.application.renderScreen('myMove'); // переходим на экран своего хода
                }
            },
            onError: showError,
        });
    }, 500); 
    window.application.timers.push(intervalWaitingGame);
};

// function renderWaitingGame (container) { 
//     const spinnerOuter = document.createElement('div');
//     spinnerOuter.classList.add('lds-circle');
    
//     const spinnerInner = document.createElement('div');
    
//     spinnerOuter.appendChild(spinnerInner);
//     container.appendChild(spinnerOuter);

//     const intervalWaitingGame = setInterval(function () {
//         httpRequest({
//             url: `https://skypro-rock-scissors-paper.herokuapp.com/game-status?token=${window.application.token}&id=${window.application.idGame}`,
//             onSuccess: function (data) {
//                 if (data['game-status'].status !== 'waiting-for-start') {
//                     window.application.renderScreen('myMove'); // переходим на экран своего хода
//                 }
//             },
//             onError: showError,
//         });
//     }, 500); 
//     window.application.timers.push(intervalWaitingGame);
// };







