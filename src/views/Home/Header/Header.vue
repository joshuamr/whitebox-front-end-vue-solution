<template>
	<!-- Header desktop -->
	<div class="container-menu-header">
		<div class="topbar">
			<social-bar></social-bar>
			<free-shipping></free-shipping>
			<email-currency></email-currency>		
		</div>

		<div class="wrap_header">
			<!-- Logo -->
			<a href="index.html" class="logo">
				<img src="images/icons/logo.png" alt="IMG-LOGO">
			</a>

			<!-- Menu -->
			<div class="wrap_menu">
				<nav class="menu">
					<item-menu></item-menu>
				</nav>
			</div>
			<header-icons></header-icons>
		</div> 
	</div>
</template>

<script>
import socialBar from '@/components/Header/SocialBar.vue'
import freeShipping from '@/components/Header/FreeShipping.vue'
import emailCurrency from '@/components/Header/EmailCurrency.vue'
import itemMenu from '@/components/Header/ItemMenu.vue'
import headerIcons from '@/components/Header/HeaderIcons.vue'
export default {
	components: {
		emailCurrency,
		headerIcons,
		itemMenu,
		freeShipping,
		socialBar
	},
}
</script>

<style>

</style>