<template>
    <div class="contact-page">
        <Navigation />
        <div class="container">
            <div class="contact-showcase">
                <h1>Contact Us</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, in.</p>
            </div>

            <form>
                <h3>Send A Message</h3>
                <div class="input input-name">
                    <input type="text" placeholder="Your First Name">
                    <input type="text" placeholder="Your Last Name">
                </div>
                <div class="input input-email">
                    <input type="email" placeholder="Your Email Address">
                </div>
                <div class="input input-phone">
                    <input type="tel" placeholder="Your Phone Number">
                </div>
                <div class="input-message">
                    <textarea placeholder="How Can We Help?" cols="30" rows="10"></textarea>
                </div>
                <input type="submit" class="btn btn-primary" value="SUBMIT">
            </form>
        </div>
        <Footer />
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .contact-showcase {
        margin-top: 100px;
        height: 200px;
        padding: 10px 20px;
        background: url(../static/contact-image/hero-bg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .contact-showcase h1 {
        background: -webkit-linear-gradient(#ffc529, #fe724c);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        font-weight: bold;
    }

    .contact-showcase p {
        color: #fff;
        font-weight: bold;
        text-align: center;
    }

    form {
        max-width: 600px;
        margin: 50px auto;
        padding: 30px 40px;
        border-radius: 30px 0px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    }

    h3 {
        font-weight: bold;
    }

    .input-name {
        display: flex;
        gap: 20px;
    }

    form div {
        margin-top: 20px;
    }

    .input input {
        width: 100%;
        padding: 15px 20px;
        border-radius: 5px;
        outline-color: var(--color-bg-secondary);
    }

    .input-message {
        margin-bottom: 40px;
    }

    textarea {
        width: 100%;
        padding: 15px 20px;
        border-radius: 5px;
        outline-color: var(--color-bg-secondary);
    }
</style>