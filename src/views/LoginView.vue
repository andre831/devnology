<template>
  <div class="login">
    <section class="login__header">
      <h2>My Account</h2>
    </section>
    <section class="login__body">
      <div class="login__body--fields">
        <label for="email-field">E-mail:</label>
        <input
          v-model="loginInfos.email"
          type="email"
          id="email-field"
          placeholder="Type your e-mail"
        />

        <label for="password-field">Password:</label>
        <input
          v-model="loginInfos.password"
          type="password"
          id="password-field"
          maxlength="15"
          placeholder="Type your password"
        />
      </div>

      <div class="login__body--buttons">
        <button @click="postLogin" class="btn__primary" type="submit">
          LOGIN
        </button>
        <button class="btn__secondary" @click="$router.push('/signup')">
          SIGN UP
        </button>
      </div>
    </section>
    <section class="login__footer">
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
import { Inject } from "inversify-props";

import IUserService from "../services/UserService/IUserService";
import IValidateService from "../services/ValidateService/IValidateService";

@Component
export default class LoginView extends Vue {
  @Inject() _userService!: IUserService;
  @Inject() _validateService!: IValidateService;

  public enableLogin = true;

  public loginInfos = {
    email: "",
    password: "",
  };

  update() {
    this.validField();
  }

  private validField() {
    const verifyEmail = this._validateService.checkEmailField(
      this.loginInfos.email,
      "#email-field"
    );

    const verifyPasswd = this._validateService.checkPasswordField(
      this.loginInfos.password,
      "#password-field"
    );

    if (!verifyEmail && !verifyPasswd) this.enableLogin = true;
  }

  async postLogin() {
    const newUser = await this._userService
      .login(this.loginInfos)
      .then((res) => this.$store.commit("setUser", res))
      .then(() => this.$router.push("/"));

    return newUser;
  }
}
</script>
