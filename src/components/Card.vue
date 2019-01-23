<template>
	<div class="card">
    <CardHeader v-if="title" :title="title" />
    <div v-else class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import CardHeader from '@/components/CardHeader.vue';
import CardBody from '@/components/CardBody.vue';

export default {
  name: 'card',
  props: {
    title: String
  },
  components: {
    CardHeader,
    CardBody
  }
};
</script>
