<template>
  <div class="delivery">
    <div class="delivery__header">
      <h3>Delivery</h3>
    </div>
    <div class="delivery__body">
      <div class="delivery__body--local">
        <label for="cep">CEP</label>
        <input v-model="deliveryInfos.cep" type="text" name="cep" id="cep" />

        <label for="complement">Way</label>
        <input v-model="deliveryInfos.way" type="text" name="way" id="way" />

        <label for="complement">complement</label>
        <input
          v-model="deliveryInfos.complement"
          type="text"
          name="complement"
          id="complement"
        />

        <button @click="postDeliveryInformations" class="btn__primary">
          Save
        </button>
      </div>
    </div>
    <div class="delivery__footer">
      <div class="delivery__footer--resume">
        <p>Value (fixed)</p>
        <p>$25</p>
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

    &--local {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      button,
      input {
        height: 24px;
        margin: 5px 0;
      }

      button {
        height: 30px;
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
import { Inject } from "inversify-props";

import ISwalService from "../../services/SwalService/ISwalService";
import IDeliveryService from "../../services/DeliveryService/IDeliveryService";

@Component
export default class CartDelivery extends Vue {
  @Inject() _deliveryService!: IDeliveryService;
  @Inject() _swalService!: ISwalService;

  public deliveryInfos = {
    userId: this.$store.getters.userId,
    cep: "",
    way: "",
    complement: "",
  };

  async postDeliveryInformations() {
    this.$store.commit("addDeliveryLocal", this.deliveryInfos);

    return await this._deliveryService
      .postDeliveryInfos(this.deliveryInfos)
      .then(() =>
        this._swalService.success("Save your informations", "Return")
      );
  }
}
</script>
