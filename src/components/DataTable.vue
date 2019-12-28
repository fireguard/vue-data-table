<template>
  <div class="data-table-component">
    <div class="data-table-responsive">
      <table>
        <thead>
          <tr >
            <Header
              v-for="(header, index) in headers"
              :key="header.id || index"
              :header="header"
              :ordered="header.id === orderBy"
              :showSearch="showSearch"
              @click="handlerClick"
              @search="handlerSearch"
              @changeShowSearch="changeShowSearch" />
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
            @doubleClick="rowDoubleClick"
            @cellClick="onCellClick"
          />
          <tr v-if="!loading && rows.length === 0" class="data-table-row-empty">
            <td :colspan="headers.length">
              {{ translation.empty || 'No data availiable'}}
            </td>
          </tr>
          <tr v-if="loading && rows.length === 0" class="data-table-row-loading">
            <td :colspan="headers.length">
              <i class="fa fa-spinner fa-pulse"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ProgressIndeterminate v-if="loading && rows.length !== 0" />
    <Pagination
      v-if="pagination"
      :pagination="pagination"
      :translation="translation.pagination || {}"
      @changePage="changePage"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Row from './Row.vue';
import Header from './Header.vue';
import Pagination from './Pagination.vue';
import ProgressIndeterminate from './ProgressIndeterminate.vue';

import RowEntity from '../entities/Row';
import CellEntity from '../entities/Cells/Cell';
import HeaderEntity from '../entities/Header';
import PaginationEntity from '../entities/Pagination';

export default Vue.extend({
  name: 'DataTable',
  components: {
    Header,
    Row,
    Pagination,
    ProgressIndeterminate,
  },
  props: {
    orderBy: {
      type: String,
      default: null,
    },
    translation: {
      type: Object,
      default: {} as any,
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
    pagination: {
      type: PaginationEntity,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onCellClick (data: {event: MouseEvent, cell: CellEntity, row: RowEntity}) {
      this.$emit('cellClick', data);
    },
    handlerClick (header: HeaderEntity) {
      if (header.orderable !== false) {
        this.$emit('changeOrder', header);
      }
    },
    handlerSearch (search: { header: HeaderEntity, q: string}) {
      console.error(search);
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
    changeShowSearch (showSearch: boolean) {
      console.error('changeShowSearch', showSearch);
      this.showSearch = showSearch;
    },
    changePage (page: number) {
      this.$emit('changePage', page);
    },
  },
  data () {
    return {
      selectedRows: [] as (string|number)[],
      showSearch: false as boolean,
    };
  },
});
</script>
