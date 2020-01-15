<template>
    <div class="flex-sb-m flex-w p-b-35">
        <div class="flex-w">
            <div class="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                <select class="selection-2" name="sorting" @change = setSortingParam($event.target.value)>
                    <option :value = null>Default Sorting</option>
                    <option value = 'pop'>Popularity</option>
                    <option value = 'lth'>Price: low to high</option>
                    <option value = 'htl'>Price: high to low</option>
                </select>
            </div>

            <div class="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                <select class="selection-2" name="sorting" @change = setSortPriceRange($event.target.value) ref = 'select'>
                    <option :value = 'null'>Price</option>
                    <option v-for = 'option in options' :value = option :key = option>${{option - 25}}.00 - ${{option + 25}}.00</option>
                    <option value = 'max'>$200.00+</option>
                </select>
            </div>
        </div>

        <span class="s-text8 p-t-5 p-b-5">
            {{ resultsText }}
        </span>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
    data(){
        return {
            options: [25, 75, 125]
        }
    },
    computed: {
        ...mapGetters([
            'itemsToUse',
            'page',
            'sortPriceRange'
        ]),
        maxNum(){
            return Math.min(this.page * 12, this.itemsToUse.length)
        },
        minNum(){
            return (this.page - 1) * 12 + 1
        },
        resultsText() {
            if (this.itemsToUse.length) return `Showing ${ this.minNum }–${this.maxNum} of ${ this.itemsToUse.length } results`
            else return `0 results`
        }
    },
    methods: {
        ...mapMutations([
            'setSortingParam',
            'setSortPriceRange'
        ])
    },
}
</script>

<style>

</style>