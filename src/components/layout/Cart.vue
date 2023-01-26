<template>
  <div class="cart-component">
    <button @click="$router.push('/checkout')">
      <i class="fa-solid fa-cart-shopping"></i>
    </button>
  </div>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Cart extends Vue {}
</script>
