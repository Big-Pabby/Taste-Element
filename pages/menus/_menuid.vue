<template>
    <div>
        <Navigation />
        <div class="container">
            <Loading v-show="loading" />
            <div v-for="menu in movie" class="single-menu" :key="menu.id">
                <div class="menu">
                    <div class="menu-image">
                        <img :src="require(`../../static/Menus/${menu.image}`)" alt="">
                        <div class="like-icon">
                            <Icon class="icon" icon="icon-park-outline:like" />
                        </div>
                        
                    </div>
                    <div class="menu-content">
                        <h1>{{menu.title}}</h1>
                        <h3>Description</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam sit corporis atque eos unde. Voluptatum explicabo architecto similique, velit voluptatem laborum! Vero cum inventore hic delectus rerum laboriosam culpa dicta harum. Quaerat porro dolore neque odit voluptatibus eveniet ipsa.</p>
                    </div>
                </div>

                <div class="menu-btn">
                    <div class="price">
                        <h2>Price</h2>
                        <h3><span>$</span>15.00</h3>
                    </div>
                    <button class="btn btn-primary" @click="addMenuToCart(menu)">+ Add to cart</button>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
import { useMenuStore } from '~/store/Menu';
import { Icon } from '@iconify/vue2';

export default {
    name: 'single-menu',
    components: {
        Icon
    },

    data() {
        return {
            movie: null,
            menuStore: useMenuStore(),
            loading: false,
            params: this.$route.params.menuid,
        }
    },

    mounted() {
        this.loading = true
        setTimeout(() => {
            this.loading = false
            this.menuStore.getSingleMenu(this.params)
            this.movie = this.menuStore.fetchSingleMenu
            console.log(this.params)
            console.log(this.movie)
        }, 1000)
    },

    methods: {
        addMenuToCart(menu) {
            this.menuStore.addToCart(menu)
        }
    },
}
</script>

<style scoped>

    .single-menu {
        padding-top: 100px;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .menu-image {
        position: relative;
    }

    .like-icon {
        position: absolute;
        top: 5px;
        text-align: center;
        border-radius: 10px;
        padding: 10px;
        left: 10px;
        background: #fff;
    }

    .like-icon:hover {
        opacity: 0.85;
    }

    .icon {
        font-size: 24px;
        font-weight: bold;
        color: var(--color-bg-primary);
    }

    .menu-content {
        width: 65%;
        margin: auto;
    }

    h2 {
        color: var(--color-bg-primary);
    }
    .menu {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    .menu-btn {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        margin-top: 30px;
    }

    @media screen and (max-width: 960px) {
        .menu {
            flex-direction: column;
            text-align: center;
        }

        .menu-content {
            width: 100%;
        }
    }
</style>