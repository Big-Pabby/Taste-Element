<template>
    <div>
        <Navigation />
        <div class="container">
            <showcaseCarousel />

            <div class="input-field">
                <input type="search" placeholder="🔍 Search Foods..." name="search" @change="search">
            </div>

            <div class="categories">
                <h2>Explore Categories</h2>
                <div class="category-flex">
                    <div class="category">
                        <div class="category-image">
                            <img src="../static/burger.svg" alt="">
                        </div>
                        <h4>Burger</h4>
                    </div>
                    <div class="category">
                        <div class="category-image">
                            <img src="../static/pizza.png" alt="">
                        </div>
                        <h4>Pizza</h4>
                    </div>
                    <div class="category">
                        <div class="category-image">
                            <img src="../static/sushi.png" alt="">
                        </div>
                        <h4>Sushi</h4>
                    </div>
                </div>
            </div>

            <Menu />
        </div>
    </div>
</template>

<script>
import { useMenuStore } from '~/store/Menu';

export default {

    data() {
        return {
            menuStore: useMenuStore()
        }
    },

    methods: {
        search(e) {
            console.log(e.target.value)
            this.menuStore.onSearchChange(e.target.value)
        }
    } 
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
    }

    input {
        width: 300px;
        border-radius: 50px;
        padding: 10px 15px;
        background: #f4f4f4;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        border: none;
        outline: none;
    }
</style>