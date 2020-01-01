<template>
  <span class="cell-label-component" :class="cell.color">
    {{ cell.label }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LabelEntity from '../../entities/Cells/Label';

@Component
export default class CellLabel extends Vue {
  @Prop() readonly cell!: LabelEntity;
}
</script>
