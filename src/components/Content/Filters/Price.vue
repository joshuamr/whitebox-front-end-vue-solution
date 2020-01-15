<template>
  <div class="filter-price p-t-22 p-b-50 bo3">
        <div class="m-text15 p-b-17">
            Price
        </div>

        <div class="wra-filter-bar">
            <input type="range" @change = setPrice($event) min = 0 max = 500 :value = priceRangeMid>
        </div>

        <div class="flex-sb-m flex-w p-t-16">
            <div class="w-size11">
                <!-- Button -->
                <button class="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4" @click = 'addToFilter'>
                    Filter
                </button>
            </div>

            <div class="s-text3 p-t-10 p-b-10">
                Range: $<span id="value-lower">{{ this.priceRangeLow }}</span> - $<span id="value-upper">{{ this.priceRangeHigh }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'filtersToUse',
            'priceRangeMid',
            'priceRangeLow',
            'priceRangeHigh',
            'sortPriceRange'
        ]),
        
    },
    methods:{
        ...mapMutations([
            'setPriceRangeMid',
            'setFiltersToUse',
            'setSortPriceRange'
        ]),
        addToFilter() {
            let filters = [...this.filtersToUse]
            if (!filters.includes('price')){
                filters.push('price')
                this.setFiltersToUse(filters)
            }  
            // if (this.sortPriceRange) {
            //     this.setSortPriceRange(null)
            // }
        },
        setPrice(event) {
            this.setPriceRangeMid(event.target.value)
        }
    }
}
</script>

<style>

</style>