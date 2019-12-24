<template>
  <span class="cell-label-component" :class="cell.color">
    {{ cell.label }}
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import LabelEntity from '../../entities/Label';

export default Vue.extend({
  name: 'CellLabel',
  props: {
    cell: LabelEntity,
  },
});
</script>

<style lang="scss">
@import '../../themes/index';
.cell-label-component {
  padding: 1px 5px;
  font-size: 0.7em;
  border-radius: 5px;
  &.default {
    background-color: $backgroudColor;
  }
  &.primary {
    background-color: $primary;
    color: $textColorLight;
  }
  &.info {
    background-color: $info;
    color: $textColorLight;
  }
  &.warn {
    background-color: $warn;
  }
  &.danger {
    background-color: $danger;
    color: $textColorLight;
  }
}
</style>
