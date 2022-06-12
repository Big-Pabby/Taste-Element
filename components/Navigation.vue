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
                <Icon class="icon" icon="bx:search" />
                <Icon class="icon" icon="akar-icons:cart" />
                <Icon class="icon" icon="icon-park-outline:like" />
                <Icon class="icon" icon="codicon:account" />
            </div>
        </header>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
    components: {
        Icon
    }
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

    .icon {
        font-size: 18px;
        font-weight: bold;
        color: var(--color-bg-primary);
        margin-right: 10px;
    }
  
@media screen and (max-width: 500px) {
    nav {
        display: none;
    }
}
</style>