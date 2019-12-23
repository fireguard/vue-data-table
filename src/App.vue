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

export default Vue.extend({
  name: 'app',
  components: {
    DataTable,
  },
  data () {
    const headers: Array<Header> = [
      {
        text: 'Header 1',
        searchable: true,
        minWidth: '100px',
        orderable: false,
      },
      {
        text: 'Header 2',
        minWidth: '400px',
        searchable: true,
      },
      {
        text: 'Header 3',
      },
      {
        text: 'Header 4',
        align: 'center',
      },
      {
        text: 'Header 5',
      },
      {
        text: 'Header 6',
      },
      {
        text: 'Header 7',
      },
    ];
    const rows: Array<Row> = [
      {
        id: 1,
        cells: [
          { type: 'text', text: 'L1 - Text1' },
          { type: 'text', text: 'L1 - Text2' },
          { type: 'text', text: 'L1 - Text3' },
          { type: 'text', text: 'L1 - Text3' },
          { type: 'text', text: 'L1 - Text3' },
          { type: 'text', text: 'L1 - Text3' },
          { type: 'text', text: 'L1 - Text3' },
        ],
      },
      {
        id: 2,
        cells: [
          { type: 'text', text: 'L2 - Text1' },
          { type: 'text', text: 'L2 - Text2' },
          { type: 'text', text: 'L2 - Text3' },
          { type: 'text', text: 'L2 - Text3' },
          { type: 'text', text: 'L2 - Text3' },
          { type: 'text', text: 'L2 - Text3' },
          { type: 'text', text: 'L2 - Text3' },
        ],
      },
      {
        id: 3,
        cells: [
          { type: 'text', text: 'L3 - Text1' },
          { type: 'text', text: 'L3 - Text2' },
          { type: 'text', text: 'L3 - Text3' },
          { type: 'text', text: 'L3 - Text3' },
          { type: 'text', text: 'L3 - Text3' },
          { type: 'text', text: 'L3 - Text3' },
          { type: 'text', text: 'L3 - Text3' },
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
