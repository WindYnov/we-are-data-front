<template>
	<label :class="`checkbox--container ${classNames}`">
    <input type="checkbox" :checked="checked">
    <span @click="toggle(!checked)" class="checkbox--checkmark">
      <span v-if="checked">✔</span>
    </span>
  </label>
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    checked: Boolean,
    classNames: String
  },
  methods: {
    toggle(checked) {
      this.checked = checked;
      this.$emit('onToggle', checked);
    }
  }
};
</script>
