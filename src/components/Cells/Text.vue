<template>
  <span class="cell-text-component">{{ label }}</span>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CellText',
  props: {
    label: String,
  },
});
</script>

<style lang="scss">
.cell-text-component {

}
</style>
