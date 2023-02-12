<template>
  <div class="product-view">
    <div class="product-title">
      <p>Product</p>
      <p>{{ product.name }}</p>
    </div>

    <div class="product-details">
      <div class="details">
        <img :src="product.images[0]" alt="" />

        <div class="details__body">
          <div class="details__body--description">
            <p>Description:</p>
            <p>{{ product.description }}</p>
          </div>
          <div class="details__body--category">
            <p>Category:</p>
            <p>{{ product.details.material }}</p>
          </div>
          <div class="details__body--name">
            <p>Name:</p>
            <p>{{ product.name }}</p>
          </div>
          <div class="details__body--price">
            <p>Price:</p>
            <p>${{ product.price }}</p>
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
      height: 400px;
      overflow-y: auto;

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
            bottom: -25px;
          }
        }
      }
    }
  }

  @include break-up(map-get($breakpoints, "lg")) {
    height: 720px;

    .product-details {
      height: 100%;
      flex-wrap: nowrap;
      flex-direction: row;

      .details {
        height: inherit;
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
import { Component, Prop, Vue } from "vue-property-decorator";
import { Inject } from "inversify-props";

import { Product } from "../types/Product";

import IProductsService from "../services/ProductsService/IProductsService";
import IFormaterService from "../services/FormaterService/IFormaterService";

@Component
export default class ProductDetails extends Vue {
  @Inject() _productsService!: IProductsService;
  @Inject() _formaterService!: IFormaterService;

  @Prop({
    default: {
      id: "",
      name: "",
      price: 0,
      description: "",
      details: {
        adjective: "",
        material: "",
      },
      department: "",
      images: [],
      hasDiscount: false,
      discountValue: 0,
    },
  })
  readonly product!: Product;
}
</script>
