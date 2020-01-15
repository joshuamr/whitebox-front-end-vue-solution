<template>
    <div>
        <h4 class="m-text14 p-b-32">
            Filters
        </h4>
        <price-filter></price-filter>
        <color-filter></color-filter>
        <search-bar></search-bar>
    </div>
</template>

<script>
import priceFilter from '@/components/Content/Filters/Price.vue'
import colorFilter from '@/components/Content/Filters/Color.vue'
import searchBar from '@/components/Content/Filters/SearchBar.vue'
export default {
    components: {
        colorFilter,
        priceFilter,
        searchBar
    }
}
</script>

<style>

</style>