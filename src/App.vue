<template>
  <div id="app">
    <NavBar />
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

import NavBar from "@/components/layout/NavBar.vue";
import Container from "@/components/layout/Container.vue";

@Component({
  components: {
    NavBar,
    Container,
  },
})
export default class App extends Vue {}
</script>
