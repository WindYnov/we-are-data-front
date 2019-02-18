<template>
	<div class="login">
		<div><input placeholder="email" type="text" v-model="mail" class="input" /></div>
		<div v-if="verified">
			<input placeholder="password" v-if="alreadyRegistered" type="text" v-model="password" class="input" />
			<input placeholder="new password" v-else type="password" v-model="password" class="input" />
		</div>
		<div v-if="!verified">
			<CustomButton @click.native="mailVerification(mail, password)" classNames="btn--lg btn--green tu" text="Verify" />
		</div>
		<div v-else-if="!alreadyRegistered">
			<CustomButton @click.native="signingUp(mail, password)" classNames="btn--lg btn--green tu" text="Sign Up" />
		</div>
		<div v-else>
			<CustomButton @click.native="signIn({ mail, password }).then(() => $router.replace('dashboard/stats'))" classNames="btn--lg btn--green tu" text="Sign In" />
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
		verified: false,
		alreadyRegistered: false
	};
  },

  methods: {
	...mapActions(['verify', 'signIn', 'signUp']),
	mailVerification(mail, password) {
		this.verify(mail, password)
			.then(({ verified, alreadyRegistered }) => {
				this.verified = verified;
				this.alreadyRegistered = alreadyRegistered;
			});
	},

	signingUp(mail, password) {
		this.signUp({ mail, password })
			.then(() => this.$router.replace('dashboard/stats'));
	}
  }
}
</script>