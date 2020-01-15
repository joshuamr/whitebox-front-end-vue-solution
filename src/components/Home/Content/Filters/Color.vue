<template>
    <div class="filter-color p-t-22 p-b-50 bo3">
        <div class="m-text15 p-b-12">
            Color
        </div>
        <ul class="flex-w">
            <li class="m-r-10">
                <input class="checkbox-color-filter" id="color-filter1" type="checkbox" name="color-filter1" value = 'color-filter1' v-model = colors>
                <label class="color-filter color-filter1" for="color-filter1"></label>
            </li>

            <li class="m-r-10">
                <input class="checkbox-color-filter" id="color-filter2" type="checkbox" name="color-filter2" value="color-filter2" v-model = colors>
                <label class="color-filter color-filter2" for="color-filter2"></label>
            </li>

            <li class="m-r-10">
                <input class="checkbox-color-filter" id="color-filter3" type="checkbox" name="color-filter3" value="color-filter3" v-model = colors>
                <label class="color-filter color-filter3" for="color-filter3"></label>
            </li>

            <li class="m-r-10">
                <input class="checkbox-color-filter" id="color-filter4" type="checkbox" name="color-filter4" value="color-filter4" v-model = colors>
                <label class="color-filter color-filter4" for="color-filter4"></label>
            </li>

            <li class="m-r-10">
                <input class="checkbox-color-filter" id="color-filter5" type="checkbox" name="color-filter5" value="color-filter5" v-model = colors>
                <label class="color-filter color-filter5" for="color-filter5"></label>
            </li>

            <li class="m-r-10">
                <input class="checkbox-color-filter" id="color-filter6" type="checkbox" name="color-filter6" value="color-filter6" v-model = colors>
                <label class="color-filter color-filter6" for="color-filter6"></label>
            </li>

            <li class="m-r-10">
                <input class="checkbox-color-filter" id="color-filter7" type="checkbox" name="color-filter7" value="color-filter7" v-model = colors>
                <label class="color-filter color-filter7" for="color-filter7"></label>
            </li>
        </ul>
    </div>
</template>

<script>
import {  mapMutations } from 'vuex'
export default {
    computed: {
        colors:{
            get() {
                return this.$store.getters.colors
            },
            set(colors) {
                this.setColors(colors)
            }
        }
    },
    methods: {
        ...mapMutations ([
            'setColors',
        ])
    }

}
</script>

<style>

</style>