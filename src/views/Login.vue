<template>
	<div class="login">
		<div><input placeholder="email" type="text" v-model="mail" class="input" /></div>
		<div v-if="verified">
			<input placeholder="password" v-if="alreadyRegistered" type="text" v-model="password" class="input" />
			<input placeholder="new password" v-else type="text" v-model="password" class="input" />
		</div>
		<div v-if="!verified">
			<CustomButton @click.native="verify(mail, password)" classNames="btn--lg btn--green tu" text="Verify" />
		</div>
		<div v-else-if="!alreadyRegistered">
			<CustomButton @click.native="signUp(mail, password)" classNames="btn--lg btn--green tu" text="Sign Up" />
		</div>
		<div v-else>
			<CustomButton @click.native="signIn(mail, password)" classNames="btn--lg btn--green tu" text="Sign In" />
		</div>
	</div>
</template>

<script>
// Import modules
import { mapActions } from 'vuex';
// Import components
import CustomButton from '@/components/CustomButton.vue';

export default {
  name: 'home',
  components: {
	CustomButton
  },
  data: () => {
	return {
		mail: null,
		password: null,
		verified: false
	};
  }, methods: {
	...mapActions(['verify', 'signIn', 'signUp'])
  }
}
</script>