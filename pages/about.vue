<template>
  <div class="about-page">
      <Navigation />
      <div class="container">
        <div class="about-showcase">
          <div class="about-showcase-content">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, harum. (Mean't to have the restaurant motto but you get the gist😅😅)</p>
          </div>
        </div>

        <h1 class="founder-header">Meet The Founder</h1>

        <div class="about-founder">
          <div class="founder-image">
            <img src="../static/about-Image/avatar-1.jpg" alt="founder-image">
          </div>
          <div class="founder-content">
            <h2>How It Started</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maxime atque, facilis ex, fugiat non rerum sunt ducimus perferendis sequi quod provident necessitatibus blanditiis aliquam qui praesentium? Iusto esse quis, temporibus tenetur asperiores doloribus adipisci incidunt. Consectetur nemo, eaque molestiae fugiat quo possimus esse est. Cum ea temporibus omnis, aut doloribus molestiae recusandae debitis fuga pariatur atque deserunt et excepturi, officiis architecto iste nam harum facilis fugit provident facere accusamus mollitia. Accusantium consectetur et odio ratione libero dolorum, quod perspiciatis expedita deserunt cupiditate natus quaerat. Tenetur aut, qui quisquam reiciendis impedit corporis maiores ullam pariatur natus dicta vel inventore libero.</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .about-page {
    padding-top: 100px;
  }

  .about-showcase {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../static/carousel/banner-4.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 5px 20px;
  }
  .about-showcase-content {
    text-align: right;
    max-width: 400px;
  }

  .about-showcase-content h1 {
    color: var(--color-bg-secondary);
    font-weight: bold;
  }
  .about-showcase-content p {
    color: #fff;
    font-weight: bold;
  }

  .founder-header {
    text-align: center;
    margin-top: 30px;
    padding-bottom: 5px;
    border-bottom: 1px solid black;
  }

  .about-founder {
    width: 100%;
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: center;
  }

  @media screen and (max-width: 760px) {
    .about-founder {
      grid-template-columns: 1fr;
    }
  }
</style>