<template>
    <div class="pagination flex-m flex-w p-t-26" >
        <a href="#" class="item-pagination flex-c-m trans-0-4" v-for = 'pageNumber in numberOfPages' :key = pageNumber :class = '{"active-pagination": pageNumber === page}' @click = 'setPage(pageNumber)'>{{ pageNumber }}</a>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'itemsToUse',
            'page'
        ]),
        numberOfPages() {
            return Math.ceil(this.itemsToUse.length / 12)
        }
    },
    methods: {
        ...mapMutations([
            'setPage'
        ])
    }
}
</script>

<style>

</style>