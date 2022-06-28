<template>
    <div class="cart">
        <div v-for="menu in cartItems" class="container" :key="menu.id">
            <div class="menu">
                <div class="menu-image">
                    <img :src="require(`../static/Menus/${menu.image}`)" alt="">
                </div>
                <div class="menu-content">
                    <h2>{{menu.title}}</h2>
                    <p>{{menu.category}}</p>
                    <div class="content-row">
                        <h3><span>$</span>15.00</h3>
                        <div class="quantity">
                            <h3 @click="incrementCart(menu)">+</h3>
                            <p>{{ menu.quantity }}</p>
                            <h3 @click="decrementCart(menu)">-</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useMenuStore } from '~/store/Menu';

export default {
    data() {
        return {
            menuStore: useMenuStore(),
            loading: false,
            cartItems: null
        }
    },

    mounted() {
        this.loading = true
        setTimeout(() => {
            this.loading = false
            this.cartItems = this.menuStore.getCart
            console.log(this.cartItems)
        }, 1000)
    },

    methods: {
        incrementCart(cartItem) {
            this.menuStore.increment(cartItem)
        },
        decrementCart(cartItem) {
            this.menuStore.decrement(cartItem)
        },
    },
}
</script>

<style scoped>

    .cart {
        background: #f4f4f4;
        padding: 20px 0;
        min-height: 100vh;
    }
    .menu {
        background: #fff;
        max-width: 600px;
        padding: 15px;
        margin: 10px auto;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .menu-content {
        width: 50%;
    }

    .menu-image img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }

    h2 {
        font-size: 18px;
    }

    .content-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
    }

    .quantity {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: var(--color-bg-primary);
        padding: 2px 20px;
        border-radius: 20px;
    }

    .quantity p {
        margin: 0 15px;
    }
    .quantity h3 {
        cursor: pointer;
        font-size: 20px;
    }

    @media screen and (max-width: 500px) {
        .menu-image img {
            width: 100px;
            height: 100px;
        }

        .menu-content {
            width: 60%;
        }
    }
</style>