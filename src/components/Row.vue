<template>
  <tr
    class="data-table-row-component"
    :class="{'selectable': selectable, 'selected': selected}"
    @click="click"
  >
    <td
      v-for="(cell, index) in row.cells"
      :key="index"
      :style="{'text-align': cell.align}"
      @click="onCellClick($event, cell)"
    >
      <CellSummary :cell="cell" v-if="cell.type === 'summary'" />
      <CellLabel :cell="cell" v-else-if="cell.type === 'label'" />
      <CellLink :cell="cell" v-else-if="cell.type === 'link'" />
      <CellImage :cell="cell" v-else-if="cell.type === 'image'" />
      <CellIcon :cell="cell" v-else-if="cell.type === 'icon'" />
      <CellText :cell="cell" v-else />
    </td>
  </tr>
</template>

<script lang="ts">
import Vue from 'vue';
import RowEntity from '../entities/Row';
import CellSummary from './Cells/Summary.vue';
import CellText from './Cells/Text.vue';
import CellLabel from './Cells/Label.vue';
import CellLink from './Cells/Link.vue';
import CellImage from './Cells/Image.vue';
import CellIcon from './Cells/Icon.vue';
import CellEntity from '../entities/Cells/Cell';
import SummaryEntity from '../entities/Cells/Summary';
import ImageEntity from '../entities/Cells/Image';
import IconEntity from '../entities/Cells/Icon';

export default Vue.extend({
  name: 'Row',
  components: {
    CellText,
    CellSummary,
    CellLabel,
    CellLink,
    CellImage,
    CellIcon,
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
    onCellClick (event: MouseEvent, cell: CellEntity) {
      if (!cell.clickable) return;
      this.$emit('cellClick', { event, cell, row: this.row });
    },
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
