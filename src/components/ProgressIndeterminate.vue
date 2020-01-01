<template>
  <div class="progress-indeterminate-component">
    <div class="progress-bar"></div>
    <div class="progress-indeterminate inc"></div>
    <div class="progress-indeterminate dec"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ProgressIndeterminate extends Vue {}
</script>

