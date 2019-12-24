<template>
  <tr
    class="data-table-row-component"
    :class="{'selectable': selectable, 'selected': selected}"
    @click="click"
  >
    <td v-for="(cell, index) in row.cells" :key="index">
      <CellSummary :cell="cell" v-if="cell.type === 'summary'" />
      <CellLabel :cell="cell" v-else-if="cell.type === 'label'" />
      <CellText :cell="cell" v-else />
    </td>
  </tr>
</template>

<script lang="ts">
import Vue from 'vue';
import CellSummary from './Cells/Summary.vue';
import CellText from './Cells/Text.vue';
import CellLabel from './Cells/Label.vue';
import RowEntity from '../entities/Row';
import CellEntity from '../entities/Cell';
import SummaryEntity from '../entities/Summary';

export default Vue.extend({
  name: 'Row',
  components: {
    CellText,
    CellSummary,
    CellLabel,
  },
  props: {
    selectable: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    row: {
      type: Object as () => RowEntity,
    },
  },

  data () {
    return {
      clicks: 0,
      timer: undefined as any,
      clickDelay: 200,
    };
  },

  methods: {
    oneClickDispatch (event: MouseEvent) {
      this.$emit('click', { row: this.row, event });
    },
    doubleClickDispatch (event: MouseEvent) {
      this.$emit('doubleClick', { row: this.row, event });
    },
    click (event: MouseEvent) {
      if (!this.selectable) return;

      this.clicks++;
      if (this.clicks === 1) {
        this.oneClickDispatch(event);
        const self = this;
        this.timer = setTimeout(function () {
          self.clicks = 0;
        }, this.clickDelay);
      } else {
        clearTimeout(this.timer);
        this.doubleClickDispatch(event);
        this.clicks = 0;
      }
    },
  },
});
</script>

<style lang="scss">
@import '../themes/index';
.data-table-row-component {
  &.selectable {
    cursor: pointer,
  }
  &.selected {
    background-color: $primary;
    color: $textColorLight;
  }
}
</style>
