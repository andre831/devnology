<template>
  <div class="product-view">
    <div class="product-details">
      <img :src="product.imagem" alt="" />
      <div class="product-details__body">
        <div class="product-details__body--description">
          <p>Description:</p>
          <p>{{ product.descricao }}</p>
        </div>
        <div class="product-details__body--category">
          <p>Category:</p>
          <p>{{ product.categoria }}</p>
        </div>
        <div class="product-details__body--name">
          <p>Name:</p>
          <p>{{ product.nome }}</p>
        </div>
        <div class="product-details__body--price">
          <p>Price:</p>
          <p>${{ product.preco }}</p>
        </div>
      </div>
      <div class="product-details__footer">
        <div class="product-details__footer--buttons">
          <button class="btn__primary">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colors.scss";
@import "@/styles/buttons.scss";

.product-view {
  .product-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    img {
      min-width: 304px;
      width: 100%;
    }

    &__body {
      height: 250px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      margin: 5px 0;
      padding: 5px;
      background: $whiteout;

      &--description {
        font-size: 14px;
      }

      &--category > p:first-child,
      &--description > p:first-child,
      &--name > p:first-child,
      &--price > p:first-child {
        font-size: 12px;
        color: #808080;
      }

      &--price {
        font-weight: 600;
      }
    }

    &__footer {
      &--buttons {
        button {
          width: 100%;
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }
    }
  }
}
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

  public product = {} as BrazilianProduct;

  created() {
    this._productsService
      .getOnlyProductFromBrazil(this.$route.params.id)
      .then((res) => (this.product = res));
  }
}
</script>
