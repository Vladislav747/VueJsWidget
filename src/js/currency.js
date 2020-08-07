class CurrencyWidget {

    /**
     * @param  String currency
     * @param  String baseCurrency
     */
    constructor(currency, baseCurrency){
        this.url='https://api.exchangeratesapi.io/latest';
        this.currency = currency.toUpperCase();
        this.baseCurrency = baseCurrency.toUpperCase();
    }

    //Методы

     // Создание строки для API
    
    generateURL(){
        let symbolsString = this.url + '?symbols=' + this.currency + '&' + 'base=' + this.baseCurrency;
        return symbolsString;
    }
 
    // Обновление данных о погоде
    getData(){
        //currencies.forEach(el => symbolsString += el.toUpperCase()+',');
        this.url = this.generateURL();
        var result = "";
        console.table(this.currency, this.baseCurrency);

        var xhr = new XMLHttpRequest();
    
        xhr.open('GET', this.url, false);
        xhr.send();

        if (xhr.status != 200 && xhr.readyState != 4) {
            // обработать ошибку
            console.log('Request error');
          } else {
            // вывести результат
            console.log( xhr.responseText, "xhr" );
            var resultJSON = JSON.parse(xhr.responseText);
            var resultString = resultJSON.rates[this.currency].toFixed(2);
            // var result1 = resultString.split('.');
            // result1[1] = result1[1].substr(2, result1[1].length);
            // console.log(typeof resultString);
            result = resultString;

          }

        return result;

    }
    
}

export default CurrencyWidget;