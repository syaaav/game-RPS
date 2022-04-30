// функция для создания страницы моего хода
function renderMoveScreen() { 
    const app = document.querySelector('.app');
    app.textContent = '';

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Твой ход';

    const fieldOpponents = document.createElement('div');
    fieldOpponents.classList.add('fieldOpponents');
    const fieldNoWinnerText = document.createElement('div');
    fieldNoWinnerText.classList.add('fieldNoWinnerText');
    fieldNoWinnerText.classList.add('hidden');
    fieldNoWinnerText.textContent = "Ого! Была ничья! Давай попробуем ещё раз?";
    const fieldMoves = document.createElement('div');
    fieldMoves.classList.add('fieldMoves');
    
    app.appendChild(title);
    app.appendChild(fieldOpponents);
    app.appendChild(fieldNoWinnerText);
    app.appendChild(fieldMoves);

    window.application.renderBlock('fieldOpponents', fieldOpponents); // создаем поле для текста 'sb vs sb'
    window.application.renderBlock('fieldMoves', fieldMoves); // создаем поле для вариантов возможных шагов
}

// создаем блок с именами соперников и сообщением, если была ничья 
function renderNamesOpponents (container) { 
    httpRequest({
        url: `https://skypro-rock-scissors-paper.herokuapp.com/game-status?token=${window.application.token}&id=${window.application.idGame}`,
        onSuccess: function (data) {
            let namesOpponents = document.createElement('p');
            namesOpponents.classList.add('namesOpponents');
            namesOpponents.textContent = `${window.application.login} vs ${data['game-status'].enemy.login}`;
            container.appendChild(namesOpponents);

            let noWinnerText = document.createElement('p');
            noWinnerText.classList.add('noWinnerText');
            noWinnerText.classList.add('hidden');
            noWinnerText.textContent = "Ого! Была ничья! Давай попробуем ещё раз?";
            container.appendChild(noWinnerText);
        },
        onError: showError,
    });
};

// создаем блок с вариантами возможных ходов
function renderMoves (container) { 
    const rock = document.createElement('button');
    rock.textContent = 'Камень 🪨';
    rock.classList.add('rock'); 
    container.appendChild(rock);

    const scissors = document.createElement('button');
    scissors.textContent = 'Ножницы ✂️';
    scissors.classList.add('scissors'); 
    container.appendChild(scissors);

    const paper = document.createElement('button');
    paper.textContent = 'Бумага 🗒';
    paper.classList.add('paper'); 
    container.appendChild(paper);

    container.addEventListener('click', (event) => { 
        event.preventDefault();
        // debugger;
        httpRequest({
            url: `https://skypro-rock-scissors-paper.herokuapp.com/play?token=${window.application.token}&id=${window.application.idGame}&move=${event.target.className}`,
            onSuccess: afterMove,
            onError: showError,
        });
        
    });
}

function afterMove (data) { 
    if (data.status === "error") {
        if (data.message === "no game id") {
            window.application.renderScreen('error');
            document.querySelector('.errorText').textContent = 'Кажется, Id этой игры не был передан.';
            
            } else if (data.message === "wrong game id") {
                window.application.renderScreen('error');
                document.querySelector('.errorText').textContent = 'Бой уже закончен. Кажется, ваш соперник испугался и убежал!';
                
                } else if (data.message === "not your move") {
                    document.querySelector('.namesOpponents').textContent = 'Вы уже отправили ход в текущем раунде. Давайте подождём ход вашего соперника?';
                    
                    } else if (data.message === "wrong move") {
                        document.querySelector('.namesOpponents').textContent = 'Недопустимый ход! Попробуйте что-нибудь другое ;)';
                        
                        } else if (data.message === "no move") {
                            document.querySelector('.namesOpponents').textContent = 'Ход не передан! Попробуйте ещё раз ;)';
                            
                            } else if (data.message === "token doesn't exist") {
                                window.application.renderScreen('error');
                                document.querySelector('.errorText').textContent = ' ̶Н̶е̶т̶ ̶и̶г̶р̶о̶к̶а̶ ̶с̶ ̶т̶а̶к̶и̶м̶ ̶т̶о̶к̶е̶н̶о̶м̶.̶ Вас не существует!';
                                
                                } else if (data.message === "player is not in this game") {
                                    window.application.renderScreen('error');
                                    document.querySelector('.errorText').textContent = 'Такой игрок уже в игре! Вернитесь в активную игру или введите новый никнейм ;)';
                                    }
    } else if (data['game-status'].status === "waiting-for-enemy-move") {
        window.application.renderScreen('waitingOpponentsMove'); // переходим на экран ожидания хода оппонента

        } else if (data['game-status'].status === "waiting-for-your-move") {
            window.application.renderScreen('myMove'); // переходим на экран нового хода (была ничья)
            document.querySelector('.fieldNoWinnerText').classList.remove('hidden');
            document.querySelector('.fieldOpponents').classList.add('hidden'); 

            } else if (data['game-status'].status === "lose") {
                window.application.renderScreen('lose'); // переходим на экран поражения

                } else if (data['game-status'].status === "win") {
                    window.application.renderScreen('win'); // переходим на экран победы
                    } 
    }





