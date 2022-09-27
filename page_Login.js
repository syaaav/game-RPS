// отрисовываем страницу авторизации при загрузке ДОМ-дерева
document.addEventListener("DOMContentLoaded", () => {
  window.application.renderScreen("autorization");
});

// функция для создания страницы авторизации
function renderExampleScreen() {
  const app = document.querySelector(".app");
  app.textContent = "";

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Добро пожаловать в игру «Камень, ножницы, бумага»";

  const fieldInput = document.createElement("div");
  const fieldButton = document.createElement("div");

  window.application.renderBlock("fieldInput", fieldInput); // создаем поле для инпута
  window.application.renderBlock("loginButton", fieldButton); // создаем поле для кнопки "Играть"

  app.appendChild(title);
  app.appendChild(fieldInput);
  app.appendChild(fieldButton);
}

// создаем инпут
function renderInput(container) {
  const fieldName = document.createElement("div");
  fieldName.classList.add("nickname");
  fieldName.textContent = "Никнейм";

  const input = document.createElement("input");
  input.classList.add("input");

  container.appendChild(fieldName);
  container.appendChild(input);

  input.addEventListener("input", function () {
    input.value = input.value.replace(
      /[^абвгдеёжзийклмнопрстуфхцчшщъыьэюяabcdefghijklmnopqrstuvwxyz1234567890]/gi,
      ""
    );
  });
}

// создаем кнопку
function renderExampleButton(container) {
  const button = document.createElement("button");
  button.classList.add("buttonEntry");
  button.textContent = "Войти";

  button.addEventListener("click", (event) => {
    event.preventDefault();
    // debugger;
    const loginUser = document.querySelector(".input").value;
    window.application.login = loginUser;

    httpRequest({
      url: `https://skypro-rock-scissors-paper.herokuapp.com/login?login=${loginUser}`,
      onSuccess: showToken,
      onError: showError,
    });
  });
  container.appendChild(button);
}

function showToken(data) {
  window.application.token = data.token;

  if (window.application.token !== "") {
    httpRequest({
      url: `https://skypro-rock-scissors-paper.herokuapp.com/player-status?token=${window.application.token}`,
      onSuccess: showStatusPlayer,
      onError: showError,
    });
  }
}

function showStatusPlayer(data) {
  if (data.status === "error") {
    window.application.renderScreen("error");
    document.querySelector(".errorText").textContent =
      "Кажется, игрока с таким токеном не существует. Попробуйте ввести никнейм ;)";
  } else if (data["player-status"].status === "lobby") {
    window.application.renderScreen("lobby"); // переходим на страницу Лобби
  } else {
    console.log(data);
    window.application.idGame = data["player-status"].game.id;
    window.application.renderScreen("myMove"); // переходим сразу в игру
  }
}
