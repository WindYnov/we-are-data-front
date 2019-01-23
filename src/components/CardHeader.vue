<template>
	<div class="card-header">
    	<h2>{{title}}</h2>
  	</div>
</template>

<script>
export default {
  name: 'card-header',
  props: {
    title: String
  }
};
</script>
