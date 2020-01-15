<template>
    <footer class="bg6 p-t-45 p-b-43 p-l-45 p-r-45">
		<div class="flex-w p-b-90">
			<div class="w-size6 p-t-30 p-l-15 p-r-15 respon3">
				<h4 class="s-text12 p-b-30">
					GET IN TOUCH
				</h4>

				<div>
					<p class="s-text7 w-size27">
						Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
					</p>

					<social-footer></social-footer>
				</div>
			</div>

			<categories-list></categories-list>
			<footer-links></footer-links>
            <get-help></get-help>
			<news-letter></news-letter>
        </div>

		<bottom-bar></bottom-bar>
	</footer>
</template>

<script>
import socialFooter from '@/components/Footer/SocialFooter.vue'
import categoriesList from '@/components/Footer/CategoriesList.vue'
import footerLinks from '@/components/Footer/Links.vue'
import getHelp from '@/components/Footer/GetHelp.vue'
import newsLetter from '@/components/Footer/NewsLetter.vue'
import bottomBar from '@/components/Footer/BottomBar.vue'
export default {
    components: {
		bottomBar,
        categoriesList,
        footerLinks,
        getHelp,
        newsLetter,
        socialFooter
    }
}
</script>