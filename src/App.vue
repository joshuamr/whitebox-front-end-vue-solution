<template>
  <div id="app">
    <!-- Header -->
    <header class="header1">
      <app-header></app-header>
      <app-header-mobile></app-header-mobile>
      <menu-mobile></menu-mobile>
	  </header>
    <router-view/>
    <!-- Footer -->
    <app-footer></app-footer>
    <!-- Back to top -->
    <div class="btn-back-to-top bg0-hov" id="myBtn">
      <span class="symbol-btn-back-to-top">
        <i class="fa fa-angle-double-up" aria-hidden="true"></i>
      </span>
    </div>
    <!-- Container Selection -->
    <div id="dropDownSelect1"></div>
    <div id="dropDownSelect2"></div>
  </div>
</template>

<script>
import appHeader from './views/Home/Header/Header.vue'
import appHeaderMobile from './views/Home/Header/HeaderMobile.vue'
import menuMobile from './views/Home/Header/MenuMobile.vue'
import appFooter from './views/Home/Footer/Footer.vue'
import { mapMutations } from 'vuex'
export default {
  components: {
    appFooter,
    appHeader,
    appHeaderMobile,
    menuMobile
  },
  methods: {
    ...mapMutations([
      'setExchangeRate'
    ])
  },
  created(){
    fetch('https://api.exchangeratesapi.io/latest')
    .then(res=>{
      return res.json()
    })
    .then(resData=>{
      let rate = 1 /resData.rates.USD
      this.setExchangeRate (rate)
    })
  }
}
</script>
