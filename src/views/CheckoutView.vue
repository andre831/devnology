<template>
  <div class="checkout-view">
    <div class="checkout">
      <div class="checkout__body">
        <div class="checkout__body--title">
          <h3>Personal Informations</h3>
        </div>
        <form class="checkout__body--fields">
          <div class="complete-name">
            <div class="complete-name__field">
              <label for="name-field">Name:</label>
              <input
                v-model="buyInformations.name"
                type="text"
                id="name-field"
                placeholder="Type your name"
              />
            </div>

            <div class="complete-name__field">
              <label for="lastname-field">Lastname:</label>
              <input
                v-model="buyInformations.last_name"
                type="text"
                id="lastname-field"
                maxlength="15"
                placeholder="Type your lastname"
              />
            </div>
          </div>

          <div class="document">
            <label for="document-field">Document/CPF:</label>
            <input
              v-model="buyInformations.document"
              type="text"
              id="document-field"
              placeholder="Type your Document/CPF"
            />
          </div>

          <div class="checkout__body--subtitle">
            <h4>Card Informations</h4>
          </div>

          <div class="shopping-card">
            <label for="card-name-field">Card Name:</label>
            <input
              v-model="buyInformations.shopping_card.name"
              type="text"
              id="card-name-field"
              placeholder="Type your card name"
            />

            <div class="shopping-card__identification">
              <div class="shopping-card__identification--field">
                <label for="card-number-field">Card Number:</label>
                <input
                  v-model="buyInformations.shopping_card.number_card"
                  type="number"
                  id="card-number-field"
                  placeholder="Type your card number"
                />
              </div>

              <div class="shopping-card__identification--field">
                <label for="cvv-field">CVV:</label>
                <input
                  v-model="buyInformations.shopping_card.cvv"
                  type="number"
                  id="cvv-field"
                  placeholder="Type your CVV card"
                  min="3"
                  max="6"
                  pattern="/^-?\d+\.?\d*$/"
                />
              </div>
            </div>

            <label for="card-type">Card Type:</label>
            <select
              v-model="buyInformations.shopping_card.type"
              name="card-type"
              id="card-type"
            >
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
          </div>
        </form>
        <div class="checkout__body--submit">
          <button
            class="btn__primary"
            type="submit"
            @click="postCheckoutInformations"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.checkout-view {
  width: 100%;

  .checkout {
    &__body {
      width: 100%;
      max-width: 612px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      &--subtitle {
        margin-bottom: 20px;
        border-bottom: 1px solid $sooty;
      }

      &--fields {
        width: 100%;
        min-width: 256px;

        select,
        input {
          height: 50px;
          margin-bottom: 20px;
          padding: 0 5px;
        }
        .complete-name {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          &__field {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        }

        .document {
          display: flex;
          flex-direction: column;
        }

        .shopping-card {
          display: flex;
          flex-direction: column;

          &__identification {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            &--field {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
          }
        }
      }

      &--submit {
        width: 100%;

        button {
          width: 100%;
        }
      }
    }

    @include break-up(map-get($breakpoints, "lg")) {
      &__body {
        &--fields {
          .complete-name {
            flex-direction: row;

            &__field {
              width: 49%;
              justify-content: space-between;
            }
          }

          .shopping-card__identification {
            flex-direction: row;
            justify-content: space-between;

            &--field {
              width: 29%;
              justify-content: space-between;

              &:first-child {
                width: 69%;
              }
            }
          }
        }
      }
    }
  }
}
</style>

<script lang="ts">
import { Inject } from "inversify-props";
import { Component, Vue } from "vue-property-decorator";

import { DeliveryLocal } from "../types/DeliveryLocal";
import { PayInformations } from "../types/Checkout";

import ICheckoutService from "../services/CheckoutService/ICheckoutService";
import IDeliveryService from "../services/DeliveryService/IDeliveryService";
import ISwalService from "../services/SwalService/ISwalService";

@Component
export default class CheckoutView extends Vue {
  @Inject() _checkoutService!: ICheckoutService;
  @Inject() _deliveryService!: IDeliveryService;
  @Inject() _swalService!: ISwalService;

  public buyInformations = {
    userId: this.$store.getters.userId,
    name: "",
    last_name: "",
    document: "",
    shopping_card: {
      name: "",
      cvv: 0,
      number_card: "",
      type: "",
    },
  };

  private informationToPay: PayInformations = {
    userId: this.$store.getters.userId,
    items: this.$store.getters.cart,
    total: String(this.$store.getters.totalValue),
    localId: null,
    purchaseId: null,
  };

  async mounted() {
    await this.getDeliveryLocal();
    console.log(await this.getDeliveryLocal());
  }

  async completeBuy() {
    return await this._checkoutService
      .postCompletePayment(this.informationToPay)
      .then(() =>
        this._swalService
          .success("Congratulations! Your order has been requested", "Return")
          .then(() => this.$router.push("/"))
      );
  }

  async postCheckoutInformations() {
    await this._checkoutService
      .postCheckoutInfos(this.buyInformations)
      .then((res) => {
        if (res.data.id) {
          this.informationToPay.purchaseId = res.data.id;
        }
      })
      .then(() => this.completeBuy());
  }

  async getDeliveryLocal() {
    return await this._deliveryService
      .getDeliveryInfos(this.$store.getters.userId)
      .then((res) => {
        if (res.data[0].id) {
          this.informationToPay.localId = res.data[0].id;
        }

        return res.data[0];
      });
  }
}
</script>
