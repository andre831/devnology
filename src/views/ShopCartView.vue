<template>
  <div class="shop-cart">
    <div class="shop-cart__body">
      <div class="shop-cart__body--products">
        <div class="product" v-for="p in product" :key="p.id">
          <CartProduct :item="p" />
        </div>
      </div>

      <div class="shop-cart__body--values">
        <CartResume />
        <CartDelivery />

        <div class="total">
          <button class="btn__primary">Buy $5400</button>
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

import { BrazilianProduct } from "../types/ProductsFromBrazil";
import { EuropeanProduct } from "../types/ProductsFromEurope";

import CartProduct from "@/components/cart/CartProduct.vue";
import CartResume from "@/components/cart/CartResume.vue";
import CartDelivery from "@/components/cart/CartDelivery.vue";

@Component({
  components: {
    CartProduct,
    CartResume,
    CartDelivery,
  },
})
export default class ShopCartView extends Vue {
  @Inject() _productsService!: IProductsService;

  public product: BrazilianProduct[] = [
    {
      categoria: "metal, pedra, lenha",
      departamento: "",
      descricao:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
      id: "",
      imagem: "",
      material: "",
      nome: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it ha",
      preco: "200",
    },
    {
      categoria: "metal, pedra, lenha",
      departamento: "",
      descricao:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
      id: "",
      imagem: "",
      material: "",
      nome: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it ha",
      preco: "200",
    },
    {
      categoria: "metal, pedra, lenha",
      departamento: "",
      descricao:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
      id: "",
      imagem: "",
      material: "",
      nome: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it ha",
      preco: "200",
    },
    {
      categoria: "metal, pedra, lenha",
      departamento: "",
      descricao:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
      id: "",
      imagem: "",
      material: "",
      nome: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it ha",
      preco: "200",
    },
    {
      categoria: "metal, pedra, lenha",
      departamento: "",
      descricao:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
      id: "",
      imagem: "",
      material: "",
      nome: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it ha",
      preco: "200",
    },
  ];

  // BrazilianProduct | EuropeanProduct;
}
</script>
