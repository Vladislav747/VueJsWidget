<template>
  <div class="currency__toolbar">
    <div class="nav-wrapper">
      <a href="#" data-toggle="tab" @click="prevTabElement">
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 10.58L2.9925 6L7 1.41L5.76625 0L0.51625 6L5.76625 12L7 10.58Z" fill="#CCAE68"></path>
        </svg>
      </a>

      <ul class="nav nav-tabs">
        <li class="nav__item" v-for="el in curenciesArr" :key="el">
          <a
            class="small"
            href="#"
            :class="{'active' : (el == currentEl)}"
            @click.prevent="changeElement(el)"
            data-cur="{el}"
          >{{el}}</a>
        </li>
      </ul>
      <a href="#" data-toggle="tab" @click="nextTabElement">
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.516357 10.58L4.52386 6L0.516357 1.41L1.75011 0L7.00011 6L1.75011 12L0.516357 10.58Z"
            fill="#CCAE68"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  props: {
    msg: String
  },
  data() {
    return {
      curenciesArr: ["usd", "rub", "nok", "jpy", "eur", "cad"],
      currentEl: "eur",
      currentElNumber: 5
    };
  },
  methods: {
    nextTabElement() {
        
       
    //   console.log( el.updateData(this.curenciesArr));
      if (this.currentElNumber <= this.curenciesArr.length-1) {
        this.currentElNumber++;
        this.currentEl = this.curenciesArr[this.currentElNumber - 1];
        this.$emit("newElement", this.currentEl);
      }
    },
    prevTabElement() {
      console.log("prevTabElement");
      console.log(this.currentElNumber);
      if (this.currentElNumber > 1) {
        this.currentElNumber--;
        this.currentEl = this.curenciesArr[this.currentElNumber - 1];
        this.$emit("newElement", this.currentEl);
      }
    },
    changeElement(el) {
      this.currentEl = el;
      this.$emit("newElement", this.currentEl);
    }
  }
};
</script>
