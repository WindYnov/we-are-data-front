<template>
	<select :class="classes">
    <option class="select-box-option" v-for="option in options">{{option.label}}</option>
  </select>
</template>

<script>
export default {
  name: 'select-box',
  props: {
  	options: Array
  },
  computed: {
  	classes() {
  		return `select-box ${this.classNames}`
  	}
  }
};
</script>
