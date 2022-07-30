<template>
    <div class="cart">
        <div class="container">
            <div v-for="menu in menuStore.cart" :key="menu.id">
                <div class="menu">
                    <div class="menu-image">
                        <img :src="require(`../static/Menus/${menu.image}`)" alt="">
                    </div>
                    <div class="menu-content">
                        <h2>{{menu.title}}</h2>
                        <p>{{menu.category}}</p>
                        <div class="content-row">
                            <h3><span>$</span>{{menu.price}}</h3>
                            <div class="quantity">
                                <h3 @click="incrementCart(menu)">+</h3>
                                <p>{{ menu.quantity }}</p>
                                <h3 @click="decrementCart(menu)">-</h3>
                            </div>
                        </div>
                        <button @click="deleteItem(menu.id)" class="btn btn-primary"><Icon  class="trash" icon="bi:trash" /> Delete</button>
                    </div>
                </div>
            </div>
            <div class="total">
                <button class="btn btn-secondary">Total Price: {{menuStore.cartTotalPrice}}</button>
            </div>
        </div>
        
    </div>
</template>

<script>
import { useMenuStore } from '~/store/Menu';
import { Icon } from '@iconify/vue2';

export default {

    components: {
        Icon
    },
    middleware: 'authenticated',

    data() {
        return {
            menuStore: useMenuStore(),
            loading: false,
        }
    },

    methods: {
        incrementCart(cartItem) {
            this.menuStore.increment(cartItem)
        },
        decrementCart(cartItem) {
            this.menuStore.decrement(cartItem)
        },

        deleteItem(id) {
            this.menuStore.deleteCart(id)
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

    button  {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        
    }

    .total {
        text-align: center;
        max-width: 200px;
        margin: 50px auto
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
        margin: 0px 15px 2px;
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