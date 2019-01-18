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
import axios from 'axios';
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
	verify(mail) {
		mail && axios.get('http://localhost:3000/company/auth/check', { mail })
			.then((response) => {
				this.verified = true;
				this.alreadyRegistered = response.alreadyRegistered;
			});
	},
	signIn(mail, password) {
		mail && password && axios.post('http://localhost:3000/company/auth/signin', { mail, password });
	},
	signUp(mail, password) {
		mail && password && axios.post('http://localhost:3000/company/signup', { mail, password });
	}
  }
}
</script>