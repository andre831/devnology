<template>
  <div class="navbar-container">
    <div class="navbar">
      <div class="navbar__body">
        <div class="navbar__body--logo">
          <h2>LOGO</h2>
        </div>
        <button class="navbar__body--close" @closeSideMenu="handleClose(true)">
          <span></span>
          <span></span>
        </button>
        <div class="navbar__body--paths">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/products">Products</router-link></li>
            <li><router-link to="/cart">My products</router-link></li>
            <li><router-link to="/login">Log in</router-link></li>
          </ul>
        </div>

        <div class="navbar__body--options">
          <router-link to="/">
            <i class="fa-solid fa-cart-shopping"></i>
          </router-link>
          <router-link to="/login">
            <i class="fa-solid fa-user"></i
          ></router-link>
        </div>
      </div>
    </div>

    <SideMenu />
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
          width: 30px;
          border: 2px solid $white;

          &:last-child {
            width: 20px;
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
          justify-content: space-around;

          li,
          a {
            color: $white;
            padding: 10px;
            font-size: 18px;
            font-weight: 500;
            list-style: none;
            text-decoration: none;
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
export default class NavBar extends Vue {}
</script>
