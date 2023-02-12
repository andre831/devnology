<template>
  <div class="navbar-container">
    <div class="navbar">
      <div class="navbar__body">
        <div class="navbar__body--logo">
          <h2>LOGO</h2>
        </div>
        <button class="navbar__body--close" @click="show">
          <span :class="open ? 'active' : ''"></span>
          <span :class="open ? 'active' : ''"></span>
        </button>
        <div class="navbar__body--paths">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li>
              <router-link :to="$store.getters.auth != '' ? '/cart' : '/login'">
                My products

                <span class="counter">{{
                  this.$store.getters.cart.length
                }}</span>
              </router-link>
            </li>
            <li>
              <router-link v-if="!$store.getters.auth" to="/login"
                >Log in</router-link
              >
              <span v-if="$store.getters.auth">
                Hello, {{ $store.getters.name }} |
              </span>

              <span @click="logout" v-if="$store.getters.auth">Leave</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <SideMenu :showSideMenu="open" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  .navbar {
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $sooty;

    &__body {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &--close {
        height: 12px;
        display: flex;
        align-items: end;
        flex-direction: column;
        justify-content: space-between;

        span {
          width: 20px;
          border: 2px solid $white;
          transition: 0.5s;
        }
        .active {
          &:first-child {
            transform: rotate(-45deg) translate(-3px, 6px);
          }
          &:last-child {
            transform: rotate(45deg) translate(0, -3px);
          }
        }
      }
      &--paths {
        display: none;
        width: 100%;
        justify-content: end;
        ul {
          width: 60%;
          display: flex;
          align-items: center;
          justify-content: space-around;

          a,
          li,
          button {
            color: $white;
            padding: 10px;
            font-size: 18px;
            font-weight: 500;
            list-style: none;
            text-decoration: none;
            cursor: pointer;

            a:first-child,
            li:first-child {
              span {
                background: $obscure-orchid;
                padding: 5px 10px;
                border-radius: 100%;
              }
            }
          }
        }
      }

      &--options {
        width: 120px;
        display: none;
        justify-content: space-around;
        margin-left: 50px;

        a {
          color: $white;
          padding: 10px;
          font-size: 18px;
        }
      }
    }
  }

  @include break-up(map-get($breakpoints, "lg")) {
    .navbar {
      &__body {
        &--close {
          display: none;
        }

        &--paths,
        &--options {
          display: flex;
        }
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideMenu from "@/components/layout/SideMenu.vue";

@Component({
  components: {
    SideMenu,
  },
})
export default class NavBar extends Vue {
  public open = false;

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
    location.reload();
  }

  show() {
    this.open = !this.open;
  }
}
</script>
