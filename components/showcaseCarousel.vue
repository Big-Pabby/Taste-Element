<template>
    <a-carousel autoplay>
    <div>
        <div class="showcase">
            <div class="content">
                <h2>Hello Victor, Grab your <span>Delicious Meal!!!</span></h2>
                <button class="btn btn-primary">Menu <Icon class="icon" icon="akar-icons:arrow-right" /></button>
            </div>
            <div class="showcase-image">
                <img src="../static/carousel/delivery-man-removebg-preview.png" class="chefs" alt="">
            </div>
        </div>
    </div>
    <div>
        <div class="showcase">
            <div class="content">
                <h2>Get to know about our Chefs</h2>
                <button class="btn btn-primary">About Us <Icon class="icon" icon="akar-icons:arrow-right" /></button>
            </div>
            <div class="showcase-image">
                <img src="../static/carousel/chefs3-removebg-preview.png" class="chefs" alt="">
            </div>
        </div>
    </div>
    <div>
        <div class="showcase">
            <div class="content">
                <h2>Get to view recipes from different chefs and different variety of food around the world.</h2>
                <button class="btn btn-primary">View Recipes <Icon class="icon" icon="akar-icons:arrow-right" /></button>
            </div>
            <div class="showcase-image">
                <img src="../static/carousel/recipe.png" alt="">
            </div>
        </div>
    </div>
  </a-carousel>
</template>

<script>
import { Icon } from '@iconify/vue2';

export default {
    components: {
        Icon,
    },

}
</script>

<style scoped>
    .showcase {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: var(--color-bg-primary);
        margin-top: 100px;
        border-radius: 60px;
        padding: 15px;
        height: 400px;
    }

    .content span {
        font-size: 24px;
        font-weight: bold;
        color: var(--color-bg-secondary);
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

    button {
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