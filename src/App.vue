<template>
  <div id="app">
    <DataTable
      :headers="headers"
      :rows="rows"
      :selectableRows="true"
      :orderBy="orderBy"
      @changeOrder="changeOrder"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DataTable from './components/DataTable.vue';
import Row from './entities/Row';
import Header from './entities/Header';
import Summary from './entities/Summary';
import Cell from './entities/Cell';

export default Vue.extend({
  name: 'app',
  components: {
    DataTable,
  },
  methods: {
    changeOrder (header: Header) {
      header.changeOrderDirection();
      this.orderBy = header.id;
    },
  },
  data () {
    const headers: Array<Header> = [
      new Header({ id: 'id', label: 'Id' }),
      new Header({ id: 'name', label: 'Header 2', minWidth: '400px' }),
      new Header({ id: 'h3', label: 'Header 3', orderDirection: 'asc' }),
      new Header({ id: 'h4', label: 'Header 4', orderDirection: 'asc' }),
      new Header({ id: 'h5', label: 'Header 5', searchable: false }),
      new Header({ id: 'h6', label: 'Header 6' }),
      new Header({ id: 'h7', label: 'Header 7' }),
    ];
    const rows: Array<Row> = [
      new Row({
        id: 1,
        cells: [
          new Summary({ label: 'sdnfjsbjfbsdjbfjhbsdhbfhsd', size: 10, reversed: true }),
          new Cell({ label: 'L1 - Text2' }),
          new Cell({ label: 'L1 - Text3' }),
          new Cell({ label: 'L1 - Text4' }),
          new Cell({ label: 'L1 - Text5' }),
          new Cell({ label: 'L1 - Text6' }),
          new Cell({ label: 'L1 - Text7' }),
        ],
      }),
      new Row({
        id: 2,
        cells: [
          new Summary({ label: '2dnfjsbjfbsdjbfjhbsdhbfhsd', size: 10, reversed: true }),
          new Cell({ label: 'L2 - Text2' }),
          new Cell({ label: 'L2 - Text3' }),
          new Cell({ label: 'L2 - Text4' }),
          new Cell({ label: 'L2 - Text5' }),
          new Cell({ label: 'L2 - Text6' }),
          new Cell({ label: 'L2 - Text7' }),
        ],
      }),
      new Row({
        id: 3,
        cells: [
          new Summary({ label: '2dnfjsbjfbsdjbfjhbsdhbfhsd', size: 10, reversed: true }),
          new Cell({ label: 'L3 - Text2' }),
          new Cell({ label: 'L3 - Text3' }),
          new Cell({ label: 'L3 - Text4' }),
          new Cell({ label: 'L3 - Text5' }),
          new Cell({ label: 'L3 - Text6' }),
          new Cell({ label: 'L3 - Text7' }),
        ],
      }),
      new Row({
        id: 4,
        cells: [
          new Summary({ label: '2dnfjsbjfbsdjbfjhbsdhbfhsd', size: 10, reversed: true }),
          new Cell({ label: 'L4 - Text2' }),
          new Cell({ label: 'L4 - Text3' }),
          new Cell({ label: 'L4 - Text4' }),
          new Cell({ label: 'L4 - Text5' }),
          new Cell({ label: 'L4 - Text6' }),
          new Cell({ label: 'L4 - Text7' }),
        ],
      }),
    ];
    return {
      headers,
      rows,
      orderBy: null as string|null,
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
