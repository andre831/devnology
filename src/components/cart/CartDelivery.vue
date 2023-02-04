<template>
  <div class="delivery">
    <div class="delivery__header">
      <h3>Delivery</h3>
    </div>
    <div class="delivery__body">
      <div class="delivery__body--search">
        <input type="number" name="local" min="8" max="20" />
        <button class="btn__primary">Calculate</button>
      </div>
    </div>
    <div class="delivery__footer">
      <div class="delivery__footer--resume">
        <p>Value</p>
        <p>$400</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.delivery {
  min-width: 230px;
  padding: 5px;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-around;
  background: $whiteout;

  &__header {
    width: 100%;
    border-bottom: 1px solid $sooty;
  }

  &__body {
    width: 100%;
    margin: 20px 0;

    &--search {
      height: 50px;
      display: flex;
      justify-content: space-between;

      button,
      input {
        width: 100%;
        margin: 0 2.5px;
      }

      button {
        max-width: 155px;
      }
    }
  }

  &__footer {
    width: 100%;
    display: flex;

    &--resume {
      width: 100%;
      align-items: center;
      display: flex;
      justify-content: space-between;

      p {
        font-size: 18px;

        &:first-child {
          color: $grey;
        }
        &:last-child {
          font-weight: 600;
        }
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CartDelivery extends Vue {}
</script>
