<template>
  <div class="SignUp">
    <div class="signUp-header">
      <NuxtLogo class="signup-logo" />
      <h2>Sign Up</h2>
      <p>Create a free account</p>
      <p class="login">Already have an account? <nuxt-link to="/login">Log In</nuxt-link></p>
    </div>

    <form action="">
      <div class="input-field">
        <label for="name">Name</label>
        <input type="text" name="name" required>
      </div>
      <div class="input-field">
        <label for="email">Email</label>
        <input type="email" name="email" required>
      </div>
      <div class="input-field">
        <label for="password">Password</label>
        <input type="password" name="password" required>
      </div>
      <div class="input-field">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" required>
      </div>
      <input class="signup-btn" type="submit" value="Sign Up">
    </form>
  </div>
</template>

<script>
export default {
    name: 'register',
}
</script>

<style>
  .SignUp {
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
</style>