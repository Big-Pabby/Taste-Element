<template>
    <div class="menus">
        <div v-for="menu in menuStore.Menus" class="menu" :key="menu.id">
            <div class="menu-image">
                <img :src="require(`../static/Menus/${menu.image}`)" alt="">
            </div>
            <h2>{{menu.title}}</h2>
            <p>{{menu.category}}</p>
            <div class="menu-flex">
                <h3><span>$</span>15.00</h3>
                <nuxt-link to="#" class="btn">Add to Cart</nuxt-link>
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
        }
    }
}
</script>

<style scoped>
    .menus {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        margin: 50px 0;
        text-align: center;
    }

    .menu {
         padding: 20px 10px;
         border-radius: 30px 30px 0 0;
         box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    }

    .menu-image img {
        border-radius: 30px 30px 0 0;
    }

    .menu-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (max-width: 1024px) {
        .menus {
            grid-template-columns: 1fr 1fr;
        }
    }
    
    @media screen and (max-width: 600px) {
       .menus {
           grid-template-columns: 1fr;
       }
    }
</style>