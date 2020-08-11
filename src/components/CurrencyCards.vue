<template>
  <div class="tab-content currency__body">
    <div class="tab-pane active" id="tab_usd">
      <div class="input-wrapper">
        <input 
            type="text" 
            id="input__curr" 
            placeholder="0" 
            v-model="currValue"
        >
        <span class="currencyType">{{currencyType}}</span>
      </div>
      <div class="cards">
        <currency-card
          v-for="el in displayElements"
          :key="el"
          :sum="currValue"
          :currency="currencyType"
          :convertCurrency="el"
        />
      </div>
      <div class="pagination-wrapper">
        <div class="pagination_el pagination__prev">
            <span @click.prevent="prevPage
            
            
            ">Назад</span>
        </div>
        <div class="pagination_el pagination__next">
            <span @click.prevent="nextPage">Далее</span>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import CurrencyCard from "./CurrencyCard";

export default {
  name: "CurrencyCards",
  components: {
    CurrencyCard
  },
  props: {
    currencyType: {
      default: "eur",
      type: String
    },
    filteredCurrencies:{
        default: ["usd", "rub", "nok", "jpy", "cad"]
    }
  },
  data() {
    return {
      currValue: "0",
      curenciesArr: ["usd", "rub", "nok", "jpy", "eur", "cad"],
      perPage: 4,
      numberOfPages: 0,
      page: 1,
    };
  },

  computed:{
      displayElements(){
          return this.paginate(this.filteredCurrencies);
      }
  },

  mounted(){
      this.setPages();
  },

  watch(){
      this.paginate(this.filteredCurrencies);
  },

  methods:{
    paginate (elements) {
        let perPage = this.perPage;
        let from = (this.page * perPage) - perPage;
        let to = (this.page * perPage);
        return  elements.slice(from, to);
    },
    nextPage(){
        console.log(this.currValue,"object");
        if(this.page + 1 <= this.numberOfPages){
            this.page++;
        }
        this.paginate(this.filteredCurrencies);
    },
    prevPage(){
        if(this.page - 1 >= 1){
            this.page--;
        }
        this.paginate(this.filteredCurrencies);
    },
    setPages () {
        this.numberOfPages = Math.ceil(this.filteredCurrencies.length / this.perPage);
    },
  },
}
</script>
