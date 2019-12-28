<template>
  <div class="pagination-component">
    <span class="pagination-icon first-page-action"
          :class="{'disabled': this.pagination.currentPage === 1}"
          @click="changePage(1)"
    >
      <i class="fas fa-angle-double-left"></i>
    </span>
    <span class="pagination-icon prev-page-action"
          :class="{'disabled': !this.hasPrevPage()}"
          @click="prevPage"
    >
      <i class="fas fa-angle-left"></i>
    </span>
    <span class="pagination-separator" />
    <span class="definition-page">
      {{ translation.page || 'Page' }}
      <input type="text" v-model="currentPage" @change="inputChange" /> {{ translation.of || 'of' }} {{ pagination.totalPages }}
    </span>
    <span class="pagination-separator" />
    <span class="pagination-icon next-page-action"
          :class="{'disabled': !this.hasNextPage()}"
          @click="nextPage"
    >
      <i class="fas fa-angle-right"></i>
    </span>
    <span class="pagination-icon last-page-action"
        :class="{'disabled': this.pagination.currentPage === this.pagination.totalPages}"
        @click="changePage(pagination.totalPages)"
    >
      <i class="fas fa-angle-double-right"></i>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PaginationEntity from '../entities/Pagination';

export default Vue.extend({
  name: 'Pagination',
  props: {
    pagination: {
      type: PaginationEntity,
      required: true,
    },
    translation: {
      type: Object,
      default: {} as any,
    },
  },
  methods: {
    changePage (page: number) {
      this.currentPage = page;
      if (this.pagination.currentPage !== this.currentPage) {
        this.$emit('changePage', Number(page));
      }
    },
    hasNextPage () {
      return (this.pagination.currentPage < this.pagination.totalPages);
    },
    nextPage () {
      if (this.hasNextPage()) {
        this.changePage(this.currentPage + 1);
      }
    },
    hasPrevPage () {
      return (this.pagination.currentPage > 1);
    },
    prevPage () {
      if (this.hasPrevPage()) {
        this.changePage(this.currentPage - 1);
      }
    },
    inputChange () {
      if (this.currentPage < 1 || this.currentPage > this.pagination.totalPages) {
        this.currentPage = this.pagination.currentPage;
        return;
      }
      this.changePage(this.currentPage);
    },
  },
  created () {
    this.currentPage = this.pagination.currentPage;
  },
  data () {
    return {
      currentPage: 0 as number,
    };
  },
});
</script>
