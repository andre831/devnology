<template>
  <div class="search-items">
    <div class="filters">
      <input type="text" v-model="queryByName" @input="onQueryChanged" />
      <!-- <label>
        <input
          type="checkbox"
          v-model="filterByCheckbox"
          @change="onFilterByCheckboxChanged"
        />
        Filter by Checkbox
      </label> -->

      <select v-model="sortByDiscount" @change="onSortByDiscountChanged">
        <option value="">Sort by</option>
        <option value="withDiscount">With discount</option>
        <option value="missDiscount">Miss discount</option>
      </select>

      <select v-model="sortBy" @change="onSortByChanged">
        <option value="">Sort by</option>
        <option value="biggestPrice">Biggest Price</option>
        <option value="lowestPrice">Lowest Price</option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-items {
  .filters {
    display: flex;
    align-items: center;

    input[type="text"] {
      flex: 1;
      margin-right: 10px;
      padding: 5px;
      border: 1px solid #ccc;
    }

    label {
      margin-right: 10px;
    }

    select {
      width: 150px;
      padding: 5px;
      border: 1px solid #ccc;
    }
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SearchItemsFilter extends Vue {
  @Prop({ default: [] }) readonly items: any[] = [];

  queryByName = "";
  sortByDiscount = "";
  sortBy = "";

  get filteredItems(): any {
    let filtered = this.items;

    // if (this.filterByCheckbox) {
    //   filtered = filtered.filter((item) => item.hasDiscount);
    // }

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

  private onSortByDiscountChanged() {
    this.updateFilteredItems();
  }

  private onSortByChanged() {
    this.updateFilteredItems();
  }

  private onQueryChanged() {
    this.updateFilteredItems();
  }
}
</script>
