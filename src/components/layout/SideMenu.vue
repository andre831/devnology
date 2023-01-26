<template>
  <div :class="'container ' + (!showSideMenu ? '' : 'hiddenMenu')">
    <div class="side-menu">
      <section class="side-menu__header">
        <div class="side-menu__header--paths">
          <User />
          <Cart />
          <Favorites />
        </div>
      </section>

      <section class="side-menu__logo">
        <img src="../../assets/logo.png" alt="" />
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
      </div>

      <div class="side-menu__footer">
        <button @click="showSideMenu = !showSideMenu">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 65px;
  background-color: #151418;
  transition: 1s;

  .side-menu {
    height: 90%;
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
      height: 350px;
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
            color: #fff;
            justify-content: space-between;
            border-bottom: 1px solid #fff;
            text-transform: uppercase;
          }
        }
      }
    }

    &__footer {
      display: flex;
      justify-content: center;

      i {
        color: #fff;
        padding: 5px 7px;
        border: 1px solid #fff;
        border-radius: 50%;
      }
    }
  }
}

.hiddenMenu {
  transform: translateX(-100%);
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Cart from "@/components/layout/Cart.vue";
import Favorites from "@/components/layout/Favorites.vue";
import User from "@/components/layout/User.vue";

@Component({
  components: {
    Cart,
    Favorites,
    User,
  },
})
export default class SideMenu extends Vue {
  private showSideMenu = false;
}
</script>
