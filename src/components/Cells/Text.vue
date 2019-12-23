<template>
  <span class="cell-text-component">{{ text }}</span>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  props: {
    text: String,
  },
});
</script>

<style lang="scss">
.cell-text-component {

}
</style>
