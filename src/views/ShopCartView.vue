<template>
  <div>
    <CartProduct :item="product" />
  </div>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { Inject } from "inversify-props";

import IProductsService from "../services/ProductsService/IProductsService";

import { BrazilianProduct } from "../types/ProductsFromBrazil";
import { EuropeanProduct } from "../types/ProductsFromEurope";

import CartProduct from "../components/cart/CartProduct.vue";

@Component({
  components: {
    CartProduct,
  },
})
export default class ShopCartView extends Vue {
  @Inject() _productsService!: IProductsService;

  public product = {} as BrazilianProduct | EuropeanProduct;
}
</script>
