<template>
    <div class="filter-color p-t-22 p-b-50 bo3">
        <div class="m-text15 p-b-12">
            Color
        </div>
        <ul class="flex-w">
            <li class="m-r-10" v-for= 'x in 7' :key ="x">
                <input class="checkbox-color-filter" :id="pre + x" type="checkbox" :name="pre + x" :value = 'pre + x' v-model = colors>
                <label class="color-filter" :class="pre + x" :for="pre + x"></label>
            </li>

        </ul>
    </div>
</template>

<script>
import {  mapMutations } from 'vuex'
export default {
    data() {
        return  {
            pre: 'color-filter'
        }
    },
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
