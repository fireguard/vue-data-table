<template>
  <span class="cell-text-component">{{ cell.label }}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CellEntity from '../../entities/Cells/Cell';

@Component
export default class CellText extends Vue {
  @Prop() readonly cell!: CellEntity;
}
</script>

