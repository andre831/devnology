<template>
  <div class="cart-product">
    <img :src="item.images[0]" alt="" />
    <div class="cart-product__body">
      <div class="cart-product__body--infos">
        <p>{{ item.name }}</p>
        <p>{{ item.details.material }},</p>
      </div>
      <div class="cart-product__body--price">
        <p>${{ item.price }}</p>

        <div class="amount">
          <button @click="subItem" :disabled="counter <= 1">-</button>
          <p>{{ counter }}</p>
          <button @click="sumItem">+</button>
        </div>
      </div>
      <div class="cart-product__body--delete">
        <button @click="removeFromCart(item)">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/styles/global.scss";

.cart-product {
  width: 220px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    max-width: 300px;
  }

  &__body {
    padding: 5px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    background: $whiteout;

    &--infos {
      width: 100%;
      align-items: center;
      justify-content: space-around;

      p {
        &:first-child {
          font-size: 18px;
          font-weight: 600;
        }
        &:last-child {
          font-size: 12px;
          color: $grey;
        }
      }
    }

    &--price {
      width: 100%;
      display: flex;
      justify-content: space-between;

      p:first-child {
        font-weight: 600;
      }

      .amount {
        height: 40px;
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
          width: 10px;
          height: 50%;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100%;
          color: $white;
          background: $sooty;
        }
      }
    }

    &--delete {
      width: 100%;
      margin-top: 10px;
      display: flex;
      justify-content: end;

      i {
        color: #ff0000;
      }
    }
  }

  @include break-up(map-get($breakpoints, "lg")) {
    width: 100%;
    max-width: 900px;
    flex-direction: row;

    &__body {
      width: 100%;
      min-width: 350px;
      margin: {
        top: 0;
        left: 5px;
      }

      &--price {
        flex-direction: column;
      }

      &--delete {
        button > i {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Inject } from "inversify-props";

import { Product } from "../../types/Product";

import IProductsService from "../../services/ProductsService/IProductsService";

@Component
export default class CartProduct extends Vue {
  @Inject() _productsService!: IProductsService;

  @Prop() public item!: Product;
  @Prop({ default: 1 }) public amount!: number;

  public counter = 1;

  mounted() {
    this.counter = this.amount;
  }

  sumItem() {
    this.counter++;

    this.$store.commit("sumItem", this.item);
  }

  subItem() {
    this.counter--;

    this.$store.commit("subItem", this.item);
  }

  removeFromCart(item: Product) {
    this.$store.commit("removeFromCart", item);
  }
}
</script>
