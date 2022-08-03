<template>
    <div class="menu-page">
        <Navigation />
        <MenuLoader v-show="loading" />
        <div class="container">
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
                        <h3><span>$</span>{{menu.price}}</h3>
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
    middleware: 'authenticated',
    components: {
        Icon
    },

    mounted() {
        this.loading = true
        setTimeout(() => {
            this.loading = false
            this.menuStore.getSingleMenu(this.$route.params.menuid)
            this.movie = this.menuStore.fetchSingleMenu
        }, 1000)
    },


    data() {
        return {
            movie: null,
            menuStore: useMenuStore(),
            loading: false,
            cartLength: true,
        }
    },

    
    methods: {
        addMenuToCart(menu) {
            this.menuStore.addToCart(menu)
        }
    },
}
</script>

<style scoped>
    .menu-page {
        position: relative;
    }

    .single-menu {
        width: 100%;
        margin-top: 100px;
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
            margin-top: 30px;
        }

        .menu-content {
            width: 100%;
        }
    }
</style>