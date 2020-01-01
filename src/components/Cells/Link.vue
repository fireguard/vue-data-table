<template>
  <span class="cell-link-component">
    <router-link v-if="cell.route" :to="cell.route" >{{ cell.label }}</router-link>
    <a v-else :href="cell.url" :target="cell.target">
      {{ cell.label }}
    </a>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LinkEntity from '../../entities/Cells/Link';

@Component
export default class CellLink extends Vue {
  @Prop() readonly cell!: LinkEntity;
}
</script>
