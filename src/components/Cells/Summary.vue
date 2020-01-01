<template>
  <span class="cell-summary-component" @click="toggleSumarized">
    {{ showSummaryText }}{{ showText }}{{ showSummaryReservedText }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SummaryEntity from '../../entities/Cells/Summary';

@Component
export default class CellSummary extends Vue {
  @Prop() readonly cell!: SummaryEntity

  protected summarized: boolean = true;

  get showSummaryText () {
    if (!this.cell.reversed || !this.summarized) return '';
    return '...';
  }

  get showSummaryReservedText () {
    if (this.cell.reversed || !this.summarized) return '';
    return '...';
  }

  get showText (): string {
    if (!this.summarized) {
      return this.cell.label;
    }
    if (this.cell.reversed) {
      return this.cell.label.substring(this.cell.label.length - this.cell.size, this.cell.label.length);
    }
    return this.cell.label.substring(0, this.cell.size);
  }

  protected toggleSumarized (): void {
    this.summarized = !this.summarized;
  }
}
</script>
