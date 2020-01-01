<template>
  <span class="cell-icon-component" :style="{color: cell.color}">
    <i :class="[cell.class, cell.icon]" :style="{fontSize: cell.size}"></i> {{ cell.label }}
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import IconEntity from '../../entities/Cells/Icon';

@Component
export default class CellIcon extends Vue {
  @Prop() readonly cell!: IconEntity;
}
</script>
