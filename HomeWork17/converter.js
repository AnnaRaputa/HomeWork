function Converter (baseBuyCurrencyUsd, baseSaleCurrencyUsd, baseBuyCurrencyEur, baseSaleCurrencyEur, baseBuyCurrencyRub, baseSaleCurrencyRub) {
    this.baseBuyCurrencyUsd = baseBuyCurrencyUsd;
    this.baseSaleCurrencyUsd = baseSaleCurrencyUsd;

    this.baseBuyCurrencyEur = baseBuyCurrencyEur;
    this.baseSaleCurrencyEur = baseSaleCurrencyEur;

    this.baseBuyCurrencyRub = baseBuyCurrencyRub;
    this.baseSaleCurrencyRub = baseSaleCurrencyRub;
}
// helper
Converter.prototype.roundTwoDecimal = function (amount) {
    return Math.round(amount * 100) / 100;
}
//------------ USD

Converter.prototype.convertUsdToUah = function (currency) {
    return this.roundTwoDecimal(currency * this.baseBuyCurrencyUsd);
}

Converter.prototype.convertUahToUsd = function (currency) {
    return this.roundTwoDecimal(currency / this.baseSaleCurrencyUsd);
}
//-------------- EUR

Converter.prototype.convertEurToUah = function (currency) {
    return this.roundTwoDecimal(currency * this.baseBuyCurrencyEur);
}

Converter.prototype.convertUahToEur = function (currency) {
    return this.roundTwoDecimal(currency / this.baseSaleCurrencyEur);
}
//----------------- RUB

Converter.prototype.convertRubToUah = function (currency) {
    return this.roundTwoDecimal(currency * this.baseBuyCurrencyRub);
}

Converter.prototype.convertUahToRub = function (currency) {
    return this.roundTwoDecimal(currency / this.baseBuyCurrencyRub);
}

module.exports = Converter;