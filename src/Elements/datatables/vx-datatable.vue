<template>
  <Vue3EasyDataTable
    :headers="headers"
    :items="items"
    theme-color="#1d90ff"
    table-class-name="customize-table"
    header-text-direction="center"
    body-text-direction="center"
    class="rounded px-2 bg-white"
  >
    <template v-slot:[`item-${header.value}`]="item" v-for="header in headers">
      <slot :name="`item-${header.value}`" v-bind:item="item">{{ item[header.value] }}</slot>
    </template>
  </Vue3EasyDataTable>
</template>

<script>
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

export default {
  name: "vx-datatable",
  components: {Vue3EasyDataTable},
  props: {
    headers: {
      type: Array,
      default: () => []
    },
    items: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.customize-table {
  --easy-table-border: 1px solid #e5e7eb;
  --easy-table-row-border: 1px solid #e5e7eb;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: rgb(17 24 39);
  --easy-table-header-background-color: white;

  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: #fff;
  --easy-table-body-even-row-background-color: white;

  --easy-table-body-row-font-color: rgb(17 24 39);
  --easy-table-body-row-background-color: white;
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #2d3a4f;
  --easy-table-body-row-hover-background-color: #eee;

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-footer-background-color: white;
  --easy-table-footer-font-color: #c0c7d2;
  --easy-table-footer-font-size: 14px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;


  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;
}
</style>
