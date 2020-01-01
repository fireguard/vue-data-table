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
      @changeSelection="changeSelection"
    >
      <template v-slot:actions>
        <ActionButton
          icon="fa-plus"
          type="primary-link"
          description="Cadastrar usuário"
          @click="addNewRecord"
        />
        <ActionButton
          icon="fa-edit"
          type="warn-link"
          description="Editar usuário"
          @click="addNewRecord"
        />
        <ActionButton
          icon="fa-trash"
          type="danger-link"
          @click="addNewRecord"
        />

        <ActionButton
          icon="fa-sync-alt"
          iconClass="fas"
          type="success-link"
          animation="fa-spin"
          @click="addNewRecord"
        />

        <ActionButtonSeparator />

        <ActionButton
          icon="fa-gavel"
          iconClass="fas"
          type="info-link"
          @click="addNewRecord"
        />

        <ActionButton
          icon="fa-exchange-alt"
          iconClass="fas"
          type="info-link"
          @click="addNewRecord"
        />

        <ActionButtonSeparator />

        <ActionButton
          icon="fa-plus"
          label="Default"
          @click="addNewRecord"
        />

        <ActionButton
          icon="fa-plus"
          label="Default"
          type="default-outline"
          @click="addNewRecord"
        />

        <ActionButton
          icon="fa-plus"
          label="Primary"
          type="primary"
          @click="addNewRecord"
        />

        <ActionButton
          icon="fa-plus"
          label="Primary"
          type="primary-outline"
          @click="addNewRecord"
        />

        <ActionButton
          icon="fa-plus"
          label="Warn"
          type="warn"
          @click="addNewRecord"
        />

        <ActionButton
          icon="fa-plus"
          label="Warn"
          type="warn-outline"
          @click="addNewRecord"
        />

        <ActionButton
          icon="fa-plus"
          label="Info"
          type="info"
          @click="addNewRecord"
        />

        <ActionButton
          icon="fa-plus"
          label="Info"
          type="info-outline"
          @click="addNewRecord"
        />

        <ActionButton
          icon="fa-plus"
          label="Danger"
          type="danger"
          @click="addNewRecord"
        />

        <ActionButton
          icon="fa-plus"
          label="Danger"
          type="danger-outline"
          @click="addNewRecord"
        />
      </template>
    </DataTable>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import {
  DataTable,
  ActionButton,
  ActionButtonSeparator,
  Pagination,
  Header,
  Row,
  Summary,
  Cell,
  CellAlign,
  Label,
  Link,
  Icon,
  Image,
  LabelColor,
} from './index';
@Component({
  components: {
    DataTable,
    ActionButton,
    ActionButtonSeparator,
  },
})
export default class App extends Vue {
  @Prop() readonly label?: string;

  protected orderBy: string | null = null;
  protected loading: boolean = false;
  protected selectedRows?: Row[] = [];
  protected translation: any = {
    empty: 'Nenhum registro encontrado',
    pagination: {
      page: 'Página',
      of: 'de',
    },
  };

  protected headers: Header[] = [
    new Header({ id: 'summary', label: 'Summary' }),
    new Header({ id: 'text', label: 'Text', minWidth: '400px' }),
    new Header({ id: 'label', label: 'Label', orderDirection: 'asc', align: CellAlign.CENTER }),
    new Header({ id: 'link', label: 'Link', orderDirection: 'asc' }),
    new Header({ id: 'image', label: 'Image', searchable: false, orderable: false }),
    new Header({ id: 'icon', label: 'Icon', searchable: false, orderable: false }),
    new Header({ id: 'h7', label: 'Header 7' }),
  ];

  protected rows: Row[] = [
    new Row({
      id: 1,
      cells: [
        new Summary({ label: 'sdnfjsbjfbsdjbfjhbsdhbfhsd', size: 10, reversed: true }),
        new Cell({ label: 'L1 - Text2', align: CellAlign.CENTER }),
        new Label({ label: 'L1 - Text3', color: LabelColor.Primary }),
        new Link({ label: 'L1 - Text4', url: 'https://test.com' }),
        new Image({ label: 'L1 - Text5', align: CellAlign.CENTER, height: 24, width: 24, url: 'https://images.sftcdn.net/images/t_app-logo-l,f_auto/p/93c11dcc-9ecb-49d4-971a-357372192727/4021352198/undefined-icon.png' }),
        new Icon({ label: 'Status', icon: 'fa-search', color: 'red', size: '14px', align: CellAlign.CENTER, clickable: true }),
        new Cell({ label: 'L1 - Text7', align: CellAlign.RIGHT }),
      ],
    }),
    new Row({
      id: 2,
      cells: [
        new Summary({ label: '2dnfjsbjfbsdjbfjhbsdhbfhsd', size: 10, reversed: true }),
        new Cell({ label: 'L2 - Text2' }),
        new Label({ label: 'L2 - Text3', color: LabelColor.Info }),
        new Link({ label: 'L2 - Text4', route: 'test' }),
        new Image({ label: 'L1 - Text5', align: CellAlign.CENTER, height: 24, width: 24, url: 'https://images.sftcdn.net/images/t_app-logo-l,f_auto/p/93c11dcc-9ecb-49d4-971a-357372192727/4021352198/undefined-icon.png' }),
        new Icon({ label: '', icon: 'fa-search', color: 'red', size: '14px', align: CellAlign.CENTER, clickable: true }),
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
        new Image({ label: 'L1 - Text5', align: CellAlign.CENTER, height: 24, width: 24, url: 'https://images.sftcdn.net/images/t_app-logo-l,f_auto/p/93c11dcc-9ecb-49d4-971a-357372192727/4021352198/undefined-icon.png' }),
        new Icon({ label: '', icon: 'fa-search', color: 'red', size: '14px', align: CellAlign.CENTER, clickable: true }),
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
        new Image({ label: 'L1 - Text5', align: CellAlign.CENTER, height: 24, width: 24, url: 'https://images.sftcdn.net/images/t_app-logo-l,f_auto/p/93c11dcc-9ecb-49d4-971a-357372192727/4021352198/undefined-icon.png' }),
        new Icon({ label: '', icon: 'fa-search', color: 'red', size: '14px', align: CellAlign.CENTER, clickable: true }),
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
        new Image({ label: 'L1 - Text5', align: CellAlign.CENTER, height: 24, width: 24, url: 'https://images.sftcdn.net/images/t_app-logo-l,f_auto/p/93c11dcc-9ecb-49d4-971a-357372192727/4021352198/undefined-icon.png' }),
        new Icon({ label: '', icon: 'fa-search', color: '#eee', size: '14px', align: CellAlign.CENTER, clickable: false }),
        new Cell({ label: 'L5 - Text7' }),
      ],
    }),
  ];

  protected pagination = new Pagination({
    perPage: 10,
    totalPages: 100,
  });

  protected changeOrder (header: Header) {
    header.changeOrderDirection();
    this.orderBy = header.id;
  }

  protected onCellClick (data: {event: MouseEvent, cell: Cell, row: Row}): void {
    console.info(data);
  }

  protected changePage (page: number) {
    if (page !== this.pagination.currentPage) {
      this.pagination.currentPage = page;
    }
  }

  protected changePerPage (perPage: number) {
    if (perPage !== this.pagination.perPage) {
      this.pagination.perPage = perPage;
      console.info('changePerPage', this.pagination.perPage);
    }
  }

  protected addNewRecord (event: MouseEvent) {
    console.info('selected', this.selectedRows);
    console.info('addNewRecord', event);
  }

  protected changeSelection (rows: Row[]) {
    this.selectedRows = rows;
  }
}
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
