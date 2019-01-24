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
export default {
  name: 'card',
  props: {
    title: String
  }
};
</script>
