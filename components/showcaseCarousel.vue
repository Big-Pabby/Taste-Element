<template>
    <a-carousel autoplay>
    <div>
        <div class="showcase showcase1-image">
            <div class="content">
                <h2>Hello  <span>{{user.getUserData.username}}</span>, Grab your Delicious Meal!!!</h2>
                <button class="btn btn-secondary">Menu <Icon class="icon" icon="akar-icons:arrow-right" /></button>
            </div>
        </div>
    </div>
    <div>
        <div class="showcase showcase2-image">
            <div class="content">
                <h2>Get to know about our Chefs</h2>
                <nuxt-link to="/about" class="btn btn-primary">About Us <Icon class="icon" icon="akar-icons:arrow-right" /></nuxt-link>
            </div>
        </div>
    </div>
    <div>
        <div class="showcase showcase3-image">
            <div class="content">
                <h2>Get to view recipes from different chefs and different variety of food around the world.</h2>
                <button class="btn btn-primary">View Recipes <Icon class="icon" icon="akar-icons:arrow-right" /></button>
            </div>
        </div>
    </div>
  </a-carousel>
</template>

<script>
import { Icon } from '@iconify/vue2';
import { userData } from '~/store/userData';

export default {
    components: {
        Icon,
    },

    data() {
        return {
            user: userData()
        }
    },
}
</script>

<style scoped>
    .showcase {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 100px;
        border-radius: 30px;
        padding: 15px 20px;
        height: 400px;
    }
    .showcase1-image {
        background: url('../static/carousel/banner-1.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .showcase2-image {
        background: url('../static/carousel/banner-2.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .showcase3-image {
        background: url('../static/carousel/banner-3.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .content span {
        font-size: 24px;
        font-weight: bold;
        color: var(--color-primary);
    }

    .chefs {
        height: 300px;
    }

    .content {
        width: 40%;
    }

    .content h2 {
        color: #fff;
    }

    .btn {
        display: flex;
        align-items: center;
    }

    .showcase-image {
        display: flex;
        align-items: center;
    }
  
@media screen and (max-width: 500px) {
    

    .content h2 {
        font-size: 14px;
    }

    .content {
        width: 60%;
       
    }

    .chefs {
        height: auto;
    }

    .showcase-image {
        width: 40%;
    }

    .content span {
        font-size: 15px;
    }

    button {
        font-size: 13px;
    }

    .showcase {
        height: 200px;
    }

    .btn {
    
    padding: 0.5rem 1rem;
    }
}
</style>