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
  padding: 0 8px;
  font-size: 0.7em;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(255,255,255,1);
  -moz-box-shadow: 0px 0px 0px 1px rgba(255,255,255,1);
  box-shadow: 0px 0px 0px 1px rgba(255,255,255,1);
  &.default {
    background-color: $backgroudColor;
    color: $textColorDark;
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
    color: $textColorLight;
  }
  &.danger {
    background-color: $danger;
    color: $textColorLight;
  }
}
</style>
