<template>
    <div class="w-size7 p-t-30 p-l-15 p-r-15 respon4">
        <h4 class="s-text12 p-b-30">
            Categories
        </h4>

        <ul>
            <li class="p-b-9" v-for = 'category in categories' :key = 'category'>
                <a @click = 'setCategory(category)' href = '#' class="s-text7">
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
            categories: ['Men', 'Women', 'Dresses', 'Sunglasses']
        }
    },
    methods: {
        ...mapMutations([
            'setCategory'
        ])
    }
}
</script>