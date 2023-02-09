<template>
  <div class="home-view">
    <!-- <div class="home-view__body">
      <div
        v-for="itemBR in productBR.slice(0, 21)"
        :key="itemBR.id"
        class="home-view__body--BR"
      >
        <ProductCard :product="itemBR" />
      </div>

      <div
        v-for="itemBR in productBR.slice(0, 21)"
        :key="itemBR.id"
        class="home-view__body--EU"
      >
        <ProductCard :product="itemBR" />
      </div>
    </div> -->

    <SearchItemsFilter
      :items="allproducts"
      @update:filteredItems="updateFilteredItems"
    />
    <div
      v-for="item in filteredItems"
      :key="item.id"
      class="home-view__body--BR"
    >
      <ProductCard :product="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-view {
  &__body {
    &--BR {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Inject } from "inversify-props";

import ProductCard from "@/components/ProductCard.vue";
import SearchItemsFilter from "@/components/SearchItemsFilter.vue";

import { Product } from "../types/Product";
import { EuropeanProduct } from "../types/ProductsFromEurope";
import { BrazilianProduct } from "../types/ProductsFromBrazil";

import IProductsService from "../services/ProductsService/IProductsService";
import axios from "axios";

@Component({
  components: {
    ProductCard,
    SearchItemsFilter,
  },
})
export default class HomeView extends Vue {
  @Inject() _productsService!: IProductsService;

  public productBR: BrazilianProduct[] = [];
  public productUE: EuropeanProduct[] = [];

  private allproducts: Product[] = [];

  private filteredItems: Product[] = [];

  async mounted() {
    await this.getBrazilianProducts();
    await this.getEuropeanProducts();

    this.joinAllProducts();

    if (this.filteredItems.length == 0) this.filteredItems = this.allproducts;
  }

  private updateFilteredItems(filteredItems: any[]) {
    this.filteredItems = filteredItems;
  }

  updated() {
    console.log(this.$store.getters.cart);
  }

  async joinAllProducts() {
    this.allproducts = this.formatProductUE().concat(this.formatProductBR());
  }

  formatProductBR() {
    const formatedProduct: Product[] = this.productBR.map((product) => ({
      id: product.id + 1,
      name: product.nome,
      price: +product.preco,
      description: product.descricao,
      details: {
        adjective: "",
        material: product.material,
      },
      department: product.departamento,
      images: [product.imagem],
      hasDiscount: false,
      discountValue: 0,
    }));

    return formatedProduct;
  }

  formatProductUE() {
    const formatedProduct: Product[] = this.productUE.map((product) => ({
      id: product.id + 2,
      name: product.name,
      price: +product.price,
      description: product.description,
      details: product.details,
      department: "",
      images: product.gallery,
      hasDiscount: product.hasDiscount,
      discountValue: +product.discountValue,
    }));

    return formatedProduct;
  }

  async getBrazilianProducts() {
    this.productBR = await this._productsService.getAllProductsFromBrazilian();
  }

  async getEuropeanProducts() {
    this.productUE = await this._productsService.getAllProductsFromEuropean();
  }
}
</script>
