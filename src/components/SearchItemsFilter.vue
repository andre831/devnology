<template>
  <div class="search-items">
    <div class="search-items__text">
      <input
        type="text"
        v-model="queryByName"
        @input="onQueryChanged"
        placeholder="Filter our products using name"
      />
    </div>

    <div class="search-items__sort-by">
      <select v-model="sortByDiscount" @change="onSortByDiscountChanged">
        <option value="" disabled>Discount</option>
        <option value="withDiscount">With discount</option>
        <option value="missDiscount">Miss discount</option>
      </select>

      <select v-model="sortBy" @change="onSortByChanged">
        <option value="" disabled>Price</option>
        <option value="biggestPrice">Biggest Price</option>
        <option value="lowestPrice">Lowest Price</option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.search-items {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  label {
    margin-right: 10px;
  }

  &__text,
  &__sort-by {
    width: 100%;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;

    input,
    select {
      width: 100%;
      padding: 5px;
      border: 1px solid #ccc;
    }

    select {
      width: 49%;
    }
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Product } from "../types/Product";

@Component
export default class SearchItemsFilter extends Vue {
  @Prop({ default: [] }) readonly items!: Product[];

  queryByName = "";
  sortByDiscount = "";
  sortBy = "";

  get filteredItems(): Product[] {
    let filtered = this.items;

    if (this.queryByName) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(this.queryByName.toLowerCase())
      );
    }

    if (this.sortByDiscount === "withDiscount") {
      filtered = filtered.filter((a) => a.hasDiscount);
    } else if (this.sortByDiscount === "missDiscount") {
      filtered = filtered.filter((b) => b.hasDiscount == false);
    }

    if (this.sortBy === "biggestPrice") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (this.sortBy === "lowestPrice") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    }

    return filtered;
  }

  private updateFilteredItems() {
    this.$emit("update:filteredItems", this.filteredItems);
  }

  onSortByDiscountChanged() {
    this.updateFilteredItems();
  }

  onSortByChanged() {
    this.updateFilteredItems();
  }

  onQueryChanged() {
    this.updateFilteredItems();
  }
}
</script>
