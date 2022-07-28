<template>
  <div class="SignUp">
    <Alert v-show="alert" :msg="msg" :successAlert="successAlert" :errorAlert="errorAlert" />
    <Loading v-show="loading" />
    <div class="signup-flex">
      <div class="signup-right">
        <img src="../static/chef3-removebg-preview.png" alt="">
      </div>
      <div class="signup-left">
        <div class="signUp-header">
          <NuxtLogo class="signup-logo" />
          <h2>Login</h2>
          <p>Welcome Back</p>
          <p class="login">Don't have an account? <nuxt-link to="/register" class="link-color">Sign Up</nuxt-link></p>
        </div>

        <form @submit.prevent="onLogin">
          <div class="input-field">
            <label for="email">Email</label>
            <input type="email" name="email" v-model="email" required>
          </div>
          <div class="input-field">
            <label for="password">Password</label>
            <input type="password" name="password" v-model="password" required>
          </div>
          <input class="signup-btn" type="submit" value="Login">
        </form>
      </div>
    </div>
    
  </div>
</template>

<script>
import { userData } from '~/store/userData';

export default {
    name: 'login',

    data() {
        return {
            email: "",
            password: "",
            msg: "",
            loading: false,
            alert: false,
            successAlert: false,
            errorAlert: false
        }
    },

    methods: {
        async onLogin() {
            const res = await fetch('http://localhost:3001/login', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.email,
                    password: this.password
                })
            });

            const user = await res.json();
            if(user === "Invalid Email or Password" ) {
              this.msg = "Invalid Email or Password";
              this.errorAlert = true
              this.loading = true;
              this.alert = true;
              setTimeout(() => {
                  this.alert= false;
                  this.errorAlert = false;
                  this.loading = false;
              }, 5000)
            } else {
              this.msg = "Login was successful"
              this.loading = true
              this.successAlert = true
              this.alert = true
              setTimeout(() => {
                  this.alert= false;
                  this.successAlert= false;
                  this.loading = false;
                  userData().logUser(user);
                  this.$router.push({ path: '/home'});
              }, 5000)
            }
        }
    }
}
</script>

<style scoped>
  .SignUp {
    height: 100vh;
    background: #fff;
    overflow: hidden;
  }

  .signup-flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
  }

  .signup-right {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-size: 24px;
  }

  .login {
    font-weight: bold;
  }

  .signUp-header {
    text-align: center;
    padding-top: 30px;
  }

  .signup-logo {
    margin-bottom: 30px;
  }

  form {
    text-align: center;
  }

  .input-field label {
    display: block;
    margin: 10px 0;
    font-size: 15px;
    font-weight: bold;
    color: var(--color-primary);
  }

  input {
    width: 300px;
    border-radius: 10px;
    padding: 10px 15px;
    background: #f4f4f4;
    border: none;
    outline-color: var(--color-bg-primary);
  }

  .signup-btn {
    margin-top: 20px;
    background: var(--color-bg-secondary);
    border: none;
    color: #fff;
    transition: var(--transition);
    font-weight: bold;
    font-size: 15px;
  }

  .signup-btn:hover {
    background: transparent;
    border: 1px solid var(--color-bg-secondary);
    color: var(--color-primary);
  }

  @media screen and (max-width: 960px) {
    .signup-right {
      display: none;
    }
}
</style>