<template>
  <div class="product-view">
    <div class="product-details">
      <img :src="product.imagem" alt="" />
      <div class="product-details__body">
        <div class="product-details__body--description">
          {{ product.descricao }}
        </div>
        <div class="product-details__body--category">
          {{ product.categoria }}
        </div>
        <div class="product-details__body--name">
          {{ product.nome }}
        </div>
        <div class="product-details__body--name">
          {{ product.preco }}
        </div>
      </div>
      <div class="product-details__footer">
        <div class="product-details__footer--buttons">
          <button class="btn__primary">Add to car</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/buttons.scss";
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Inject } from "inversify-props";

import IProductsService from "../services/ProductsService/IProductsService";

import { BrazilianProduct } from "../types/ProductsFromBrazil";
import { EuropeanProduct } from "../types/ProductsFromEurope";

@Component
export default class ProductView extends Vue {
  @Inject() _productsService!: IProductsService;

  public product = {};

  created() {
    this._productsService
      .getOnlyProductFromBrazil(this.$route.params.id)
      .then((res) => (this.product = res));
  }
}
</script>
