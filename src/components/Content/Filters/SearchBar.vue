<template>
    <div class="search-product pos-relative bo4 of-hidden">
        <input class="s-text7 size6 p-l-23 p-r-50" type="text" name="search-product" placeholder="Search Products..." v-model = 'search'>

        <button class="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4" @click = 'addToFilter'>
            <i class="fs-12 fa fa-search" aria-hidden="true"></i>
        </button>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'searchProducts',
            'filtersToUse'
        ]),
        search: {
            get(){
                return this.searchProducts
            },
            set(keyWord){
                let filters = [...this.filtersToUse]
                if (filters.includes('search')) {
                    filters.splice(filters.indexOf('search'), 1)
                    this.setFiltersToUse(filters)
                }
                this.setSearchProducts(keyWord)
            }
        }
    },
    methods: {
        ...mapMutations([
            'setSearchProducts',
            'setFiltersToUse'
        ]),
        addToFilter() {
            let filters = [...this.filtersToUse]
            if (!filters.includes('search')) {
                filters.push('search')
                this.setFiltersToUse(filters)
            }
        }
    }
}
</script>

<style>

</style>