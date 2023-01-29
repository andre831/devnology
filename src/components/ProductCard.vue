<template>
  <div class="product-card">
    <img src="../../src/assets/logo.png" alt="" width="200" />
    <div class="product-card__body">
      <div class="product-card__body--class">
        <small>aaa</small>
        <button>
          <i class="fa-solid fa-star"></i>
        </button>
      </div>
      <div class="product-card__body--title">
        <p>title</p>
      </div>
      <div class="product-card__body--price">
        <p>$50.00</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  width: 200px;
  display: flex;
  flex-direction: column;

  &__body {
    display: flex;
    flex-direction: column;

    &--class {
      display: flex;
      justify-content: space-between;
    }

    &--title {
      p {
        text-transform: capitalize;
      }
    }

    &--price {
      p {
        font-weight: 600;
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ProductCard extends Vue {
  mounted() {
    console.log("asdadasd ");
  }
}
</script>
