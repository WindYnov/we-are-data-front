<template>
	<select v-model="value" :class="classes" @click="onSelectOption(value)">
    <option class="select-box-option" disabled :value="defaultOption">{{defaultOption.label}}</option>
    <option class="select-box-option" v-for="option in options" :value="option">{{option.label}}</option>
  </select>
</template>

<script>
export default {
  name: 'select-box',
  props: {
    options: Array,
    defaultOption: Object
  },

  data: () => {
    return {
      value: null
    };
  },

  computed: {
    classes() {
      return `select-box ${this.classNames}`
    }
  },

  methods: {
    onSelectOption(option) {
      option.key && this.$emit('onSelectOption', option);
    }
  },

  mounted() {
    this.value = this.defaultOption;
  }
};
</script>
