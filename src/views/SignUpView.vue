<template>
  <div class="sign-up">
    <section class="sign-up__header">
      <h2>Register</h2>
    </section>
    <form class="sign-up__body">
      <div class="sign-up__body--fields">
        <label for="name-field">Name:</label>
        <input
          v-model="signUpInfos.name"
          type="name"
          id="name-field"
          placeholder="Type your name"
        />

        <label for="last-name-field">Last name:</label>
        <input
          v-model="signUpInfos.last_name"
          type="last-name"
          id="last-name-field"
          placeholder="Type your last name"
        />

        <label for="email-field">E-mail:</label>
        <input
          v-model="signUpInfos.email"
          type="email"
          id="email-field"
          placeholder="Type your e-mail"
        />

        <label for="password-field">Password:</label>
        <input
          v-model="signUpInfos.password"
          type="password"
          id="password-field"
          placeholder="Type your password"
        />
      </div>

      <div class="sign-up__body--buttons">
        <button @click="postNewUser" class="btn__primary" type="submit">
          CONFIRM
        </button>
      </div>
    </form>
    <section class="sign-up__footer">
      <div class="sign-up__footer--back">
        <router-link to="/login">Return to login</router-link>
      </div>
      <div class="sign-up__footer--home">
        <router-link to="/">Go to home</router-link>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/buttons.scss";
@import "@/styles/colors.scss";

.sign-up {
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
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      input {
        height: 50px;
        margin-bottom: 10px;
        padding: 0 5px;
      }
    }

    &--fields {
      height: 390px;
    }

    &--buttons {
      height: 80px;
    }
  }

  &__footer {
    margin-top: 20px;

    &--home,
    &--back {
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
          color: $sooty;
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

@Component
export default class SignUpView extends Vue {
  @Inject() _userService!: IUserService;

  public signUpInfos = {
    name: "",
    last_name: "",
    email: "",
    password: "",
  };

  async postNewUser() {
    const newUser = await this._userService
      .signUp(this.signUpInfos)
      .then((res) => this.$store.commit("setUserToken", res.data.token));

    return newUser;
  }
}
</script>
