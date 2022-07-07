<template>
    <div class="showMenu">

        <div v-if="search !== ''">
            <div class="menus">
                <div v-for="menu in menuStore.searchedMenu" class="menu" :key="menu.id">
                    <div class="menu-image">
                        <img :src="require(`../static/Menus/${menu.image}`)" alt="">
                    </div>
                    <h2>{{menu.title}}</h2>
                    <p>{{menu.category}}</p>
                    <div class="menu-flex">
                        <h3><span>$</span>15.00</h3>
                        <nuxt-link :to="{name: 'menus-menuid', params:{menuid: menu.id}}" class="btn">View Menu</nuxt-link>
                    </div>
                </div>
            </div>
            
            <div v-if="menuStore.searchedMenu.length === 0" class="msg">
                <h2>Sorry the menu you are looking for is not available</h2>
            </div>
        </div>

        <div v-else class="menus">
            <div v-for="menu in menuStore.Menus" class="menu animate__zoomIn" :key="menu.id">
                <div class="menu-image">
                    <img :src="require(`../static/Menus/${menu.image}`)" alt="">
                </div>
                <h2>{{menu.title}}</h2>
                <p>{{menu.category}}</p>
                <div class="menu-flex">
                    <h3><span>$</span>15.00</h3>
                    <nuxt-link :to="{name: 'menus-menuid', params:{menuid : menu.id}}" class="btn">View Menu</nuxt-link>
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
        }
    },

    props: ['search'],
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

    .msg {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .menu {
         padding: 20px 10px;
         border-radius: 30px 30px 0 0;
         animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
         animation-duration: 2s;
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