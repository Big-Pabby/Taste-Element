<template>
    <footer>
        <div class="container">
            <div class="newsletter">
                <h2>Subcribe To Our Newsletter</h2>
                <p>Get an update on all of our latest dishes  and discounted prices</p>
                <div class="newsletter-input">
                    <input type="email" placeholder="Enter email">
                    <button class="btn btn-primary">Subscribe</button>
                </div>
            </div>
            <h4 class="owner">Website Developed With NUXT.js By Big-Pabby</h4>
            <div class="footer-illustration">
                <img src="../static/footer/footer-illustration.png" alt="">
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
    footer {
        background: black;
        padding-top: 30px;
    }

    .newsletter {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        text-align: center;
    }

    h4 {
        margin-top: 50px;
        background: -webkit-linear-gradient(#ffc529, #fe724c);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        font-size: 17px;
        font-weight: bold;
    }

    .newsletter h2 {
        color: #fff;
        font-weight: bold;
        font-size: 24px;
    }

    input {
        border-radius: 7px;
        padding: 10px 5px;
        outline-color: var(--color-bg-secondary);
    }
</style>