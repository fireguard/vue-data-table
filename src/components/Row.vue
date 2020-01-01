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
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
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

@Component({
  components: {
    CellText,
    CellSummary,
    CellLabel,
    CellLink,
    CellImage,
    CellIcon,
  },
})
export default class Row extends Vue {
  @Prop() private selectable?: boolean = false;
  @Prop() private selected?: boolean = false;
  @Prop() private row!: RowEntity;

  protected clicks: number = 0;
  protected timer: any;
  protected clickDelay: number = 200;

  @Emit('click')
  protected oneClickDispatch (event: MouseEvent) {
    return { row: this.row, event };
  }

  @Emit('doubleClick')
  protected doubleClickDispatch (event: MouseEvent) {
    return { row: this.row, event };
  }

  @Emit('cellClick')
  protected onCellClick (event: MouseEvent, cell: CellEntity) {
    if (cell.clickable) {
      return { event, cell, row: this.row };
    };
  }

  protected click (event: MouseEvent) {
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
  }
}
</script>
