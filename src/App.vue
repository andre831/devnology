<template>
  <div id="app">
    <SideMenu />
    <Container>
      <template v-slot:body>
        <router-view />
      </template>
    </Container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";

import SideMenu from "@/components/layout/SideMenu.vue";
import Container from "./components/layout/Container.vue";

@Component({
  components: {
    SideMenu,
    Container,
  },
})
export default class App extends Vue {}
</script>
