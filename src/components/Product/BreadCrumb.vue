<template>
   <!-- breadcrumb -->
    <div class="bread-crumb bgwhite flex-w p-l-52 p-r-15 p-t-30 p-l-15-sm" >
      <router-link v-for = 'crumb in crumbs' :key = 'crumb' :to = '{name: "home"}' class="s-text16" @click = 'setCategory(crumb)'>
        {{ crumb }}
        <i class="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
      </router-link>

      <span class="s-text17">
        {{ itemSelected.name }}
      </span>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'category',
            'itemSelected'
        ]),
        crumbs(){
            return  ['Home', this.category]
        }
    },
    methods: {
        ...mapMutations([
            'setCategory'
        ])
    }
}
</script>

<style>

</style>