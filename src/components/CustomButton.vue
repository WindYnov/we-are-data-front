<template>
	<button :class="classes">{{text}}</button>
</template>

<script>
export default {
  name: 'custom-button',
  props: {
  	text: String,
  	rounded: Boolean,
  	classNames: String
  },
  computed: {
  	classes() {
  		if (this.rounded) {
  			this.classNames += ' btn--rounded';
  		}
  		return `btn ${this.classNames}`
  	}
  }
};
</script>
