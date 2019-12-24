<template>
  <span class="cell-icon-component" :style="{color: cell.color}">
    <i :class="[cell.class, cell.icon]" :style="{fontSize: cell.size}"></i> {{ cell.label }}
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import IconEntity from '../../entities/Cells/Icon';

export default Vue.extend({
  name: 'CellIcon',
  props: {
    cell: IconEntity,
  },
});
</script>
