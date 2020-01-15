<template>
  <div >
    <!-- Header -->
    
    <header class="header1">
      <app-header></app-header>
      <app-header-mobile></app-header-mobile>
      <menu-mobile></menu-mobile>
	</header>
	<app-title></app-title>
	<app-content></app-content>

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
// @ is an alias to /src
import appHeader from './Header/Header.vue'
import appHeaderMobile from './Header/HeaderMobile.vue'
import menuMobile from './Header/MenuMobile.vue'
import appTitle from '@/components/Title.vue'
import appContent from './Content/Content.vue'
import appFooter from './Footer/Footer.vue'
export default {
	name: 'home',
	components: {
		appContent,
		appFooter,
		appHeader,
		appHeaderMobile,
		appTitle,
		menuMobile
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
  	}
}
</script>
