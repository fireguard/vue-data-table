<template>
  <div class="action-button-component" v-tooltip="tooltipsOptions" :class="[type]" @click="onClick">
    <i :class="iconClass" v-if="icon"></i>
    <span
      class="button-label"
      :class="{ 'text-spaced': icon }"
      v-if="label"
    >{{ label }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { VTooltip } from 'v-tooltip';

@Component({
  directives: {
    'tooltip': VTooltip,
  },
})
export default class ActionButton extends Vue {
  @Prop() private label?: string;
  @Prop() private description?: string;
  @Prop() private icon?: string;
  @Prop() private iconClass?: string = 'fa';
  @Prop() private type: string = 'default';
  @Prop() private animation?: string;

  get iconClasses () {
    const iconClass = [this.iconClass, this.icon];
    if (!this.label) {
      iconClass.push('only-icon');
    }
    if (this.animation) {
      iconClass.push(this.animation);
    }
    return iconClass;
  }

  get tooltipsOptions () {
    return {
      content: this.description || '',
      delay: {
        show: 500,
        hide: 100,
      },
    };
  }

  @Emit('click')
  protected onClick (event: MouseEvent) {
    return event;
  }
}
</script>
