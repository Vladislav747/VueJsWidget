<template>
  <div class="card__item">
    <div class="first">
      <span class="first__number">{{sum}} </span>
      <span class="first__cur">{{currency}} =</span>
    </div>
    <div class="second">
      <span class="second__number">{{convertSum}} </span>
      <span class="second__cur">{{convertCurrency}}</span>
    </div>
  </div>
</template>

<script>
import CurrencyWidget from '@/js/currency.js'
export default {
  name: "CurrencyCard",
  props: {
    currency: String,
    sum: String,
    convertCurrency: String
  },
  data() {
    return {
      convertSum: 0
    };
  },
  updated() {
    this.calculateSum();
  },
  mounted() {
    this.calculateSum();
  },
  methods: {
    calculateSum() {
        let el = new CurrencyWidget(this.convertCurrency, this.currency);
        this.convertSum = this.sum * el.getData();
    }
  }
};
</script>
