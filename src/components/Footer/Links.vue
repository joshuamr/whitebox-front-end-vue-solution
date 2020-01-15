<template>
    <div class="w-size7 p-t-30 p-l-15 p-r-15 respon4">
        <h4 class="s-text12 p-b-30">
            Links
        </h4>

        <ul>
            <li class="p-b-9" v-for = 'link in links' :key = 'link'>
                <a href="#" class="s-text7">
                    {{ link }}
                </a>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: ['Search', 'About Us', 'Contact Us', 'Returns']
        }
    }
}
</script>