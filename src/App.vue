<template>
  <div id="app">
    <SideMenu />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import SideMenu from "@/components/layout/SideMenu.vue";

@Component({
  components: {
    SideMenu,
  },
})
export default class App extends Vue {}
</script>
