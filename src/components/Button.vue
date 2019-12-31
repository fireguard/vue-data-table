<template>
  <div class="button-component" v-tooltip="tooltipsOptions" :class="[type]" @click="onClick">
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
  name: 'Button',
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

<style lang="scss">
@import '../themes/index.scss';
.button-component {
  font-size: 0.9em;
  cursor: pointer;
  padding: 3px 10px;
  border-radius: 4px;
  display: inline-block;
  margin: 2px;

  .disabled {
    cursor: no-drop;
  }

  .only-icon {
    font-size: 1.2em;
    font-weight: 900;
    margin-right: 4px;
  }

  .text-spaced {
    margin-left: 5px;
  }

  &.default, &.primary, &.warn, &.info, &.danger, &.success,
  &.default-outline, &.primary-outline, &.warn-outline, &.info-outline, &.danger-outline, &.success-outline,
  &.default-link, &.primary-link, &.warn-link, &.info-link, &.danger-link, &.success-link {
    border: 1px solid transparent;
  }

  &.default-link, &.primary-link, &.warn-link, &.info-link, &.danger-link, &.success-link  {
    border: 1px solid transparent;
    color: $tableBorder;
    padding: 2px;
  }

  &.default {
    background-color: $backgroudColor;
    color: $textColorDark;
    &:hover {
      border: 1px solid $tableBorder;
      color: $textColorDark;
    }
  }

  &.default-link {
    &:hover {
      color: $textColorDark;
    }
  }

  &.default-outline {
    border: 1px solid $tableBorder;
    color: $textColorDark;
    &:hover {
      background-color: $backgroudColor;
      color: $textColorDark;
    }
  }

  &.primary {
    background-color: $primary;
    color: $textColorLight;
    &:hover {
      border: 1px solid $primary;
      background-color: transparent;
      color: $primary;
    }
  }

  &.primary-link {
    &:hover {
      color: $primary;
    }
  }

  &.primary-outline {
    border: 1px solid $primary;
    color: $primary;
    &:hover {
      background-color: $primary;
      color: $textColorLight;
    }
  }

  &.success {
    background-color: $success;
    color: $textColorLight;
    &:hover {
      border: 1px solid $success;
      background-color: transparent;
      color: $success;
    }
  }

  &.success-link {
    &:hover {
      color: $success;
    }
  }

  &.success-outline {
    border: 1px solid $success;
    color: $success;
    &:hover {
      background-color: $success;
      color: $textColorLight;
    }
  }

  &.warn {
    background-color: $warn;
    color: $textColorLight;
    &:hover {
      border: 1px solid $warn;
      background-color: transparent;
      color: $warn;
    }
  }

  &.warn-link {
    &:hover {
      color: $warn;
    }
  }

  &.warn-outline {
    border: 1px solid $warn;
    color: $warn;
    &:hover {
      background-color: $warn;
      color: $textColorLight;
    }
  }

  &.info {
    background-color: $info;
    color: $textColorLight;
    &:hover {
      border: 1px solid $info;
      background-color: transparent;
      color: $info;
    }
  }

  &.info-link {
    &:hover {
      color: $info;
    }
  }

  &.info-outline {
    border: 1px solid $info;
    color: $info;
    &:hover {
      background-color: $info;
      color: $textColorLight;
    }
  }

  &.danger {
    background-color: $danger;
    color: $textColorLight;
    &:hover {
      border: 1px solid $danger;
      background-color: transparent;
      color: $danger;
    }
  }

  &.danger-link {
    &:hover {
      color: $danger;
    }
  }

  &.danger-outline {
    border: 1px solid $danger;
    color: $danger;
    &:hover {
      background-color: $danger;
      color: $textColorLight;
    }
  }
}
</style>
