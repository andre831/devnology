<template>
  <div class="shop-cart">
    <div class="shop-cart__body">
      <div class="shop-cart__body--products">
        <div class="product" v-for="item in cart" :key="item.product.id">
          <CartProduct :item="item.product" :selected="item.selected" />
        </div>
      </div>

      <div class="shop-cart__body--values">
        <CartResume />
        <CartDelivery />

        <div class="total">
          <button class="btn__primary" @click="$router.push('/checkout')">
            Buy ${{ sumAllItems() }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.shop-cart {
  width: 100%;
  display: flex;
  flex-direction: column;

  &__body {
    display: flex;
    flex-direction: column;

    &--products {
      display: flex;
      overflow-x: auto;
      margin-bottom: 10px;

      .product {
        margin-right: 15px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
    &--values {
      .total {
        margin-top: 10px;
        button {
          width: 100%;
        }
      }
    }
  }

  @include break-up(map-get($breakpoints, "lg")) {
    &__body {
      flex-direction: row;

      &--products {
        height: 800px;
        width: 100%;
        flex-direction: column;

        .product {
          margin-bottom: 15px;
        }
      }
      &--values {
        margin-left: 15px;
        width: 100%;
        max-width: 400px;
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { Inject } from "inversify-props";

import IProductsService from "../services/ProductsService/IProductsService";

import CartProduct from "@/components/cart/CartProduct.vue";
import CartResume from "@/components/cart/CartResume.vue";
import CartDelivery from "@/components/cart/CartDelivery.vue";
import { Product } from "../types/Product";

@Component({
  components: {
    CartProduct,
    CartResume,
    CartDelivery,
  },
})
export default class ShopCartView extends Vue {
  @Inject() _productsService!: IProductsService;

  public cart: { product: Product; selected: boolean }[] = [];

  mounted() {
    this.cart = this.$store.getters.cart;

    console.log(this.$store.getters.totalItems);
  }

  sumAllItems() {
    let sum = this.$store.getters.totalItems + this.$store.getters.delivery;

    this.$store.commit("setTotalValues", sum);

    return sum;
  }
}
</script>
