const EventEmitter = require('events');
const fs = require('fs');
const myEmitter = new EventEmitter();
const date = new Date();
const currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

// Событие входа с фиксацией текущего времни
myEmitter.on('userLogin', (userName, isSuccsess) => {
    let logMessage;

    if (isSuccsess) {
        logMessage = `Время входа ${userName} ${currentTime}`;
    } else {
        logMessage = `Внимание, ${userName}! Неудачная попытка входа в ${currentTime}`; 
    }

    fs.appendFileSync('registr.txt', logMessage );
    console.log(logMessage);
});

// Событие выхода с фиксацие текущего времени
myEmitter.on('userLogout', (userName, isSuccsess) => {
    if (isSuccsess) {
        fs.appendFileSync('registr.txt', `Время выхода ${userName} ${currentTime}`);
        console.log(`Время выхода ${userName} ${currentTime}`);
    }
});

// Имитация действия
myEmitter.emit('userLogin', 'Rich', true);
myEmitter.emit('userLogin', 'Rich', false);
myEmitter.emit('userLogout', 'Rich', true);

// Для автозапуска использовала модуль npm nodemon