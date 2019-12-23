<template>
  <span class="cell-summary-component" @click="toggleSumarized">
    {{ showSummaryText }}{{ showText }}{{ showSummaryReservedText}}
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import SummaryEntity from '../../entities/Summary';

export default Vue.extend({
  name: 'CellSummary',
  props: {
    cell: SummaryEntity,
  },
  data () {
    return {
      summarized: true as boolean,
    };
  },
  methods: {
    toggleSumarized (): void {
      this.summarized = !this.summarized;
    },
  },
  computed: {
    showSummaryText () {
      if (!this.cell.reversed || !this.summarized) return '';

      return '...';
    },
    showSummaryReservedText () {
      if (this.cell.reversed || !this.summarized) return '';

      return '...';
    },
    showText (): string {
      if (!this.summarized) {
        return this.cell.label;
      }
      if (this.cell.reversed) {
        return this.cell.label.substring(this.cell.label.length - this.cell.size, this.cell.label.length);
      }
      return this.cell.label.substring(0, this.cell.size);
    },
  },

});
</script>

<style lang="scss">
.cell-summary-component {
  cursor: pointer;
}
</style>
