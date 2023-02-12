<template>
  <div class="product-card">
    <img :src="product.images[0]" alt="Item Image" />
    <div class="product-card__body">
      <div class="product-card__body--class">
        <small>{{ product.details.material }}</small>
        <button>
          <i class="fa-solid fa-star"></i>
        </button>
      </div>
      <div class="product-card__body--title">
        <p>{{ product.name }}</p>
      </div>
      <div class="product-card__body--buttons">
        <button
          class="btn__primary"
          v-if="!verifyCart(product)"
          @click="addToCart(product)"
        >
          ${{ product.price }}
          {{ product.hasDiscount ? " - " + discount + "%" : null }}
        </button>
        <button
          class="btn__primary"
          v-if="verifyCart(product)"
          @click="removeFromCart(product)"
        >
          Remove from cart
        </button>

        <button class="btn__secondary" v-if="cardType == 'normal'">
          See Details
        </button>
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

import { Product } from "../types/Product";

@Component
export default class ProductCard extends Vue {
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

  @Prop({ default: false }) readonly selected!: boolean;
  @Prop({ default: "normal" }) readonly type!: string;

  public discount = 0;
  public cardType = "";

  created() {
    this.discount = this.transformToPercentage();
  }

  setCartType() {
    switch (this.type) {
      case "BRAZILIAN":
        this.cardType = "br";
        break;
      case "EUROPEAN":
        this.cardType = "ue";
        break;

      case "normal":
        this.cardType = "normal";
        break;
      default:
        this.cardType = "normal";
        break;
    }
  }

  verifyCart(item: Product) {
    return this.$store.getters.cart.some((element: { product: Product }) => {
      return element.product.id === item.id;
    });
  }

  transformToPercentage() {
    return Number((this.product?.discountValue * 100).toFixed(2));
  }

  addToCart(item: Product) {
    this.$store.commit("addToCart", item);
  }

  removeFromCart(item: Product) {
    this.$store.commit("removeFromCart", item);
  }
}
</script>
