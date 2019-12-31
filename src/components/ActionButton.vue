<template>
  <div class="action-button-component" v-tooltip="tooltipsOptions" :class="[type]" @click="onClick">
    <i :class="getIconClasses" v-if="icon"></i>
    <span
      class="button-label"
      :class="{'text-spaced': icon }"
      v-if="label"
    >{{ label }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { VTooltip } from 'v-tooltip';

export default Vue.extend({
  name: 'ActionButton',
  directives: {
    'tooltip': VTooltip,
  },
  props: {
    label: {
      type: String,
      default: undefined,
    },
    description: {
      type: String,
      default: undefined,
    },
    icon: {
      type: String,
      default: undefined,
    },
    iconClass: {
      type: String,
      default: 'fa',
    },
    type: {
      type: String,
      default: 'default',
    },
    animation: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    getIconClasses () {
      const iconClass = [this.iconClass, this.icon];
      if (!this.label) {
        iconClass.push('only-icon');
      }
      if (this.animation) {
        iconClass.push(this.animation);
      }
      return iconClass;
    },
    tooltipsOptions () {
      return {
        content: this.description || '',
        delay: {
          show: 500,
          hide: 100,
        },
      };
    },
  },
  methods: {
    onClick (event: MouseEvent) {
      this.$emit('click', event);
    },
  },
  data () {
    return {

    };
  },
});
</script>
