<template>
  <span class="cell-summary-component" @click="toggleSumarized">
    {{ showSummaryText }}{{ showText }}{{ showSummaryReservedText}}
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'CellSummary',
  props: {
    label: String,
    size: Number,
    reversed: {
      type: Boolean,
      default: false,
    },
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
      if (!this.reversed || !this.summarized) return '';

      return '...';
    },
    showSummaryReservedText () {
      if (this.reversed || !this.summarized) return '';

      return '...';
    },
    showText (): string {
      if (!this.summarized) {
        return this.label;
      }
      if (this.reversed) {
        return this.label.substring(this.label.length - this.size, this.label.length);
      }
      return this.label.substring(0, this.size);
    },
  },

});
</script>

<style lang="scss">
.cell-summary-component {
  cursor: pointer;
}
</style>
