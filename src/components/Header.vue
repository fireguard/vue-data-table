<template>
  <th
    class="header-component"
    :class="{'searchable': searchable, 'orderable': orderable}"
    :style="{'minWidth': minWidth || '0', 'textAlign': align }"
  >
    {{ text }}
  </th>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  props: {
    text: String,
    align: {
      type: String,
      default: 'left',
    },
    searchable: {
      type: Boolean,
      default: false,
    },
    orderable: {
      type: Boolean,
      default: true,
    },
    minWidth: {
      type: String,
      default: null,
    },
  },
});
</script>

<style lang="scss">
.header-component {
  &.orderable {
    cursor: pointer;
    &::before {
      padding: 1px;
      content: '>';
    }
  }
  &.searchable {
    &::after {
      cursor: default;
      padding: 1px;
      content: ' ';
      background-image: url('../assets/icons/search.svg');
      background-size: 12px 12px;
      background-repeat: no-repeat;
      background-position: left 4px;
      width: 12px;
      height: 16px;
      float: right;
      opacity: 0.4;
    }
  }
}
</style>
