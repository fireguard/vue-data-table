<template>
  <span class="cell-label-component" :class="cell.color">
    {{ cell.label }}
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import LabelEntity from '../../entities/Cells/Label';

export default Vue.extend({
  name: 'CellLabel',
  props: {
    cell: LabelEntity,
  },
});
</script>
