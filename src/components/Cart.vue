<template>
  <button @click="$router.push('/cart')">
    <i class="fa-solid fa-cart-shopping"></i>
  </button>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Cart extends Vue {}
</script>
