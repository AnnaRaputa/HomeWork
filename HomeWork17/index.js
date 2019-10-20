const Converter = require('./converter');
const request = require('request');
const apiPB = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

let baseBuyCurrencyUsd;
let baseSaleCurrencyUsd;
let baseBuyCurrencyEur;
let baseSaleCurrencyEur;
let baseBuyCurrencyRub;
let baseSaleCurrencyRub;

// получаем данные с Приват Банка
function changeData (cb) {
    request(apiPB, function (error, response, data) {
        data = JSON.parse(data);
        cb(data);
    })
}
// зовем колбек
changeData(function (data) {
    // выбираем неодходимую нам информацию 
    baseBuyCurrencyUsd = Number(data[0].buy);
    baseSaleCurrencyUsd = Number(data[0].sale);

    baseBuyCurrencyEur = Number(data[1].buy);
    baseSaleCurrencyEur = Number(data[1].sale);

    baseBuyCurrencyRub = Number(data[2].buy);
    baseSaleCurrencyRub = Number(data[2].sale);

    //создаем новый эксземпляр класса 
    let conv = new Converter(baseBuyCurrencyUsd, baseSaleCurrencyUsd, baseBuyCurrencyEur, baseSaleCurrencyEur, baseBuyCurrencyRub, baseSaleCurrencyRub);
    
    console.log('Покупка 100 USD: ' + conv.convertUsdToUah(100));
    console.log('Продажа 100 USD: ' + conv.convertUahToUsd(100));

    console.log('Покупка 100 EUR: ' + conv.convertEurToUah(100));
    console.log('Продажа 100 EUR: ' + conv.convertUahToEur(100));

    console.log('Покупка 100 RUB: ' + conv.convertRubToUah(100));
    console.log('Продажа 100 RUB: ' + conv.convertUahToRub(100));
});

