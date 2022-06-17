<template>
    <div>
        <Navigation />
        <div class="container">
            <showcaseCarousel />

            <div class="input-field">
                <input type="search" placeholder="🔍 Search Foods..." name="search" v-model.lazy="search" @change="getSearchedMovies">
                <button v-show="search !== ''" @click="clearSearch">Clear Search</button>
            </div>

            <div class="categories">
                <h2>Explore Categories</h2>
                <div class="category-flex">
                    <div class="category" @click="filterBurger">
                        <div class="category-image">
                            <img src="../static/burger.svg" alt="">
                        </div>
                        <h4>Burger</h4>
                    </div>
                    <div class="category" @click="filterPizza">
                        <div class="category-image">
                            <img src="../static/pizza.png" alt="">
                        </div>
                        <h4>Pizza</h4>
                    </div>
                    <div class="category" @click="filterMeat">
                        <div class="category-image">
                            <img src="../static/sushi.png" alt="">
                        </div>
                        <h4>Meat</h4>
                    </div>
                </div>
            </div>

            <Loading v-if="loading" />

            <Menu v-else :search="search" />
        </div>
    </div>
</template>

<script>
import { useMenuStore } from '~/store/Menu';

export default {

    data() {
        return {
            menuStore: useMenuStore(),
            search: '',
            loading: false,
        }
    },

    methods: {
        getSearchedMovies() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
                this.menuStore.onSearchChange(this.search)
            }, 5000)
            
        },

        clearSearch () {
            this.menuStore.clearSearchMenu()
            this.search = ''
        },

        filterMeat() {
            this.menuStore.meatCategory()
        },

        filterPizza() {
            this.menuStore.pizzaCategory()
        },

        filterBurger() {
            this.menuStore.burgerCategory()
        },
    },
}
</script>

<style scoped>

    .category {
        background: var(--color-bg-secondary);
        padding: 10px 20px;
        border-radius: 20px;
        border: 1px solid var(--color-bg-secondary);
        transition: var(--transition);
        cursor: pointer;
    }

    .category-image {
        width: 40px;
    }

    .category:hover {
        background: transparent;
    }

    .category-flex {
        display: flex;
        justify-content: space-between;
    }

    .categories {
        margin-top: 30px;
    }

    .categories h2, h4 {
        font-weight: bold;
    }

    h4 {
        margin-top: 10px;
    }

    .input-field {
        text-align: center;
        margin-top: 30px;
        display: flex;
        justify-content: center;
    }

    button {
        outline: none;
        cursor: pointer;
        padding: 0px 10px;
        border: none;
        color: #fff;
        background: var(--color-bg-primary);
        transition: var(--transition);
    }

    button:hover {
        opacity: 0.75;
    }

    input {
        max-width: 400px;
        margin: 0;
        padding: 10px 15px;
        background: #f4f4f4;
        border: none;
        outline: none;
    }

    @media screen and (max-width: 600px) {
       
    }
</style>