<template>
  <div class="cart-resume">
    <div class="cart-resume__header">
      <h2>Resume</h2>
    </div>
    <div class="cart-resume__body">
      <div
        class="cart-resume__body--items"
        v-for="item in this.$store.getters.cart"
        :key="item.items.product.id"
      >
        <div class="item">
          <p>{{ item.items.product.name }}</p>
          <p>${{ item.items.product.price }}</p>
        </div>
      </div>
    </div>
    <div class="cart-resume__footer">
      <div class="cart-resume__footer--resume">
        <h3>Resume items</h3>
        <p>${{ sumTotal() }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.cart-resume {
  height: 395px;
  padding: 5px;
  margin-bottom: 10px;
  background: $whiteout;

  &__header {
    border-bottom: 1px solid $sooty;
  }

  &__body {
    height: 250px;
    overflow: auto;
    &--items {
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          text-transform: capitalize;

          &:last-child {
            font-weight: 600;
          }
        }
      }
    }
  }

  &__footer {
    border-top: 1px solid $paper-white;
    margin-top: 20px;

    &--resume {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        color: $grey;
      }
      p {
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Product } from "../../types/Product";

@Component
export default class ResumeCart extends Vue {
  sumTotal() {
    let total = 0;

    this.$store.getters.cart.forEach(
      (item: {
        userId: number;
        items: { product: Product; amount: 1; selected: true };
      }) => {
        let totalItemsValue = item.items.product.price;

        if (item.items.product.hasDiscount) {
          const discount = item.items.product.discountValue * 100;

          totalItemsValue =
            totalItemsValue - (totalItemsValue * discount) / 100;
        }

        total += totalItemsValue * item.items.amount;

        total = Math.round(total);
      }
    );

    this.$store.commit("setTotalItems", total);

    return total;
  }
}
</script>
