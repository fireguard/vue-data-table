<template>
  <div id="app">
    <DataTable
      :headers="headers"
      :rows="rows"
      :selectableRows="true"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DataTable from './components/DataTable.vue';
import Row from './interfaces/Row';
import Header from './interfaces/Header';
import SummaryInterface from './interfaces/Summary';

export default Vue.extend({
  name: 'app',
  components: {
    DataTable,
  },
  data () {
    const headers: Array<Header> = [
      {
        label: 'Header 1',
        searchable: true,
        minWidth: '100px',
        orderable: false,
      },
      {
        label: 'Header 2',
        minWidth: '400px',
        searchable: true,
      },
      {
        label: 'Header 3',
      },
      {
        label: 'Header 4',
        align: 'center',
      },
      {
        label: 'Header 5',
      },
      {
        label: 'Header 6',
      },
      {
        label: 'Header 7',
      },
    ];
    const rows: Array<Row> = [
      {
        id: 1,
        cells: [
          { type: 'summary', label: 'sdnfjsbjfbsdjbfjhbsdhbfhsd', size: 10, reversed: true } as SummaryInterface,
          { type: 'text', label: 'L1 - Text2' },
          { type: 'text', label: 'L1 - Text3' },
          { type: 'text', label: 'L1 - Text3' },
          { type: 'text', label: 'L1 - Text3' },
          { type: 'text', label: 'L1 - Text3' },
          { type: 'text', label: 'L1 - Text3' },
        ],
      },
      {
        id: 2,
        cells: [
          { type: 'text', label: 'L2 - Text1' },
          { type: 'text', label: 'L2 - Text2' },
          { type: 'text', label: 'L2 - Text3' },
          { type: 'text', label: 'L2 - Text3' },
          { type: 'text', label: 'L2 - Text3' },
          { type: 'text', label: 'L2 - Text3' },
          { type: 'text', label: 'L2 - Text3' },
        ],
      },
      {
        id: 3,
        cells: [
          { type: 'text', label: 'L3 - Text1' },
          { type: 'text', label: 'L3 - Text2' },
          { type: 'text', label: 'L3 - Text3' },
          { type: 'text', label: 'L3 - Text3' },
          { type: 'text', label: 'L3 - Text3' },
          { type: 'text', label: 'L3 - Text3' },
          { type: 'text', label: 'L3 - Text3' },
        ],
      },
    ];
    return {
      headers,
      rows,
    };
  },

});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
