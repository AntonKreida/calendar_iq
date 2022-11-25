# __"Календарь событий"__ - Vanilla JS <img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/>

## Описание проекта:
Данный проект был реализован в рамках развития навыков программированию на JS. Если описать уж совсем кратко, то данный проект - это Google календарь очень на "минималках" :smirk:.

Посмотреть рабочий билд можно по ссылке: [working build.](https://antonkreida.github.io/calendar_iq/);

Основной функционал:
+ Рендер календаря;
+ Переключение между месяцами;
+ Quick event, через popup;
+ Поиск event-ов и рендер на дату где они сохранены;
+ Реализована форма event-а для добавления записей / удаление event-а через форму;
+ Валидация формы;
+ Сохранение event-ов реализованно, через LocalStorage.

# **Функционал проекта и используемые технологии**

Ссылка на package.json: [config](https://github.com/AntonKreida/calendar_iq/blob/master/package.json);

Внешний вид оформлен с помощью предпроцессора SCSS/SASS.

При сборке проекта использовался Webpack, ссылка на config файл: [config](https://github.com/AntonKreida/calendar_iq/blob/master/webpack.config.js);

Линтеры:
+ Eslint: [config](https://github.com/AntonKreida/calendar_iq/blob/master/.eslintrc.json);
+ Stylelint: [config](https://github.com/AntonKreida/calendar_iq/blob/master/.stylelintrc.json); 
+ Ну и куда же без pretter: [config](https://github.com/AntonKreida/calendar_iq/blob/master/.prettierrc.json);

Основная логика реализована на чистом **JS**:
+ Для отрисовки использовался new Date (знаю можно было использовать библиотеку moment.js или что-то другое :));
+ Пользователь может переключать месяц;
+ Добавить быстрое событие через popup, формат: "дд.мм.гггг, Заголовок, Участники, Описание";
+ Поиск событий реализован по массиву сохраненных объектов дней в LocalStorage;
+ Форма записи события осуществляется по клику на день месяца / удаление события реализованно также через форму / простая валидация формы: если один из input не заполнен пользователь увидит предупреждение;

# **Как планирую доработать проект**
Мысли были следующего характера:
+ Сделать адаптив под мобильные устройства.
+ Отделить логику, перенести под паттерн MVC...может переделать полностью проект под React :worried:;

 P.S. 
Спасибо что нашел время и прочитал описание друг. Если у тебя будет желание прошу оставь свой коммент, как можно улучшить код или дать совет по программированию. Удачи! :v:
