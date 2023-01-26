<template>
  <div>
    <section>
      <div>
        <User />
        <Cart />
        <Favorites />
      </div>
    </section>

    <h2>LOGO</h2>
    <ul>
      <li>Home</li>
      <li>Products</li>
      <li>My products</li>
      <li>Log in</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>

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
export default class SideMenu extends Vue {}
</script>
