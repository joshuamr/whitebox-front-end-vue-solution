<template>
    <div>
        <h4 class="m-text14 p-b-7">
            Categories
        </h4>

        <ul class="p-b-54">
            <li class="p-t-4" v-for='category in categories' :key = category>
                <a @click = 'setCategory(category)' class="s-text13 active1">
                    {{ category }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            categories: ['All', 'Women', 'Men', 'Kids', 'Accessories']
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