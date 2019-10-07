const https = require('https');
const apiPB = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';


https.get(apiPB, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });   

    res.on('end', () => {
        data = JSON.parse(data);
        console.log(data);
    })
});