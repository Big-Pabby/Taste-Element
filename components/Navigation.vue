<template>
    <div class="navigation">
        <header class="container">
            <NuxtLogo />
            <nav>
                <nuxt-link class="nav-link" to="/home">Home</nuxt-link>
                <nuxt-link class="nav-link" to="/about">About</nuxt-link>
                <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
            </nav>
            <div class="nav-icons">
                <nuxt-link class="cart" to="/cart">
                    <Icon class="icon"  id="cart-icon" icon="akar-icons:cart" />
                    <div v-if="menuStore.cart.length != 0" v-show="cartLength" class="item-count">
                        <span>{{menuStore.cart.length}}</span>
                    </div>
                </nuxt-link>
                <nuxt-link to="/favourite"><Icon class="icon" icon="icon-park-outline:like" /></nuxt-link>
                <nuxt-link to="/userPage"><Icon class="icon icon-none" icon="codicon:account" /></nuxt-link>
            </div>
        </header>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
import { useMenuStore } from '~/store/Menu';
export default {
    components: {
        Icon
    },
    data() {
        return {
            menuStore: useMenuStore(),
            cartLength: true
        }
    },
}
</script>

<style scoped>
    .navigation {
        background: #f4f4f4;
        padding: 20px 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
    }

    .cart {
        position: relative;
    }

    .item-count {
        position: absolute;
        display: grid;
        color: #fff;
        place-items: center;
        background: var(--color-bg-secondary);
        z-index: 10;
        border-radius: 50%;
        font-size: 10px;
        height: 14px;
        width: 14px;
        top: -50%;
        right: -50%;
    }

    span {
        color: var(--color-primary);
    }

    .nav-link {
        font-size: 18px;
        font-weight: bold;
        color: var(--color-primary);
        margin-right: 10px;
        transition: var(--transition);
    }

    .nuxt-link-active {
        color: var(--color-bg-secondary);
        padding-bottom: 3px;
        border-bottom: 2px solid var(--color-bg-secondary);
    }

    .nav-link:hover {
        color: var(--color-bg-secondary);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-icons {
        display: flex;
        gap: 10px;
    }

    .icon {
        font-size: 18px;
        font-weight: bold;
        color: var(--color-bg-primary);
    }

    #cart-icon {
        margin-right: none;
    }
  
@media screen and (max-width: 700px) {
    nav, .icon-none {
        display: none;
    }
}
</style>