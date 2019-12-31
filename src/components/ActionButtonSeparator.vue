<template>
  <span class="action-button-separator-component" ></span>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ActionButtonSeparator',
  props: {

  },
});
</script>

<style lang="scss">
@import '../themes/variables';
.action-button-separator-component {
  margin: 0 5px;
  border-right: 1px solid $tableBorder;
}
</style>
