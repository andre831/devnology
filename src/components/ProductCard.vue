<template>
  <div class="product-card">
    <img :src="product.imagem" alt="" />
    <div class="product-card__body">
      <div class="product-card__body--class">
        <small>{{ product.departamento }}</small>
        <button>
          <i class="fa-solid fa-star"></i>
        </button>
      </div>
      <div class="product-card__body--title">
        <p>{{ product.nome }}</p>
      </div>
      <div class="product-card__body--buttons">
        <button class="btn__primary">See Details</button>
        <button class="btn__secondary">${{ product.preco }}</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/buttons.scss";
@import "@/styles/colors.scss";

.product-card {
  width: 280px;
  display: flex;
  flex-direction: column;

  &__see-details {
    width: 280px;
    position: absolute;
    top: 200px;
  }

  &__body {
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: $whiteout;

    &--class {
      display: flex;
      justify-content: space-between;
    }

    &--title {
      p {
        text-transform: capitalize;
      }
    }

    &--buttons {
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BrazilianProduct } from "../types/ProductsFromBrazil";

@Component
export default class ProductCard extends Vue {
  @Prop() public product: BrazilianProduct = {
    categoria: "",
    departamento: "",
    descricao: "",
    id: "",
    imagem: "",
    material: "",
    nome: "",
    preco: "",
  };

  mounted() {
    console.log("asdadasd ");
  }
}
</script>
