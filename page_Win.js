// функция для создания страницы победы
function renderWinScreen() {
  window.application.timers = [];
  const app = document.querySelector(".app");
  app.textContent = "";

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Поздравляем! Вы выиграли!";

  const fieldWinImg = document.createElement("div");
  fieldWinImg.classList.add("fieldWinImg");
  const fieldButtonLobby = document.createElement("div");
  fieldButtonLobby.classList.add("fieldButtonLobby");
  const fieldButtonNextGame = document.createElement("div");
  fieldButtonNextGame.classList.add("fieldButtonNextGame");

  app.appendChild(title);
  app.appendChild(fieldWinImg);
  app.appendChild(fieldButtonLobby);
  app.appendChild(fieldButtonNextGame);

  window.application.renderBlock("fieldWinImg", fieldWinImg); // создаем поле для иконки победы
  window.application.renderBlock("fieldButtonLobby", fieldButtonLobby); // создаем поле для кнопки "В Лобби"
  window.application.renderBlock("startGame", fieldButtonNextGame); // создаем поле для кнопки "Играть ещё"
  document.querySelector(".buttonStartGame").textContent = "Играть ещё"; // меняем текст на кнопке
}

// создаем блок с победной картинкой
function renderWinImg(container) {
  const emojio = document.createElement("p");
  emojio.classList.add("emojio");
  emojio.textContent = "🎉";
  container.appendChild(emojio);
}

// создаем блок с кнопкой "В Лобби"
function renderButtonLobby(container) {
  const buttonLobby = document.createElement("button");
  buttonLobby.classList.add("buttonLobby");
  buttonLobby.textContent = "В лобби";
  container.appendChild(buttonLobby);

  buttonLobby.addEventListener("click", () => {
    event.preventDefault();
    window.application.renderScreen("lobby"); // переходим на страницу Лобби
  });
}
