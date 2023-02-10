<template>
  <div class="checkout-view">
    <div class="checkout">
      <div class="checkout__body">
        <div class="checkout__body--title">
          <h3>Personal Information</h3>
        </div>
        <div class="checkout__body--fields">
          <div class="complete-name">
            <div class="complete-name__field">
              <label for="email-field">Name:</label>
              <input
                v-model="emailField"
                type="email"
                id="email-field"
                placeholder="Type your e-mail"
              />
            </div>

            <div class="complete-name__field">
              <label for="password-field">Lastname:</label>
              <input
                v-model="passwordField"
                type="password"
                id="password-field"
                maxlength="15"
                placeholder="Type your password"
              />
            </div>
          </div>

          <div class="document">
            <label for="email-field">Document/CPF:</label>
            <input
              v-model="emailField"
              type="email"
              id="email-field"
              placeholder="Type your e-mail"
            />
          </div>

          <div class="checkout__body--title">
            <h4>Card Information</h4>
          </div>

          <div class="shopping-card">
            <label for="email-field">Card Name:</label>
            <input
              v-model="emailField"
              type="email"
              id="email-field"
              placeholder="Type your e-mail"
            />
            <label for="email-field">Card Number:</label>
            <input
              v-model="emailField"
              type="email"
              id="email-field"
              placeholder="Type your e-mail"
            />
            <label for="email-field">CVV:</label>
            <input
              v-model="emailField"
              type="email"
              id="email-field"
              placeholder="Type your e-mail"
            />
            <label for="email-field">Card Type:</label>
            <input
              v-model="emailField"
              type="email"
              id="email-field"
              placeholder="Type your e-mail"
            />
            <select name="" id="">
              <option value="">Credit</option>
              <option value="">Debit</option>
            </select>
          </div>
        </div>
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
  .checkout {
    &__body {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      &--fields {
        width: 100%;
        min-width: 256px;

        input {
          height: 68px;
          margin-bottom: 10px;
          padding: 0 5px;
        }
        .complete-name {
          display: flex;
          justify-content: space-between;

          &__field {
            width: 48%;
            display: flex;

            flex-direction: column;
            justify-content: space-between;
          }
        }

        .document {
          display: flex;
          flex-direction: column;
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
