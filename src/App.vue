<template>
  <div id="app">
    <SideMenu />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";

import SideMenu from "@/components/layout/SideMenu.vue";

@Component({
  components: {
    SideMenu,
  },
})
export default class App extends Vue {}
</script>
