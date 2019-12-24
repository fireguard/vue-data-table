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
import ImageEntity from '../../entities/Cells/Image';

export default Vue.extend({
  name: 'CellImage',
  props: {
    cell: ImageEntity,
  },
});
</script>
