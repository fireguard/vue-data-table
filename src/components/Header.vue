<template>
  <th
    class="data-table-header-component"
    :class="headerClasses"
    :style="{'minWidth': header.minWidth || '0', 'textAlign': header.align }"
  >
    <span class="header-title" @click.prevent="handlerClick">
      <i class="fas" :class="iconClasses" v-if="header.orderable"></i>
      {{ header.label }}
    </span>
    <div class="header-search" v-if="this.showSearch && this.header.searchable">
      <input type="search" v-model="search" @change="changedSearch"/>
    </div>
    <div
      class="header-searchable"
      :class="{
        'filtered': this.search.length !== 0 && this.search === this.lastSearch,
        'opened': this.showSearch
      }"
      v-if="header.searchable"
      @click="clickShowSearch"
    >
      <i class="fas" :class="{'fa-search': this.search.length === 0, 'fa-filter': this.search.length !== 0}"></i>
    </div>
  </th>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import HeaderEntity from '../entities/Header';

@Component
export default class Header extends Vue {
  @Prop() private label?: string;
  @Prop() private align: string = 'left';
  @Prop() private header!: HeaderEntity;
  @Prop() private ordered: boolean = false;
  @Prop() private showSearch: boolean = false;

  private search: string = '';
  private lastSearch: string = '';

  get headerClasses () {
    let classes = [];
    if (this.header.orderable) {
      classes.push('orderable');
    }
    if (this.header.orderable && this.ordered) {
      classes.push(this.header.orderDirection === 'desc' ? 'desc' : 'asc');
    }
    return classes;
  }

  get iconClasses () {
    if (this.ordered && this.header.orderDirection === 'desc') return 'fa-sort-alpha-down desc';
    if (this.ordered && this.header.orderDirection === 'asc') return 'fa-sort-alpha-up asc';

    return 'fa-sort';
  }

  @Emit('search')
  protected changedSearch () {
    this.lastSearch = this.search;
    return { header: this.header, q: this.search };
  }

  @Emit('changeShowSearch')
  protected clickShowSearch () {
    return !this.showSearch;
  }

  @Emit('click')
  protected handlerClick () {
    return this.header;
  }
}
</script>
