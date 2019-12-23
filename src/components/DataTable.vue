<template>
  <div class="data-table-component">
    <table>
      <thead>
        <tr >
          <Header
            v-for="(header, index) in headers"
            :key="header.id || index"
            :header="header"
            :ordered="header.id === orderBy"
            @click="heanderClick" />
        </tr>
      </thead>
      <tbody>
        <tr
          is="Row"
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

import RowEntity from '../entities/Row';
import HeaderEntity from '../entities/Header';

export default Vue.extend({
  name: 'DataTable',
  components: {
    Header,
    Row,
  },
  props: {
    orderBy: {
      type: String,
      default: null,
    },
    rows: {
      type: Array as () => Array<RowEntity>,
      default: [],
    },
    headers: {
      type: Array as () => Array<HeaderEntity>,
      default: [],
    },
    selectableRows: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    heanderClick (header: HeaderEntity) {
      if (header.orderable !== false) {
        this.$emit('changeOrder', header);
      }
    },
    rowClick (rowClicked: {row: RowEntity, event: MouseEvent}) {
      this.changeSelectedRow(rowClicked);
      this.$emit('rowClick', rowClicked);
    },
    rowDoubleClick (rowClicked: {row: RowEntity, event: MouseEvent}) {
      this.$emit('rowDoubleClick', rowClicked);
    },
    isSelectedRow (row: RowEntity): boolean {
      return this.selectedRows.indexOf(row.id) >= 0;
    },
    changeSelectedRow (rowClicked: {row: RowEntity, event: MouseEvent}): void {
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
    return {
      selectedRows: [] as (string|number)[],
    };
  },
});
</script>

<style lang="scss">
.data-table-component {
  overflow-x: auto;
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
