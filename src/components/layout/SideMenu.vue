<template>
  <div :class="'container ' + (showSideMenu ? '' : 'hiddenMenu')">
    <div class="side-menu">
      <section class="side-menu__logo">
        <h2>LOGO</h2>
      </section>

      <div class="side-menu__body">
        <section class="side-menu__body--pages">
          <ul>
            <li>
              <router-link to="/"> Home </router-link>
            </li>
            <li>
              <router-link to="/cart">
                My products
                <span class="counter">{{
                  this.$store.getters.cart.length
                }}</span>
              </router-link>
            </li>
            <li>
              <router-link v-if="!$store.getters.auth" to="/login">
                Log in
              </router-link>
              <span @click="logout" v-if="$store.getters.auth">Leave</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.container {
  width: 38%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 65px;
  background-color: $sooty;
  transition: 0.7s;
  overflow-y: auto;
  z-index: 1000;

  .side-menu {
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    &__header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      &--paths {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          color: $white;
          font-size: 22px;
        }
      }
    }

    &__logo {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 190px;
      }
    }

    &__body {
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &--search {
        display: flex;
        justify-content: center;
      }

      &--pages {
        height: 280px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        ul {
          height: 100%;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          list-style: none;

          li,
          a {
            height: 50px;
            display: flex;
            align-items: center;
            color: $white;
            justify-content: space-between;
            border-bottom: 1px solid $white;
            text-decoration: none;
            text-transform: uppercase;

            a {
              border: none;
            }

            &:nth-child(2) {
              span {
                background: $obscure-orchid;
                padding: 5px 10px;
                border-radius: 100%;
              }
            }
          }
        }
      }

      &--back {
        display: flex;
        justify-content: center;

        button {
          padding: 10px 30px;

          i {
            color: $white;
          }
        }
      }
    }
  }

  @include break-up(map-get($breakpoints, "md")) {
    width: 20%;
  }

  @include break-up(map-get($breakpoints, "lg")) {
    width: 15%;
  }
}

.hiddenMenu {
  transform: translateX(-100%);
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SideMenu extends Vue {
  @Prop({ default: false }) showSideMenu!: boolean;

  logout() {
    const noLogged = {
      data: {
        auth: false,
        token: "",
        user: {
          name: "",
          userId: undefined,
        },
      },
    };

    this.$store.commit("setUser", noLogged);
  }
}
</script>
