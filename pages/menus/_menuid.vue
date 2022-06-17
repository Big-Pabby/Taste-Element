<template>
  <div class="container"></div>
</template>

<script>
import { useMenuStore } from '~/store/Menu';

export default {
    name: 'single-menu',
    data() {
        return {
            movie: null,
            menuStore: useMenuStore(),
        }
    },

    mounted() {
        const params = this.$route.params.menuid
        this.menuStore.getSingleMenu(params)
        this.movie = useMenuStore().fetchSingleMenu
        console.log(params)
        console.log(this.movie)
    },
}
</script>

<style scoped>

</style>