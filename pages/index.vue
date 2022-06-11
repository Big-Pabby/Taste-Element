<template>
  <div class="get-started">
    <div class="starting-page">
      <div class="start-image-bg">
        <div class="start-image">
          <img src="../static/chef-removebg-preview.png" alt="">
        </div>
      </div>
      <div class="start-content">
        <div class="start-logo">
          <NuxtLogo />
        </div>
        <h1>Order & Let's Eat Healthy <span>Food</span></h1>
        <p>Our job is to fill your tummy with delicious food and fast delivery</p>
        <nuxt-link to="/register" class="btn btn-primary">Get Started</nuxt-link>
        <nuxt-link to="/login" class="link link-color">I already have an account</nuxt-link>
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
  .get-started {
    height: 100vh;
  }
  .starting-page {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  
  .start-image-bg {
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
    top: 30px;
  }

  .start-image {
    border-radius: 30%;
  }

  .link {
    display: block;
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    transition: var(--transition);
  }

  .link:hover {
    color: #1890ff;
  }

  .start-content {
    width: 50%;
    height: 100vh;
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  p {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 760px) {
    .starting-page{
      flex-direction: column;
      background: url('../static/background2.jpg');
    }

    .start-image-bg {
      height: 55vh;
      background: none;
    }

    .start-image {
      position: absolute;
      width: 50%;
      bottom: 40vh;
    }

    .start-content {
      width: 95%;
      height: 45vh;
      padding: 10px 20px;
      background: #ffffffdf;
      text-align: center;
      border-radius: 60px 60px 0 0;
      z-index: 5;
    }
  }

  @media screen and (max-width: 450px) {
    .start-image {
      width: 75%;
    }
  }
</style>
