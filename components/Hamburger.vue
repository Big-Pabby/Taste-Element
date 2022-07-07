<template>
    <div class="flex">
        <nav>
            <nuxt-link class="nav-link" to="/home"><Icon class="nav-icon" icon="ant-design:home-outlined" /></nuxt-link>
            <nuxt-link class="nav-link" to="/about"><Icon class="nav-icon" icon="ant-design:read-outlined" /></nuxt-link>
            <nuxt-link class="nav-link" to="/contact"><Icon class="nav-icon" icon="healthicons:contact-support-outline" /></nuxt-link>
            <nuxt-link class="nav-link" to="/userPage"><Icon class="nav-icon" icon="codicon:account" /></nuxt-link>
        </nav>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
    components: {
        Icon
    },
}
</script>

<style scoped>
    .flex {
        display: none;
    }

    @media screen and (max-width: 700px) {
        .flex {
            display: flex;
            justify-content: center;
        }

        nav {
            position: fixed;
            bottom: 2rem;
            /* background: #ffc62941; */
            background: #fe734c3e;
            width: max-content;
            display: block;
            padding: 0.7rem 1.7rem;
            z-index: 2;
            display: flex;
            gap: 0.8rem;
            border-radius: 3rem;
            backdrop-filter: blur(15px);
        }

        .nav-link {
            background: transparent;
            padding: 0.9rem;
            border-radius: 50%;
            display: flex;
            color: var(--color-primary);
            font-size: 1.1rem;
        }

        .nav-link:hover {
            background: #fe734c85;
        }

        .nav-icon {
            font-size: 22px;
            font-weight: bold;
        }

        .nuxt-link-active {
            background: var(--color-bg-primary);
            color: #fff;
        }
    }
</style>