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
  max-width: 720px;
  margin: 0 auto;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0 0 0;
}

@media screen and (max-width: 320px) {
  .nav-wrapper {
    margin: 0 -16px;
  }
}

.nav-wrapper__link{
  padding: 16px 32px; 
}

@media screen and (max-width: 320px) {
  .nav-wrapper__link{
    padding: 16px; 
  }
}

.nav-wrapper__link:hover{
  background-color: #eee;
}

.currency__toolbar {
  background-color: #FFE782;
  padding: 30px 24px 0;
}
.currency__toolbar h2 {
  font-size: 21px;
  line-height: 25px;
}

.currency__toolbar .currency__title span{
  font-size: 21px;
  line-height: 25px;
}

.currency__toolbar .currency__title .currency__val{
  text-transform: uppercase;
}

.currency__toolbar .nav-tabs--overflow{
   overflow: hidden;
}

.currency__toolbar .nav-tabs {
  border: none;
  display: flex;
  transform: translatex(0px);
  list-style: none;
  margin:0;
}

.currency__toolbar .nav-tabs li {
  border-radius: 5px 5px 0 0;
}

.currency__toolbar .nav-tabs li a {
  padding: 16px 32px;
  display: block;
  border-radius: 6px 6px 0 0;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
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
  padding: 27px 24px;
}

.input-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.input-wrapper #input__curr {
  border: none;
  border-bottom: 1px solid #D9D9D9;
  width: 118px;
  text-align: right;
  font-size: 18px;
  line-height: 21px;
  padding: 3px 5px;
}

.input-wrapper .currencyType {
  text-transform: uppercase;
  font-size: 18px;
  line-height: 21px;
  color: #B9B9B9;
  margin-left: 2px;
}

.cards {
  padding: 23px 0 27px;
  display: flex;
  flex-wrap: wrap;
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
  padding: 18px 32px 19px;
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
  color: #B9B9B9;

}

.card__item .second {
  overflow: hidden;
  padding: 17px 0 0 0;
}


.card__item .second span {
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0.0342857px;
  text-transform: uppercase;
}

.card__item .second .second__cur{
  font-size: 24px;
  line-height: 28px;
}

.pagination-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 1% 33%;
}

@media screen and (max-width: 320px) {
  .pagination-wrapper {
    padding: 1% 8%;
  }
}

.pagination_el span {
  box-shadow: 0px 5px 6px rgba(157, 157, 157, 0.16);
  border-radius: 8px;
  text-transform: uppercase;
  padding: 9px 32px;
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
