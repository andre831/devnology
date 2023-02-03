<template>
  <div class="product-view">
    <div class="product-title">
      <p>Product</p>
      <p>{{ product.nome }}</p>
    </div>

    <div class="product-details">
      <div class="details">
        <img :src="product.imagem" alt="" />

        <div class="details__body">
          <div class="details__body--description">
            <p>Description:</p>
            <p>{{ product.descricao }}</p>
          </div>
          <div class="details__body--category">
            <p>Category:</p>
            <p>{{ product.categoria }}</p>
          </div>
          <div class="details__body--name">
            <p>Name:</p>
            <p>{{ product.nome }}</p>
          </div>
          <div class="details__body--price">
            <p>Price:</p>
            <p>${{ product.preco }}</p>
          </div>
          <div class="details__body--buttons">
            <button class="btn__primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.product-view {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .product-title {
    width: 100%;
    margin-bottom: 22px;
    border-bottom: 1px solid $sooty;

    p {
      &:first-child {
        font-size: 12px;
        color: $grey;
        text-transform: capitalize;
      }
      &:last-child {
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
  }

  .product-details {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .details {
      img {
        min-width: 304px;
        width: 100%;
      }

      &__body {
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
          color: $grey;
        }

        &--name > p {
          text-transform: capitalize;
        }

        &--price {
          font-weight: 600;
        }

        &--buttons {
          width: 100%;
          display: flex;
          justify-content: center;

          button {
            width: 80%;
            max-width: 637px;
            position: fixed;
            bottom: 20px;
          }
        }
      }
    }
  }

  @include break-up(map-get($breakpoints, "lg")) {
    height: 630px;

    .product-details {
      height: 100%;
      flex-wrap: nowrap;
      flex-direction: row;

      .details {
        display: flex;

        &__body {
          margin: {
            top: 0;
            bottom: 0;
            left: 5px;
          }

          &--buttons {
            button {
              position: inherit;
            }
          }
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

  public product = {} as BrazilianProduct | EuropeanProduct;

  created() {
    console.log(this.$route.params.origin);

    if (this.$route.params.origin == "brazilian") {
      this._productsService
        .getOnlyProductFromBrazil(this.$route.params.id)
        .then((res) => (this.product = res));
    } else if (this.$route.params.origin == "european") {
      this._productsService
        .getOnlyProductFromEurope(this.$route.params.id)
        .then((res) => (this.product = res));
    }
  }
}
</script>
