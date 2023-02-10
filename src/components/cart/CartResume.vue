<template>
  <div class="cart-resume">
    <div class="cart-resume__header">
      <h2>Resume</h2>
    </div>
    <div class="cart-resume__body">
      <div
        class="cart-resume__body--items"
        v-for="item in resumeItems"
        :key="item.product.id"
      >
        <div class="item">
          <p>{{ item.product.name }}</p>
          <p>${{ item.product.price }}</p>
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
  public resumeItems: { product: Product; amount: number }[] = [];

  mounted() {
    this.resumeItems = this.$store.getters.cart;

    this.sumTotal();
  }

  sumTotal() {
    let total = 0;

    this.resumeItems.forEach((item) => {
      let totalItemsValue = item.product.price;

      if (item.product.hasDiscount) {
        const discount = item.product.discountValue * 100;

        totalItemsValue = totalItemsValue - (totalItemsValue * discount) / 100;
      }

      total += totalItemsValue * item.amount;

      total = Math.round(total);
    });

    this.$store.commit("setTotalItems", total);

    return total;
  }
}
</script>
