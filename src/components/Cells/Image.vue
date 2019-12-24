<template>
  <img class="cell-image-component"
      :src="cell.url"
      :alt="cell.label"
      :height="cell.height"
      :width="cell.width"
  />
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

<style lang="scss">
@import '../../themes/index';
.cell-link-component {
  color: $primary;

  a:any-link {
    color: $primary;
    .selected & {
      color: $textColorLight;
    }
  }

  .selected & {
    color: $textColorLight;
  }
}
</style>
