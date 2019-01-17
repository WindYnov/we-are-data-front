<template>
	<input type="text" :class="classes"/>
</template>

<script>
export default {
  name: 'custom-input',
  props: {
  	text: String,
  	classNames: String
  },
  computed: {
  	classes() {
  		return `input ${this.classNames}`
  	}
  }
};
</script>
