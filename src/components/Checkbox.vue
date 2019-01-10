<template>
	<label :class="`checkbox--container ${classNames}`">
    <input type="checkbox">
    <span @click="checked=!checked" class="checkbox--checkmark">
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
  }
};
</script>
