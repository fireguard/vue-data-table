<template>
  <th
    class="header-component"
    :class="getHeaderClasses()"
    :style="{'minWidth': header.minWidth || '0', 'textAlign': header.align }"
    @click="handlerClick"
  >
    {{ header.label }}
  </th>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderEntity from '../entities/Header';

export default Vue.extend({
  name: 'Header',
  props: {
    label: String,
    align: {
      type: String,
      default: 'left',
    },
    header: {
      type: Object as () => HeaderEntity,
      required: true,
    },
    ordered: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handlerClick () {
      this.$emit('click', this.header);
    },
    getHeaderClasses () {
      let classes = [];
      if (this.header.searchable) {
        classes.push('searchable');
      }
      if (this.header.orderable !== false) {
        classes.push('orderable');
      }
      if (this.header.orderable !== false && this.ordered) {
        classes.push(this.header.orderDirection === 'desc' ? 'desc' : 'asc');
      }
      return classes;
    },
  },
});
</script>

<style lang="scss">
.header-component {
  &.orderable {
    cursor: pointer;
    &::before {
      padding: 1px 0;
      content: "\f0dc";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      font-size: 14px;
      opacity: 0.2;
    }
    &.asc::before {
      content: "\f15d";
      opacity: 0.7;
    }
    &.desc::before {
      content: "\f882";
      opacity: 0.7;
    }
  }
  &.searchable {
    &::after {
      cursor: default;
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      content: "\f002";
      font-size: 12px;
      padding: 3px;
      float: right;
      opacity: 0.4;
    }
  }
}
</style>
