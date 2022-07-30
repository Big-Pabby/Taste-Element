<template>
    <div class="contact-page">
        <div class="container">
            <div class="contact-showcase">
                <h1>Contact Us</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, in.</p>
            </div>

            <form>
                <h3>Send A Message</h3>
                <div class="input input-name">
                    <input type="text" placeholder="Your First Name" required>
                    <input type="text" placeholder="Your Last Name" required>
                </div>
                <div class="input input-email">
                    <input type="email" placeholder="Your Email Address" required>
                </div>
                <div class="input input-phone">
                    <input type="tel" placeholder="Your Phone Number" required>
                </div>
                <div class="input-message">
                    <textarea placeholder="How Can We Help?" cols="30" rows="10" required></textarea>
                </div>
                <input type="submit" class="btn btn-primary" value="SUBMIT">
            </form>

            <div class="contact-card">
                <div class="card">
                    <Icon class="card-icon" icon="ant-design:home-outlined" />
                    <h1>Visit Us</h1>
                    <p>Level 12, 6 Croiasure St, Melbourne, Society 1234</p>
                </div>
                <div class="card">
                    <Icon class="card-icon" icon="ci:mail" />
                    <h1>Contact Us</h1>
                    <p><Icon icon="arcticons:google-mail" /> tasteelement@gmail.com</p>
                    <p><Icon icon="ant-design:phone-filled" /> +234 903 006 00</p>
                </div>
                <div class="card">
                    <Icon class="card-icon" icon="emojione-monotone:globe-showing-europe-africa" />
                    <h1>Find Us Online</h1>
                    <div class="socials">
                        <Icon class="social-icon" icon="akar-icons:facebook-fill" />
                        <Icon class="social-icon" icon="ant-design:twitter-circle-filled" />
                        <Icon class="social-icon" icon="bi:instagram" />
                        <Icon class="social-icon" icon="akar-icons:youtube-fill" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
    layout: "userLayout",
    middleware: 'authenticated',
    components: {
        Icon
    },
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
        animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 2s;
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

    .contact-card {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        align-items: center;
        margin-bottom: 50px;
    }

    .card {
        height: 250px;
        border-radius: 20px;
        text-align: center;
        padding: 20px;
        animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
         animation-duration: 2s;
    }

    .card:hover {
        border: 2px solid var(--color-bg-primary);
    }

    .card h1 {
        font-size: 28px;
        margin: 20px 0;
    }

    .card-icon {
        color: var(--color-bg-secondary);
        font-size: 28px;
    }

    .social-icon {
        font-size: 20px;
        color: var(--color-bg-secondary);
        margin-right: 15px;
        cursor: pointer;
        font-weight: bold;
        transition: var(--transition);
    }

    .social-icon:hover {
        color: var(--color-bg-primary);
    }

    @media screen and (max-width: 960px) {
        form {
            box-shadow: none;
            padding: 0px;
        }

        .contact-card {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media screen and (max-width:500px) {

        .contact-card {
            grid-template-columns: 1fr;
        }
    }
</style>