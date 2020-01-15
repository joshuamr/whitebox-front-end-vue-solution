<template>
  <!-- Title Page -->
	<section class="bg-title-page p-t-50 p-b-40 flex-col-c-m" style="background-image: url(images/heading-pages-02.jpg);">
		<h2 class="l-text2 t-center">
			{{ category.toUpperCase() }}
		</h2>
		<p class="m-text13 t-center">
			New Arrivals {{ collection }} {{ currentYear }}
		</p>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'category'
        ]),
        currentYear(){
            return new Date().getFullYear()
        },
        collection() {
            return `${this.category} ${(this.category === 'All') ? 'Collections' : 'Collection' }`
        }
    }

}
</script>

<style>

</style>