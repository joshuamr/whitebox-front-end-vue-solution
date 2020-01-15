<template>
  <!-- Menu Mobile -->
		<div class="wrap-side-menu" >
			<nav class="side-menu">
				<ul class="main-menu">
					<li class="item-topbar-mobile p-l-20 p-t-8 p-b-8">
						<free-shipping :mobile = true></free-shipping>
					</li>

					<li class="item-topbar-mobile p-l-20 p-t-8 p-b-8">
						<email-currency></email-currency>
					</li>

					<li class="item-topbar-mobile p-l-10">
						<social-bar :mobile=true></social-bar>
					</li>

					<li class="item-menu-mobile">
						<a href="index.html">Home</a>
						<ul class="sub-menu">
							<li><a href="index.html">Homepage V1</a></li>
							<li><a href="home-02.html">Homepage V2</a></li>
							<li><a href="home-03.html">Homepage V3</a></li>
						</ul>
						<i class="arrow-main-menu fa fa-angle-right" aria-hidden="true"></i>
					</li>

					<li class="item-menu-mobile">
						<a href="product.html">Shop</a>
					</li>

					<li class="item-menu-mobile">
						<a href="product.html">Sale</a>
					</li>

					<li class="item-menu-mobile">
						<a href="cart.html">Features</a>
					</li>

					<li class="item-menu-mobile">
						<a href="blog.html">Blog</a>
					</li>

					<li class="item-menu-mobile">
						<a href="about.html">About</a>
					</li>

					<li class="item-menu-mobile">
						<a href="contact.html">Contact</a>
					</li>
				</ul>
			</nav>
		</div>
</template>

<script>
import { mapMutations } from 'vuex'
import { findPrice } from '@/store/helperFunctions'
import freeShipping from '@/components/Header/FreeShipping.vue'
import emailCurrency from '@/components/Header/EmailCurrency.vue'
import socialBar from '@/components/Header/SocialBar.vue'
export default {
	components:{
		emailCurrency,
		freeShipping,
		socialBar
	},
    methods: {
        ...mapMutations([
            'setCurrency'
        ]),
        setLocalCurrency(event) {
            this.setCurrency(event.target.value)
        },
        findConvertedPrice(price) {
            return findPrice(price)
        }
    }
}
</script>

<style>

</style>