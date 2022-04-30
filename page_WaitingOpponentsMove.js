// функция для создания страницы ожидания соперника
function renderWaitingOppMoveScreen() { 
    const app = document.querySelector('.app');
    app.textContent = '';

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Ожидаем ход соперника';

    const fieldWaitingOppMove = document.createElement('div');
    fieldWaitingOppMove.classList.add('fieldWaitingOppMove');
    
    app.appendChild(title);
    app.appendChild(fieldWaitingOppMove);

    window.application.renderBlock('fieldWaitingOppMove', fieldWaitingOppMove); // создаем поле для иконки ожидания
}

// создаем блок с иконкой ожидания и ставим таймер на обновление статуса игры
function renderWaitingOppMove (container) { 
    const emojio = document.createElement('p');
    emojio.classList.add('emojio');
    emojio.textContent = '⌛';
    container.appendChild(emojio);

    let intervalWaitingOppMove = setInterval(function () {
        httpRequest({
            url: `https://skypro-rock-scissors-paper.herokuapp.com/game-status?token=${window.application.token}&id=${window.application.idGame}`,
            onSuccess: function (data) {
                    if (data['game-status'].status === 'waiting-for-your-move') {
                        window.application.renderScreen('myMove'); // переходим на экран своего хода (была ничья)
                        document.querySelector('.fieldNoWinnerText').classList.remove('hidden');
                        document.querySelector('.fieldOpponents').classList.add('hidden'); 
                        // clearInterval(window.application.timers.includes('intervalWaitingGame'));

                    } else if (data['game-status'].status === 'lose') {
                            window.application.renderScreen('lose'); // переходим на экран поражения
                            // clearInterval(window.application.timers.includes('intervalWaitingOppMove'));

                            } else if (data['game-status'].status === 'win') {
                                    window.application.renderScreen('win'); // переходим на экран победы
                                    // clearInterval(window.application.timers.includes('intervalWaitingOppMove'));

                                    } else if (data.message === 'player is not in this game') {
                                        window.application.renderScreen('error');
                                        document.querySelector('.errorText').textContent = 'Такой игрок уже в игре! Вернитесь в активную игру или введите новый никнейм ;)';

                                            } else if (data.message === 'wrong game id') {
                                                window.application.renderScreen('error');
                                                document.querySelector('.errorText').textContent = 'Бой уже закончен. Кажется, ваш соперник испугался и убежал!';
                                                    
                                                } else if (data.message === "token doesn't exist") {
                                                    window.application.renderScreen('error');
                                                    document.querySelector('.errorText').textContent = ' ̶Н̶е̶т̶ ̶и̶г̶р̶о̶к̶а̶ ̶с̶ ̶т̶а̶к̶и̶м̶ ̶т̶о̶к̶е̶н̶о̶м̶.̶ Вас не существует!';
                                                    }
            },
            onError: showError,
        });
    }, 500); 
    window.application.timers.push(intervalWaitingOppMove);
};





