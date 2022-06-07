<template>
  <div class="get-started">
    <NuxtLogo class="start-logo" />
    <div class="starting-page">
      <div class="start-image">
        <img class="image" src="../static/chefmale.png" alt="">
      </div>
      <div class="start-content">
        <h1>Order & Let's Eat Healthy <span>Food</span></h1>
        <p>Our job is to fill your tummy with delicious food and fast delivery</p>
        <nuxt-link to="/register" class="btn btn-primary">Get Started</nuxt-link>
        <nuxt-link to="/login" class="link">I already have an account</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
  .starting-page {
    display: flex;
    flex-direction: row-reverse;
    max-height: 100vh;
    align-items: center;
  }
  
  .start-image {
    background: url('../static/background2.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 50%;
  }

  .start-logo {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .image {
    height: 70%;
    border-radius: 30%;
  }

  .link {
    display: block;
    color: var(--color-primary);
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
  }

  .start-content {
    width: 50%;
    height: 100vh;
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  p {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 960px) {
    .starting-page{
      flex-direction: column;
      background: url('../static/background2.jpg');
    }

    .start-image {
      height: 55vh;
      width: 100%;
    }

    .image {
      height: 300px;
      position: absolute;
      bottom: 40vh;
      z-index: 2;
    }

    .start-content {
      width: 100%;
      height: 45vh;
      padding: 10px 20px;
      text-align: center;
      border-radius: 60px 60px 0 0;
      z-index: 5;
    }
  }
</style>
