<template>
  <div class="products-view">
    <div class="products">
      <div class="products__body">
        <div class="products__body--title">
          <h2>
            All Products {{ $route.params.origin == "brazilian" ? "BR" : "UE" }}
          </h2>
        </div>
        <SearchItemsFilter
          :items="products"
          @update:filteredItems="updateFilteredItems"
        />
        <div v-for="item in filteredItems" :key="item.id">
          <ProductCard :product="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.products-view {
  .products {
    &__body {
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      &--title {
        width: 100%;
        margin-bottom: 20px;

        border-bottom: 1px solid $sooty;
      }

      & > div {
        display: flex;
      }
    }
  }

  @include break-up(map-get($breakpoints, "sm")) {
    .products {
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

import ProductCard from "../components/ProductCard.vue";
import SearchItemsFilter from "../components/SearchItemsFilter.vue";

import { Product } from "../types/Product";

import IProductsService from "../services/ProductsService/IProductsService";
import IFormaterService from "../services/FormaterService/IFormaterService";

@Component({
  components: {
    ProductCard,
    SearchItemsFilter,
  },
})
export default class ProductsFromOrigimView extends Vue {
  @Inject() _productsService!: IProductsService;
  @Inject() _formaterService!: IFormaterService;

  public products: Product[] = [];
  public filteredItems: Product[] = [];

  async mounted() {
    await this.selectOrigin();

    if (this.filteredItems.length == 0) this.filteredItems = this.products;
  }

  updateFilteredItems(filteredItems: Product[]) {
    this.filteredItems = filteredItems;
  }

  async selectOrigin() {
    if (this.$route.params.origin == "brazilian") {
      await this.getProductsBR();
    } else if (this.$route.params.origin == "european") {
      await this.getProductsUE();
    }
  }

  async getProductsBR() {
    return await this._productsService
      .getAllProductsFromBrazilian()
      .then(
        (res) => (this.products = this._formaterService.formatProductBR(res))
      );
  }

  async getProductsUE() {
    await this._productsService
      .getAllProductsFromEuropean()
      .then(
        (res) => (this.products = this._formaterService.formatProductUE(res))
      );
  }
}
</script>
