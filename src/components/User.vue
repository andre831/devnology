<template>
  <button @click="$router.push('/user')">
    <i class="fa-solid fa-user"></i>
  </button>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class User extends Vue {}
</script>
