<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
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
