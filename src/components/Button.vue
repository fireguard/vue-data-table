<template>
  <div class="button-component" @click="onClick">
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

export default Vue.extend({
  name: 'Button',
  props: {
    label: {
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
  },
  computed: {
    getIconClasses () {
      const iconClass = [this.iconClass, this.icon];
      if (!this.label) {
        iconClass.push('only-icon');
      }
      console.error(iconClass);
      return iconClass;
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

<style lang="scss">
.button-component {
  cursor: pointer;
  padding: 3px 10px;
  border-radius: 4px;
  display: inline-block;

  .disabled {
    cursor: no-drop;
  }

  .only-icon {
    font-size: 16px;
  }

  .text-spaced {
    margin-left: 5px;
  }
}
</style>
