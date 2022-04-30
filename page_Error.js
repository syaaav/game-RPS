// функция для создания страницы c ошибкой
function renderErrorScreen() { 
    window.application.timers = [];
    const app = document.querySelector('.app');
    app.textContent = '';

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Что-то пошло не так...';

    const fieldErrorText = document.createElement('div');
    fieldErrorText.classList.add('errorText');

    const fieldErrorImg = document.createElement('div');
    fieldErrorImg.classList.add('errorImg');

    const fieldButtonErrorBack = document.createElement('div');
    fieldButtonErrorBack.classList.add('fieldButtonErrorBack');
    
    app.appendChild(title);
    app.appendChild(fieldErrorText);
    app.appendChild(fieldErrorImg);
    app.appendChild(fieldButtonErrorBack);

    window.application.renderBlock('fieldErrorImg', fieldErrorText); // блок для расшифровки ошибки
    window.application.renderBlock('fieldErrorImg', fieldErrorImg); // блок для картинки с ошибкой
    window.application.renderBlock('fieldButtonErrorBack', fieldButtonErrorBack); // создать блок для кнопки "Назад"
}

// создаем блок с картинкой ошибки
function renderErrorImg (container) { 
    const emojio = document.createElement('p');
    emojio.classList.add('emojio');
    emojio.textContent = '😱';
    container.appendChild(emojio);
}

// создаем блок с кнопкой "Попробовать ещё раз"
function renderButtonErrorBack (container) { 
    const buttonBack = document.createElement('button');
    buttonBack.textContent = 'Попробовать ещё раз';
    buttonBack.classList.add('buttonErrorBack');
    container.appendChild(buttonBack);

    buttonBack.addEventListener('click', (event) => { 
        event.preventDefault();
        window.application.renderScreen('autorization'); // переходим на страницу авторизации
    });
}



