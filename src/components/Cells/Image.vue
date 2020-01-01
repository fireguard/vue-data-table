<template>
  <img class="cell-image-component"
      :src="cell.url"
      :alt="cell.label"
      :height="cell.height"
      :width="cell.width"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ImageEntity from '../../entities/Cells/Image';

@Component
export default class CellImage extends Vue {
  @Prop() readonly cell!: ImageEntity;
}
</script>
