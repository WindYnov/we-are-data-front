<template>
	<div lass="card">
    <div class="header"><slot name="header"></slot></div>
    <div class="body"><slot name="body"></slot></div>
    <div class="footer"><slot name="footer"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'card'
};
</script>
