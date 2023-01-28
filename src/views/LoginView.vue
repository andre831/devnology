<template>
  <div class="login">
    <section class="login__header">
      <h2>My Account</h2>
    </section>
    <section class="login__body">
      <div class="login__body--fields">
        <label for="email-field">E-mail:</label>
        <input type="email" id="email-field" placeholder="Type your e-mail" />

        <label for="password-field">Password:</label>
        <input
          type="password"
          id="password-field"
          placeholder="Type your password"
        />
      </div>

      <div class="login__body--buttons">
        <button type="submit">LOGIN</button>
        <button @click="$router.push('/signup')">SIGN UP</button>
      </div>
    </section>
    <section class="login__footer">
      <div class="login__footer--forget-pass">
        <router-link to="/forget">Forget your password?</router-link>
      </div>
      <div class="login__footer--home">
        <router-link to="/">Go to home</router-link>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.login {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;

  &__body {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    &--fields,
    &--buttons {
      width: 100%;
      min-width: 256px;
      max-width: 512px;
      height: 156px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      button {
        height: 50px;
        font-weight: 600;

        &:nth-child(1) {
          color: $white;
          background: $sooty;
        }
        &:nth-child(2) {
          color: $sooty;
          border: 2px solid $sooty;
        }
      }

      input {
        height: 68px;
        margin-bottom: 10px;
        padding: 0 5px;
      }
    }
  }

  &__footer {
    margin-top: 20px;

    &--forget-pass,
    &--home {
      display: flex;
      flex-direction: column;
      align-items: center;

      a {
        color: $obscure-orchid;
        font-weight: 600;
        text-decoration: none;
        margin-bottom: 10px;
        transition: 0.5s;

        &:hover {
          color: #141414;
        }
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoginView extends Vue {}
</script>
