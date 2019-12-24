<template>
  <span class="cell-text-component">{{ cell.label }}</span>
</template>

<script lang="ts">
import Vue from 'vue';
import CellEntity from '../../entities/Cells/Cell';

export default Vue.extend({
  name: 'CellText',
  props: {
    cell: CellEntity,
  },
});
</script>

<style lang="scss">
.cell-text-component {

}
</style>
