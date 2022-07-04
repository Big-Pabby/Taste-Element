<template>
    <div class="error container">
        <div class="error-content">
            <h1>404</h1>
            <p>Sorry we couldn't find this page</p>
            <h3>But don't worry you can find plenty of other things on our  homepage.</h3>
            <nuxt-link to="/home" class="btn btn-primary">Back to homepage</nuxt-link>
        </div>
        <div class="error-image">
            <img src="../static/404.svg" alt="error">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .error {
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        align-items: center;
    }

    @media screen and (max-width: 500px) {
        .error {
            grid-template-columns: 1fr;
        }
        
        .error-content {
            text-align: center;
        }
    }
</style>