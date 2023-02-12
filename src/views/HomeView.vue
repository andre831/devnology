<template>
  <div class="home-view">
    <div class="home">
      <div class="home__header"></div>
      <div class="home__body">
        <div class="home__body--view">
          <div class="view__title">
            <h2>European Products</h2>
          </div>
          <div class="view__body">
            <div v-for="item in formatProductUE().slice(0, 5)" :key="item.id">
              <ProductCard :product="item" />
            </div>
          </div>
          <div class="view__button">
            <button
              @click="$router.push('/product/european')"
              class="btn__primary"
            >
              See all european products
            </button>
          </div>
        </div>

        <div class="home__body--view">
          <div class="view__title">
            <h2>Brazilian Products</h2>
          </div>
          <div class="view__body">
            <div v-for="item in formatProductBR().slice(0, 5)" :key="item.id">
              <ProductCard :product="item" />
            </div>
          </div>
          <div class="view__button">
            <button
              @click="$router.push('/product/brazilian')"
              class="btn__primary"
            >
              See all brazilian products
            </button>
          </div>
        </div>

        <div class="home__body--all">
          <div class="all__title">
            <h2>All Products</h2>
          </div>
          <SearchItemsFilter
            :items="allproducts"
            @update:filteredItems="updateFilteredItems"
          />
          <div v-for="item in filteredItems.slice(0, 60)" :key="item.id">
            <ProductCard :product="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.home-view {
  .home {
    width: 100%;

    &__body {
      width: 100%;

      &--view {
        width: 100%;
        .view {
          &__title {
            margin-bottom: 20px;
            border-bottom: 1px solid $sooty;
          }

          &__body {
            width: 100%;
            max-width: 95vw;
            display: flex;
            justify-content: space-between;
            overflow-x: auto;

            & > div {
              margin-right: 15px;

              &:last-child {
                margin-right: 0;
              }
            }
          }

          &__button {
            margin: 20px 0;
            display: flex;
            justify-content: end;

            button {
              width: 200px;
            }
          }
        }
      }

      &--all {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        & > div {
          display: flex;
        }

        .all {
          &__title {
            width: 100%;
            margin-bottom: 20px;
            border-bottom: 1px solid $sooty;
          }
        }
      }
    }
  }

  @include break-up(map-get($breakpoints, "sm")) {
    .home {
      &__body--all {
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
  @Inject() _formaterService!: IFormaterService;

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
    return this._formaterService.formatProductBR(this.productBR);
  }

  formatProductUE() {
    return this._formaterService.formatProductUE(this.productUE);
  }

  async getBrazilianProducts() {
    this.productBR = await this._productsService.getAllProductsFromBrazilian();
  }

  async getEuropeanProducts() {
    this.productUE = await this._productsService.getAllProductsFromEuropean();
  }
}
</script>
