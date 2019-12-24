<template>
  <th
    class="header-component"
    :class="getHeaderClasses()"
    :style="{'minWidth': header.minWidth || '0', 'textAlign': header.align }"
  >
    <span class="header-title" @click="handlerClick">
      <i class="fas" :class="getIconClass()" v-if="header.orderable"></i>
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
import Vue from 'vue';
import HeaderEntity from '../entities/Header';

export default Vue.extend({
  name: 'Header',
  props: {
    label: String,
    align: {
      type: String,
      default: 'left',
    },
    header: {
      type: Object as () => HeaderEntity,
      required: true,
    },
    ordered: {
      type: Boolean,
      default: false,
    },
    showSearch: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      search: '',
      lastSearch: '',
    };
  },
  methods: {
    changedSearch () {
      this.$emit('search', { header: this.header, q: this.search });
      this.lastSearch = this.search;
    },
    clickShowSearch () {
      this.$emit('changeShowSearch', !this.showSearch);
    },
    handlerClick () {
      this.$emit('click', this.header);
    },
    getHeaderClasses () {
      let classes = [];
      if (this.header.orderable) {
        classes.push('orderable');
      }
      if (this.header.orderable && this.ordered) {
        classes.push(this.header.orderDirection === 'desc' ? 'desc' : 'asc');
      }
      return classes;
    },
    getIconClass () {
      if (this.ordered && this.header.orderDirection === 'desc') return 'fa-sort-alpha-down desc';
      if (this.ordered && this.header.orderDirection === 'asc') return 'fa-sort-alpha-up asc';

      return 'fa-sort';
    },
  },
});
</script>
