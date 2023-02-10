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
              <input id="name-field" placeholder="Type your name" />
            </div>

            <div class="complete-name__field">
              <label for="lastname-field">Lastname:</label>
              <input
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
              type="text"
              id="card-name-field"
              placeholder="Type your e-mail"
            />

            <div class="shopping-card__identification">
              <div class="shopping-card__identification--field">
                <label for="card-number-field">Card Number:</label>
                <input
                  type="number"
                  id="card-number-field"
                  placeholder="Type your card number"
                />
              </div>

              <div class="shopping-card__identification--field">
                <label for="email-field">CVV:</label>
                <input
                  type="number"
                  id="email-field"
                  placeholder="Type your CVV card"
                  min="3"
                  max="6"
                  pattern="/^-?\d+\.?\d*$/"
                />
              </div>
            </div>

            <label for="card-type">Card Type:</label>
            <select name="card-type" id="card-type">
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
          </div>
        </form>
        <div class="checkout__body--submit">
          <button class="btn__primary" type="submit" :disabled="enableLogin">
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
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CheckoutView extends Vue {}
</script>
