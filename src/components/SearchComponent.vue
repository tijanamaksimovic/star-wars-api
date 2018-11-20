<template>
    <v-autocomplete
        :loading="loading"
        :label="label"
        :search-input.sync="search"
        :items="items"
        v-model="select"
        cache-items
        dark
    ></v-autocomplete>
</template>

<script>
export default {
  name: 'SearchComponent',
  data() {
    return {
      search: null,
      select: null,
      loading: false,
    };
  },
  props: {
    items: {
      required: true,
    },
    label: {
      required: true,
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      this.$emit('getItems', v);
    },
    selectedItem() {
      this.$emit('selectedItem', this.select);
    },
    resetField() {
      this.select = null;
    },
  },
  watch: {
    search(val) {
      this.querySelections(val);
    },
    items() {
      this.loading = false;
    },
    select() {
      this.selectedItem();
    },
  },
};
</script>


<style>

</style>
