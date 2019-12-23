<template>
  <div class="data-table-component" style="overflow-x:auto;">
    <table>
      <thead>
        <tr >
          <Header
            v-for="(header, index) in headers"
            :key="index"
            :text="header.text"
            :searchable="header.searchable"
            :orderable="header.orderable"
            :align="header.align"
            :minWidth="header.minWidth"  />
        </tr>
      </thead>
      <tbody>
        <tr
          is="Row"
          name="Some name here"
          v-for="row in rows"
          :row="row"
          :key="row.id"
          :selected="isSelectedRow(row)"
          :selectable="selectableRows"
          @click="rowClick"
          @doubleClick="rowDoubleClick" />

      </tbody>
      <tfoot>
        <!-- <th>Footer</th> -->
      </tfoot>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Row from './Row.vue';
import Header from './Header.vue';

import RowInterface from '../interfaces/Row';
import HeaderInterface from '../interfaces/Header';

export default Vue.extend({
  name: 'DataTable',
  components: {
    Header,
    Row,
  },
  props: {
    rows: {
      type: Array as () => Array<RowInterface>,
      default: [],
    },
    headers: {
      type: Array as () => Array<HeaderInterface>,
      default: [],
    },
    selectableRows: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    rowClick (rowClicked: {row: RowInterface, event: MouseEvent}) {
      this.changeSelectedRow(rowClicked);
      this.$emit('rowClick', rowClicked);
    },
    rowDoubleClick (rowClicked: {row: RowInterface, event: MouseEvent}) {
      this.$emit('rowDoubleClick', rowClicked);
    },
    isSelectedRow (row: RowInterface): boolean {
      return this.selectedRows.indexOf(row.id) >= 0;
    },
    changeSelectedRow (rowClicked: {row: RowInterface, event: MouseEvent}): void {
      if (this.isSelectedRow(rowClicked.row)) {
        this.selectedRows = this.selectedRows.filter((rowId) => rowClicked.row.id === rowId);
        return;
      }
      if (rowClicked.event.ctrlKey || rowClicked.event.metaKey) {
        this.selectedRows.push(rowClicked.row.id);
        return;
      }
      this.selectedRows = [rowClicked.row.id];
    },
  },
  data () {
    let selectedRows: (string|number)[] = [];
    return {
      selectedRows,
    };
  },
});
</script>

<style lang="scss">
.data-table-component {
  table {
    width: 100%;
    border-collapse: collapse;

    // tr:nth-of-type(odd) {
    //   background: #eee;
    // }
    th {
      // background: #333;
      // color: white;
      font-weight: bold;
    }
    td, th {
      border: 1px solid #ccc;
      text-align: left;
    }
  }

}
</style>
