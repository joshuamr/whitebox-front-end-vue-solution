<template>
  <!-- Content page -->
	<section class="bgwhite p-t-55 p-b-65">
		<div class="container">
			<div class="row">
				<div class="col-sm-6 col-md-4 col-lg-3 p-b-50">
					<div class="leftbar p-r-20 p-r-0-sm">
						<categories-list></categories-list>
                        <app-filters></app-filters>
					</div>
				</div>

				<div class="col-sm-6 col-md-8 col-lg-9 p-b-50">
					<sorting-bar></sorting-bar>

					<!-- Product -->
					<app-items></app-items>

					<!-- Pagination -->
					<app-pagination></app-pagination>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import categoriesList from '@/components/Home/Content/CategoriesList.vue'
import appFilters from './ContentViews/Filters.vue'
import sortingBar from '@/components/Home/Content/SortingBar.vue'
import appItems from '@/components/Home/Content/Items.vue' 
import appPagination from '@/components/Home/Content/Pagination.vue'
export default {
    components: {
		appFilters,
		appItems,
		categoriesList,
		appPagination,
		sortingBar
    }
}
</script>

<style>

</style>