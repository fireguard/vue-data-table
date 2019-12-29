<template>
  <div id="app">
    <DataTable
      :headers="headers"
      :rows="rows"
      :selectableRows="true"
      :orderBy="orderBy"
      :pagination="pagination"
      :loading="loading"
      :translation="translation"
      @changeOrder="changeOrder"
      @cellClick="onCellClick"
      @changePage="changePage"
      @changePerPage="changePerPage"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DataTable from './components/DataTable.vue';
import Row from './entities/Row';
import Header from './entities/Header';
import Cell from './entities/Cells/Cell';
import Summary from './entities/Cells/Summary';
import Link from './entities/Cells/Link';
import Image from './entities/Cells/Image';
import Icon from './entities/Cells/Icon';
import Label, { Color as LabelColor } from './entities/Cells/Label';
import Pagination from './entities/Pagination';

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
    onCellClick (data: {event: MouseEvent, cell: Cell, row: Row}) {
      console.error(data);
    },
    changePage (page: number) {
      if (page !== this.pagination.currentPage) {
        this.pagination.currentPage = page;
      }
    },
    changePerPage (perPage: number) {
      if (perPage !== this.pagination.perPage) {
        this.pagination.perPage = perPage;
        console.error('changePerPage', this.pagination.perPage);
      }
    },
  },
  data () {
    const headers: Array<Header> = [
      new Header({ id: 'summary', label: 'Summary' }),
      new Header({ id: 'text', label: 'Text', minWidth: '400px' }),
      new Header({ id: 'label', label: 'Label', orderDirection: 'asc', align: 'center' }),
      new Header({ id: 'link', label: 'Link', orderDirection: 'asc' }),
      new Header({ id: 'image', label: 'Image', searchable: false, orderable: false }),
      new Header({ id: 'icon', label: 'Icon', searchable: false, orderable: false }),
      new Header({ id: 'h7', label: 'Header 7' }),
    ];
    const rows: Array<Row> = [
      new Row({
        id: 1,
        cells: [
          new Summary({ label: 'sdnfjsbjfbsdjbfjhbsdhbfhsd', size: 10, reversed: true }),
          new Cell({ label: 'L1 - Text2', align: 'center' }),
          new Label({ label: 'L1 - Text3', color: LabelColor.Primary }),
          new Link({ label: 'L1 - Text4', url: 'https://test.com' }),
          new Image({ label: 'L1 - Text5', align: 'center', height: 24, width: 24, url: 'https://images.sftcdn.net/images/t_app-logo-l,f_auto/p/93c11dcc-9ecb-49d4-971a-357372192727/4021352198/undefined-icon.png' }),
          new Icon({ label: '', icon: 'fa-search', color: 'red', size: '14px', align: 'center', clickable: true }),
          new Cell({ label: 'L1 - Text7', align: 'right' }),
        ],
      }),
      new Row({
        id: 2,
        cells: [
          new Summary({ label: '2dnfjsbjfbsdjbfjhbsdhbfhsd', size: 10, reversed: true }),
          new Cell({ label: 'L2 - Text2' }),
          new Label({ label: 'L2 - Text3', color: LabelColor.Info }),
          new Link({ label: 'L2 - Text4', route: 'test' }),
          new Image({ label: 'L1 - Text5', align: 'center', height: 24, width: 24, url: 'https://images.sftcdn.net/images/t_app-logo-l,f_auto/p/93c11dcc-9ecb-49d4-971a-357372192727/4021352198/undefined-icon.png' }),
          new Icon({ label: '', icon: 'fa-search', color: 'red', size: '14px', align: 'center', clickable: true }),
          new Cell({ label: 'L2 - Text7' }),
        ],
      }),
      new Row({
        id: 3,
        cells: [
          new Summary({ label: '2dnfjsbjfbsdjbfjhbsdhbfhsd', size: 10, reversed: true }),
          new Cell({ label: 'L3 - Text2' }),
          new Label({ label: 'L3 - Text3', color: LabelColor.Warn }),
          new Link({ label: 'L3 - Text4', url: 'https://test.com' }),
          new Image({ label: 'L1 - Text5', align: 'center', height: 24, width: 24, url: 'https://images.sftcdn.net/images/t_app-logo-l,f_auto/p/93c11dcc-9ecb-49d4-971a-357372192727/4021352198/undefined-icon.png' }),
          new Icon({ label: '', icon: 'fa-search', color: 'red', size: '14px', align: 'center', clickable: true }),
          new Cell({ label: 'L3 - Text7' }),
        ],
      }),
      new Row({
        id: 4,
        cells: [
          new Summary({ label: '2dnfjsbjfbsdjbfjhbsdhbfhsd', size: 10, reversed: true }),
          new Cell({ label: 'L4 - Text2' }),
          new Label({ label: 'L4 - Text3', color: LabelColor.Danger }),
          new Link({ label: 'L4 - Text4', url: 'https://test.com' }),
          new Image({ label: 'L1 - Text5', align: 'center', height: 24, width: 24, url: 'https://images.sftcdn.net/images/t_app-logo-l,f_auto/p/93c11dcc-9ecb-49d4-971a-357372192727/4021352198/undefined-icon.png' }),
          new Icon({ label: '', icon: 'fa-search', color: 'red', size: '14px', align: 'center', clickable: true }),
          new Cell({ label: 'L4 - Text7' }),
        ],
      }),
      new Row({
        id: 5,
        cells: [
          new Summary({ label: '5dnfjsbjfbsdjbfjhbsdhbfhsd', size: 10, reversed: true }),
          new Cell({ label: 'L5 - Text2' }),
          new Label({ label: 'L5 - Text3', color: LabelColor.Default }),
          new Link({ label: 'L5 - Text4', url: 'https://test.com' }),
          new Image({ label: 'L1 - Text5', align: 'center', height: 24, width: 24, url: 'https://images.sftcdn.net/images/t_app-logo-l,f_auto/p/93c11dcc-9ecb-49d4-971a-357372192727/4021352198/undefined-icon.png' }),
          new Icon({ label: '', icon: 'fa-search', color: '#eee', size: '14px', align: 'center', clickable: false }),
          new Cell({ label: 'L5 - Text7' }),
        ],
      }),
    ];

    const pagination = new Pagination({
      perPage: 10,
      totalPages: 100,
    });

    return {
      headers,
      rows,
      pagination,
      orderBy: null as string|null,
      loading: false as boolean,
      translation: {
        empty: 'Nenhum registro encontrado',
        pagination: {
          page: 'Página',
          of: 'de',
        },
      },
    };
  },

});
</script>

<style lang="scss">
@import './themes/index.scss';
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
}
</style>
