<template>
  <div>
    <div v-for="itemBR in productBR" :key="itemBR.id">
      <ProductCard :product="itemBR" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Inject } from "inversify-props";

import ProductCard from "@/components/ProductCard.vue";

import { EuropeanProduct } from "../types/ProductsFromEurope";
import { BrazilianProduct } from "../types/ProductsFromBrazil";

import IProductsService from "../services/ProductsService/IProductsService";

@Component({
  components: {
    ProductCard,
  },
})
export default class HomeView extends Vue {
  @Inject() _productsService!: IProductsService;

  public productBR: BrazilianProduct[] = [];
  public productUE: EuropeanProduct[] = [];

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
