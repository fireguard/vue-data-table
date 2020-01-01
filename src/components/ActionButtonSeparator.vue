<template>
  <span class="action-button-separator-component" ></span>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ActionButtonSeparator extends Vue {}
</script>

<style lang="scss">
@import '../themes/variables';
.action-button-separator-component {
  margin: 0 5px;
  border-right: 1px solid $tableBorder;
}
</style>
