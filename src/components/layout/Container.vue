<template>
  <main>
    <slot name="body" />
  </main>
</template>

<style lang="scss" scoped>
main {
  width: 80%;
  margin: auto;
  margin-top: 12vh;
  display: flex;
  justify-content: center;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Container extends Vue {}
</script>
