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
            result = resultJSON.rates[this.currency];
          }

        return result;

    }
    
}

export default CurrencyWidget;