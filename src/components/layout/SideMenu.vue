<template>
  <div :class="'container ' + (showSideMenu ? '' : 'hiddenMenu')">
    <div class="side-menu">
      <section class="side-menu__header">
        <div class="side-menu__header--paths">
          <User />
          <Cart />
          <Favorites />
        </div>
      </section>

      <section class="side-menu__logo">
        <h2>LOGO</h2>
      </section>

      <div class="side-menu__body">
        <section class="side-menu__body--search">
          <input type="text" />
        </section>

        <section class="side-menu__body--pages">
          <ul>
            <li>Home</li>
            <li>
              Products
              <i class="fa-solid fa-chevron-down"></i>
            </li>
            <li>
              My products
              <i class="fa-solid fa-chevron-down"></i>
            </li>
            <li>Log in</li>
          </ul>
        </section>

        <section class="side-menu__body--back">
          <button @click="showSideMenu = !showSideMenu">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.container {
  width: 50%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 65px;
  background-color: $sooty;
  transition: 1s;
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

          li {
            height: 50px;
            display: flex;
            align-items: center;
            color: $white;
            justify-content: space-between;
            border-bottom: 1px solid $white;
            text-transform: uppercase;
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
import { Component, Vue } from "vue-property-decorator";

import Cart from "@/components/Cart.vue";
import Favorites from "@/components/Favorites.vue";
import User from "@/components/User.vue";

@Component({
  components: {
    Cart,
    Favorites,
    User,
  },
})
export default class SideMenu extends Vue {
  public showSideMenu = false;
}
</script>
