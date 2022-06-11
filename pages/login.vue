<template>
  <div class="SignUp">
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

        <form action="">
          <div class="input-field">
            <label for="email">Email</label>
            <input type="email" name="email" required>
          </div>
          <div class="input-field">
            <label for="password">Password</label>
            <input type="password" name="password" required>
          </div>
          <input class="signup-btn" type="submit" value="Login">
        </form>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
    name: 'login',
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
    padding: 10px 5px;
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