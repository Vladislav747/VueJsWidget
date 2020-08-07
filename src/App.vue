<template>
  <div id="app">
    <Toolbar v-on:newElement="calculateCurrency"/>
    <CurrencyCards 
      :currencyType="this.currency"
      :filteredCurrencies="this.filteredCurrencies"
    />
  </div>
</template>

<script>
import CurrencyCards from "./components/CurrencyCards";
import Toolbar from "./components/Toolbar";

export default {
  name: "App",
  components: {
    CurrencyCards,
    Toolbar
  },
  data() {
    return {
      currency: "eur",
      filteredCurrencies: ["usd", "rub", "nok", "jpy", "cad"],
      curenciesArr: ["usd", "rub", "nok", "jpy", "eur", "cad"],
    };
  },
  methods: {
    calculateCurrency(el){
      this.currency = el;
      this.filteredCurrencies = this.curenciesArr.filter(
        el => el !== this.currency
      );
      console.log(this.filteredCurrencies);
    }
    }
    
  };
</script>


<style>
* {
  font-family: "Roboto";
  font-size: 14px;
  line-height: 16px;
  color: #2B2D33;
  outline: none;
}

#app {
  width: 720px;
  margin: 0 auto;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.currency__toolbar {
  background-color: #FFE782;
  padding: 30px 24px 0;
}
.currency__toolbar h2 {
  font-size: 21px;
  line-height: 25px;
}

.currency__toolbar .nav-tabs {
  border: none;
  display: flex;
}

.currency__toolbar .nav-tabs li {
  border-radius: 5px 5px 0 0;
}

.currency__toolbar .nav-tabs li a {
  padding: 14px 31px;
  display: block;
  border-radius: 5px 5px 0 0;
  text-transform: uppercase;
}

.currency__toolbar .nav-tabs li a.active {
  background-color: #FFFFFF;
  color: #2B2D33;
}

.currency__toolbar .nav-tabs a {
  color: #CCAE68;
}

.currency__toolbar .nav-tabs a:hover {
  background-color: #eee;
}

.currency__body {
  padding: 23px 0 24px;
}

.input-wrapper {
  display: flex;
  justify-content: flex-end;
}

.input-wrapper #input__curr {
  border: none;
  border-bottom: 1px solid #D9D9D9;
  width: 121px;
  text-align: right;
}

.input-wrapper .currencyType {
  text-transform: uppercase;
}

.cards {
  padding: 23px 24px;
  display: flex;
  flex-wrap: wrap;
  /* margin: 0 -18px; */
  justify-content: space-between;
}

@media screen and (max-width: 320px) {
  .cards {
    flex-direction: column;
  }
}

.card__item {
  flex: 0 0 39%;
  max-width: 39%;
  margin-bottom: 18px;
  background: #FFFFFF;
  box-shadow: 0px 3px 6px rgba(157, 157, 157, 0.16);
  border-radius: 12px;
  padding: 18px 30px;
}

@media screen and (max-width: 320px) {
  .card__item {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

.card__item .first span {
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.0171429px;
  text-transform: uppercase;
}

.card__item .second span {
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0.0342857px;
  text-transform: uppercase;
}

.pagination-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 0 35%;
}

.pagination_el span {
  box-shadow: 0px 5px 6px rgba(157, 157, 157, 0.16);
  border-radius: 8px;
  text-transform: uppercase;
  padding: 10px 21px;
  cursor: pointer;
  position: relative;
}

.pagination_el span::before {
  content: "";
  position: absolute;
  background: url("/assets/footer-chevron-left.svg");
}

.pagination__prev span {
  background-image: url("/assets/footer-chevron-left.svg");
  background-position: 10%, center;
  background-repeat: no-repeat;
  background-color: #EFEFEF;
}

.pagination__prev span:hover {
  background-color: #dedede;
}

.pagination__next span {
  background-image: url("/assets/footer-chevron-right.svg");
  background-position: 90%, center;
  background-repeat: no-repeat;
  background-color: #FFFFFF;
}

.pagination__next span:hover {
  background-color: #F2F2F2;
}
</style>
