#### _English version_

<h1 align="center">Game «Rock-Paper-Scissors»</h1>
<h2 align="center">

<p align="center">

<img src="https://img.shields.io/badge/made%20by-syaaav-ff69b4" >

<img src="https://img.shields.io/badge/open%20source-❤%EF%B8%8F-lightgrey">

</p>

## Description

<p align="center"><img src=".img/RPSx4.gif" width="80%"></p>

The game was implemented from scratch in VanillaJS (JavaScript) according to my design. It contains a login form, several waiting screens, a game screen with 3 move options, and a "Lobby" screen with the results of all players.

## How to play

- Enter your username
- Once in the lobby, click on the "Play" button
- Wait until the opponent connects to you
- Make your move

Regardless of the result of the game, you can play again or return to the lobby.

## About the project

- Designed by me
- To communicate with the backend I use AJAX requests (XMLHttpRequest and GET requests)
- Each user receives a token after he enters his login and presses the "Login" button
- The lobby screen updates its content once per second according to the data received from the backend
- Waiting screens update their contents every half a second

#### Login screen

  <p align="center"><img  src="./img/1.png" width="80%"></p>

#### The lobby screen

  <p align="center"><img  src="./img/2.png" width="80%"></p>

#### Screen waiting for an opponent to connect

  <p align="center"><img  src="./img/3.png" width="80%"></p>

#### Game screen

  <p align="center"><img  src="./img/4.png" width="80%"></p>

#### Screen waiting for the opponent's move

  <p align="center"><img  src="./img/5.png" width="80%"></p>

#### Game result screen (win)

  <p align="center"><img  src="./img/6.png" width="80%"></p>

#### Game result screen (losing)

  <p align="center"><img  src="./img/7.png" width="80%"></p>

## Available Scripts

Since the project consists of a set of static files, the application works with the `npx http-server` command.

Open [http://localhost:8080](http://localhost:8080) to view it in a browser.
<br>
<br>

#### _Русская версия_

<h1 align="center">Игра «Кмень, ножницы, бумага»</h1>
<h2 align="center">

<p align="center">

<img src="https://img.shields.io/badge/made%20by-syaaav-ff69b4" >

<img src="https://img.shields.io/badge/open%20source-❤%EF%B8%8F-lightgrey">

</p>

## Описание

<p align="center"><img src=".img/RPSx4.gif" width="80%"></p>

Игра была реализована с нуля на VanillaJS (JavaScript) по моему дизайну. Она содержит форму для ввода логина, несколько экранов ожидания, игровой экран с 3 вариантами хода и «Лобби» - экран с результатами всех игроков.

## Как играть

- Введите свой логин
- Попадая в лобби, нажмите на кнопку «Играть»
- Подождите пока соперник подключится к вам
- Сделайте свой ход

Вне зависимости от результата игры вы можете сыграть ещё раз или вернуться в лобби.

## О проекте

- Дизайн был разработан мной
- Для связи с бэкендом использую AJAX-запросы (XMLHttpRequest и GET-запросы)
- Каждый пользователь получает токен после того, как введет свой логин и нажмет кнопку «Войти»
- Экран лобби раз в секунду обновляет свое содержимое в соответствии с полученными с бэкенда данными
- Экраны ожидания раз в пол секунды обновляют свое содержимое

#### Экран входа

  <p align="center"><img  src="./img/1.png" width="80%"></p>

#### Экран «Лобби»

  <p align="center"><img  src="./img/2.png" width="80%"></p>

#### Экран ожидания подключения соперника

  <p align="center"><img  src="./img/3.png" width="80%"></p>

#### Экран хода

  <p align="center"><img  src="./img/4.png" width="80%"></p>

#### Экран ожидания хода соперника

  <p align="center"><img  src="./img/5.png" width="80%"></p>

#### Экран результата игры (победа)

  <p align="center"><img  src="./img/6.png" width="80%"></p>

#### Экран результата игры (поражение)

  <p align="center"><img  src="./img/7.png" width="80%"></p>

## Как запустить

Так как проект состоит из набора статических файлов, то приложение работает с помощью команды `npx http-server`.

Откройте [http://localhost:8080](http://localhost:8080), чтобы посмотреть его в браузере.
<br>
<br>
