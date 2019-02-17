<template>
<div class="simulateur">
<input v-model="ca" placeholder="Le Chiffres d’affaires " type="number"/>
<input v-model="charges" placeholder="Les charges de l’entreprise" type="number"/>
<CustomButton @click.native="calculate(ca, charges)" classNames="btn--lg btn--green tu" text="Calculer" />
<div>
	<div v-if="marge">La marge: {{marge}} €</div>
	<div v-if="imposition">imposition: {{imposition}} €</div>
	<div v-if="marge && imposition">Résultat après impôts: {{result}} €</div>
	<div>
		<span v-if="imposition < 10000">le résultat est trop bas pour faire de l’optimisation fiscale.</span>
		<span v-else-if="imposition >= 10000 && imposition < 30000">
			nous vous invitions à consulter les sites d’infos suivants: fournir une liste de site:
			<a href="https://www.impots.gouv.fr/portail/professionnel">https://www.impots.gouv.fr/portail/professionnel</a>
		</span>
		<span v-else-if="imposition > 50000">
			<iframe src="https://annuaire.experts-comptables.org/?page=1&nomRaisonSociale=&villeCodePostal=92000" height="400px" width="80%"></iframe>
		</span>
	</div>
</div>

</div>
</template>

<script>
// Import modules
import { mapActions } from 'vuex';
// Import components
import CustomButton from '@/components/CustomButton.vue';

export default {
  name: 'simulateur',
  components: {
	CustomButton
  },
  data: () => {
	return {
		ca: null,
		charges: null,
		marge: null,
		imposition: null,
		result: null
	};
  },
  methods: {
    ...mapActions(['activateSetting']),
	calculate(ca, charges) {
		let marge = ca - charges;
		this.marge = marge;
		let imposition = marge <= 38120 ? (marge * 15) / 100 : (marge * 28) / 100;
		this.imposition = imposition;
		this.result = marge - imposition;
	}
  },

  mounted() {
    this.activateSetting('/dashboard/simulateur');
  }
}
</script>