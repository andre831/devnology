<template>
  <div>
    <div v-for="brazil in productBR" :key="brazil.id + 1">
      <h2>{{ brazil.nome }}</h2>
      <img :src="brazil.imagem" alt="" />
    </div>

    <div v-for="europe in productUE" :key="europe.id - 2">
      <h2>{{ europe.name }}</h2>
      <img :src="europe.gallery" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  color: red;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Inject } from "inversify-props";

import IProductsService from "../services/ProductsService/IProductsService";

@Component
export default class HomeView extends Vue {
  @Inject() _productsService!: IProductsService;

  public productBR = [] as any;
  public productUE = [] as any;

  mounted() {
    this.getBrazilianProducts();
    this.getEuropeanProducts();
  }

  async getBrazilianProducts() {
    this.productBR = await this._productsService.getAllProductsFromBrazilian();

    console.log(this.productBR);
  }

  async getEuropeanProducts() {
    this.productUE = await this._productsService.getAllProductsFromEuropean();
  }
}
</script>
