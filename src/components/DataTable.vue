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
    <div class="data-table-footer">
      <div class="data-table-footer-actions">
        <slot name="actions"></slot>
      </div>

      <div class="data-table-footer-pagination">
        <Pagination
          v-if="pagination"
          :pagination="pagination"
          :translation="translation.pagination || {}"
          @changePage="changePage"
          @changePerPage="changePerPage"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import Row from './Row.vue';
import Header from './Header.vue';
import Pagination from './Pagination.vue';
import ProgressIndeterminate from './ProgressIndeterminate.vue';

import RowEntity from '../entities/Row';
import CellEntity from '../entities/Cells/Cell';
import HeaderEntity from '../entities/Cells/Header';
import PaginationEntity from '../entities/Pagination';

@Component({
  components: {
    Header,
    Row,
    Pagination,
    ProgressIndeterminate,
  },
})
export default class DataTable extends Vue {
  @Prop() private orderBy?: string;
  @Prop() private translation: any = {};
  @Prop() private rows!: RowEntity[];
  @Prop() private headers?: HeaderEntity[] = [];
  @Prop() private selectableRows?: boolean = false;
  @Prop() private pagination?: PaginationEntity;
  @Prop() private loading?: boolean = false;

  protected selectedRows: RowEntity[] = [];
  protected showSearch: boolean = false;

  @Emit('cellClick')
  protected onCellClick (data: {event: MouseEvent, cell: CellEntity, row: RowEntity}) {
    return data;
  }

  @Emit('changeOrder')
  protected handlerClick (header: HeaderEntity) {
    if (header.orderable !== false) {
      return header;
    }
  }

  @Emit('search')
  protected handlerSearch (search: { header: HeaderEntity, q: string}) {
    return search;
  }

  @Emit('rowClick')
  protected rowClick (rowClicked: {row: RowEntity, event: MouseEvent}) {
    this.changeSelection(rowClicked);
    return rowClicked;
  }

  @Emit('rowDoubleClick')
  protected rowDoubleClick (rowClicked: {row: RowEntity, event: MouseEvent}) {
    return rowClicked;
  }

  @Emit('changeSelection')
  protected changeSelectedRows (rows: RowEntity[]) {
    this.selectedRows = rows;
    return this.selectedRows;
  }

  @Emit('changePage')
  changePage (page: number) {
    return page;
  }

  @Emit('changePerPage')
  protected changePerPage (perPage: number) {
    return perPage;
  }

  protected isSelectedRow (row: RowEntity): boolean {
    return this.selectedRows.indexOf(row) >= 0;
  }

  protected changeSelection (rowClicked: {row: RowEntity, event: MouseEvent}): void {
    if (this.isSelectedRow(rowClicked.row)) {
      this.changeSelectedRows(this.selectedRows.filter((row) => rowClicked.row === row));
      return;
    }
    if (rowClicked.event.ctrlKey || rowClicked.event.metaKey) {
      this.changeSelectedRows([rowClicked.row].concat(this.selectedRows));
      return;
    }
    this.changeSelectedRows([rowClicked.row]);
  }

  protected changeShowSearch (showSearch: boolean) {
    this.showSearch = showSearch;
  }
}
</script>
