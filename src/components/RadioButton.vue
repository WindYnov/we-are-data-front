<template>
	<label :class="`radio--container ${classNames}`">
    <input type="radio">
    <span @click="checked=!checked" class="radio--checkmark">
      <span class="radio--icon" v-if="checked"></span>
    </span>
  </label>
</template>

<script>
export default {
  name: 'radio',
  props: {
    checked: Boolean,
    classNames: String
  }
};
</script>
