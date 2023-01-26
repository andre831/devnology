<template>
  <div class="favorites-component">
    <button>
      <i class="fa-solid fa-star"></i>
    </button>
  </div>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Favorites extends Vue {}
</script>
