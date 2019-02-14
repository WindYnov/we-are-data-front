<template>
  <span>
  	<CustomButton classNames="btn--lg btn--green tu" :text="text" @click.native="$el.lastChild.click()"/>
    <input style="display: none;" type="file" name="file" @change="$emit('uploadFile', $event)">
  </span>
</template>

<script>
// Import components
import CustomButton from '@/components/CustomButton.vue';

export default {
  name: 'input-file',
  components: {
    CustomButton
  },

  props: {
    text: String,
    classNames: String
  }
};
</script>
