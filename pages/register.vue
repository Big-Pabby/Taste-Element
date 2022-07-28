<template>
  <div class="SignUp">
    <Alert v-show="alert" :msg="msg" :successAlert="successAlert" :errorAlert="errorAlert" />
    <Loading v-show="loading" />
    <div class="signup-flex">
      <div class="signup-left">
        <div class="signUp-header">
          <NuxtLogo class="signup-logo" />
          <h2>Sign Up</h2>
          <p>Create a free account</p>
          <p class="login">Already have an account? <nuxt-link to="/login" class="link-color">Log In</nuxt-link></p>
        </div>

        <form @submit.prevent="onRegister">
          <div class="input-field">
            <label for="name">Name</label>
            <input type="text" name="name" v-model="inputName" required>
          </div>
          <div class="input-field">
            <label for="email">Email</label>
            <input type="email" name="email" v-model="inputEmail" required>
          </div>
          <div class="input-field">
            <label for="password">Password</label>
            <input type="password" name="password" v-model="inputPassword" required>
          </div>
          <div class="input-field">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" v-model="confirmPassword" required>
          </div>
          <input class="signup-btn" type="submit" value="Sign Up">
          <p class="error-msg">{{msg}}</p>
        </form>
      </div>

      <div class="signup-right">
        <img src="../static/chefmale.png" alt="">
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
    name: 'register',
    data() {
        return {
            inputName: "",
            inputEmail: "",
            inputPassword: "",
            confirmPassword: "",
            msg: "",
            loading: false,
            alert: false,
            successAlert: false,
            errorAlert: false
        }
    },

    methods: {
        async onRegister() {
            if(this.inputPassword === this.confirmPassword) {
                const res = await fetch('http://localhost:3001/register', {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        name: this.inputName,
                        email: this.inputEmail,
                        password: this.inputPassword
                    })
                })
                const user = await res.json();
                console.log(user)
                if(user !== "Registration failed email already exist") {
                  this.msg = "Registration was successful"
                  this.successAlert = true
                  this.loading = true
                  this.alert = true
                  setTimeout(() => {
                      this.alert= false;
                      this.loading = false;
                      this.successAlert = false
                      this.$router.push({ path: '/login'});
                  }, 5000)
                } else {
                  this.msg = "Registration failed email already exist";
                  this.loading = true;
                  this.alert = true;
                  this.errorAlert = true;
                  setTimeout(() => {
                      this.alert= false;
                      this.errorAlert = false;
                      this.loading = false;
                  }, 5000)
                }

            } else {
                this.msg = "Invalid Password"
               setTimeout(() => {
                   this.msg = ""
               }, 5000)
               
            }
        }
    },
}
</script>

<style>
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
    height: 100vh;
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

  .error-msg {
    color: red;
  }

  @media screen and (max-width: 960px) {
    .signup-right {
      display: none;
    }
}
</style>