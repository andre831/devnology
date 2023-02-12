<template>
  <div class="modal" v-if="show">
    <div class="modal__overlay" @click="close"></div>
    <div class="modal__content">
      <div class="modal__content--close">
        <button class="modal__close-button" @click="close">&times;</button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.modal {
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #00000080;
    z-index: 9998;
  }

  &__content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $white;
    padding: 20px;
    z-index: 9999;

    &--close {
      width: 100%;
      display: flex;
      justify-content: end;
      button {
        font-size: 25px;
      }
    }
  }

  @include break-up(map-get($breakpoints, "lg")) {
    &__content {
      width: 100%;
      max-width: 1130px;
    }
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Modal extends Vue {
  @Prop({ default: false }) show!: boolean;

  open() {
    this.show = true;
  }
  close() {
    this.show = false;
  }
}
</script>
