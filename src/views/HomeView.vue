<template>
  <div class="home-view">
    <div class="home">
      <div class="home__header">
        <SearchItemsFilter
          :items="allproducts"
          @update:filteredItems="updateFilteredItems"
        />
      </div>
      <div class="home__body">
        <div v-for="item in filteredItems" :key="item.id">
          <ProductCard :product="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.home-view {
  .home {
    &__body {
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }

  @include break-up(map-get($breakpoints, "md")) {
    .home {
      &__body {
        justify-content: space-between;
      }
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
import IFormaterService from "../services/FormaterService/IFormaterService";

@Component({
  components: {
    ProductCard,
    SearchItemsFilter,
  },
})
export default class HomeView extends Vue {
  @Inject() _productsService!: IProductsService;
  @Inject() _formatService!: IFormaterService;

  public productBR: BrazilianProduct[] = [];
  public productUE: EuropeanProduct[] = [];

  public allproducts: Product[] = [];

  public filteredItems: Product[] = [];

  async mounted() {
    await this.getBrazilianProducts();
    await this.getEuropeanProducts();

    this.joinAllProducts();

    if (this.filteredItems.length == 0) this.filteredItems = this.allproducts;
  }

  updateFilteredItems(filteredItems: Product[]) {
    this.filteredItems = filteredItems;
  }

  async joinAllProducts() {
    this.allproducts = this.formatProductUE().concat(this.formatProductBR());
  }

  formatProductBR() {
    return this._formatService.formatProductBR(this.productBR);
  }

  formatProductUE() {
    return this._formatService.formatProductUE(this.productUE);
  }

  async getBrazilianProducts() {
    this.productBR = await this._productsService.getAllProductsFromBrazilian();
  }

  async getEuropeanProducts() {
    this.productUE = await this._productsService.getAllProductsFromEuropean();
  }
}
</script>
