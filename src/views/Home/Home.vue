<template>
  <div >
	<app-title></app-title>
	<app-content></app-content>
  </div>
</template>

<script>
import appTitle from '@/components/Home/Title.vue'
import appContent from './Content/Content.vue'
export default {
	name: 'home',
	components: {
		appContent,
		appTitle,
	},
  	created() {
		var vm = this
	  	fetch('http://localhost:8082/products')
	  	.then(response=>{
		  	return response.json()
	  	})
		.then(data=>{
			let products = data.products
			vm.$store.commit('setItems', products)
		})
		.catch(err=>{
			console.log(err)
		})
	  },
}
</script>
