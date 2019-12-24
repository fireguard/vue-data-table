<template>
  <span class="cell-link-component">
    <router-link v-if="cell.route" :to="cell.route" >{{ cell.label }}</router-link>
    <a v-else :href="cell.url" :target="cell.target">
      {{ cell.label }}
    </a>
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import CellEntity from '../../entities/Cells/Cell';

export default Vue.extend({
  name: 'CellLink',
  props: {
    cell: CellEntity,
  },
});
</script>
