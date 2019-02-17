<template>
<div class="home">
	<header class="header">
		<nav>
			<ul>
				<li v-if="!isConnected"><a>S'inscrire</a></li>
				<li v-else @click="$router.replace('dashboard/stats');"><a>Tableau de bord</a></li>
				<li v-if="!isConnected" @click="signIn().then(() => $router.replace('dashboard/stats'));"><a>Se connecter</a></li>
				<li v-else @click="logout().then(() => $router.replace('/'));"><a>Se déconnecter</a></li>
			</ul>
		</nav>
		<div class="hero-wrapper">
		    <h3>Votre plateforme de reporting et dataviz</h3>
		    <h1><img height="66px" src="./../assets/img/LOGO BIG.svg" /></h1>
		    <h3>démocratisez l'accés A vos données d'entreprise</h3>
		    <div>
		        <CustomButton 
		        	classNames="btn--lg btn--blue btn--shadow"
		        	text="soyez les premiers !"
		        	:rounded="true"/>
		    </div>
		</div>
		<div class="icons">
				<img height="30px" width="30px" src="./../assets/img/facebook.svg" />
				<img height="30px" width="30px" src="./../assets/img/twitter.svg" />
				<img height="30px" width="30px" src="./../assets/img/linkedin.svg" />
	    </div>
        <CustomButton 
        	classNames="btn--lg btn--white-trans"
        	text="Explore"
        	:rounded="true"/>
	</header>

    <section class="description">
        <CustomButton 
        	classNames="btn--lg btn--white-trans"
        	text="Voici WeAreData"/>

	    <h1 class="tu">application de dataviz financiére pour les PME</h1>
	    <p>
	        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
	    </p>
	    <div class="conteneur flex">
	        <div class="item">
	            <img src="./../assets/img/icon4.svg" />
	            <p>Vos reporting centralisés</p>
	        </div>
	        <div class="item">
	            <img src="./../assets/img/icon3.svg" />
	            <p>Le suivi de vos activités en temps réel</p>
	        </div>
	        <div class="item">
	            <img src="./../assets/img/icon2.svg" />
	            <p>Un grain de temps pour le pilotage</p>
	        </div>
	        <div class="item">
	            <img src="./../assets/img/icon1.svg" />
	            <p>Des utilitaires pour votre entreprise</p>
	        </div>
	    </div>
	</section>

	<section class="how-it-works">
		<div class="">
		    <h4 class="title tu">comment ça marche?</h4>
		    <h1>Vos reporting d'entreprise réuni sur une seule application</h1>
		    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua</p>
	   	</div>
	   	<div class="left">
	   		<div class="item">
	   			<div>
				 	<span class="item-icon">1</span>
				</div>
	   			<div class="item-description">
				    <h1>Pluguer vos données</h1>
				    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>
			<div class="item">
				<div>
				 	<span class="item-icon">2</span>
				</div>
				<div class="item-description">
				    <h1>Laisser tourner notre application</h1>
				    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>
			<div class="item">
				<div>
				 	<span class="item-icon">3</span>
				</div>
				<div class="item-description">
				    <h1>Customiser vos reporting</h1>
				    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>
		</div>
	</section>

	<section class="form">
		<Card>
			<template slot="header">
				<h2 class="tu">offre de lancement</h2>
				<p>Inscrivez-vous et recevez prochainement <br/> un accés predium à l'application wearedata</p>
        	</template>

        	<template slot="body">
        		<form>
			            <div class="body-field">
			                <label>nom</label>
			                <br/>
			                <input type="text" v-model="company.nom" class="input" /> 
			            </div>
			            <div class="body-field">
			                <label for="lastname">prenom</label>
			                <br/>
			                <input type="text" v-model="company.prenom" class="input" /> 
			            </div>
			            <div class="body-field">
			                <label for="age">sociéte</label>
			                <br/>
			                <input type="text" v-model="company.societe" class="input" /> 
			            </div>
			            <div class="body-field">
			                <label for="siret">siret</label>
			                <br/>
			                <input type="text" v-model="company.siret" class="input" /> 
			            </div>
			            <div class="body-field">
			                <label for="mail">mail</label>
			                <br/>
			                <input type="text" v-model="company.email" class="input" /> 
			            </div>
			            <div class="body-field">
			                <label for="tele">telephone</label>
			                <br/>
			                <input type="text" v-model="company.telephone" class="input" /> 
			            </div>
			            <div>
			          		<Checkbox v-on:onToggle="toggleKeepInformed" classNames="checkbox--red" :checked="false"/>
				        	<label>Je souhaite informé des prochaines actualités de <b>wearedata</b></label>
				    	</div>
			    	</form>
        	</template>

        	<template slot="footer">
        		<CustomButton @click.native="saveCompany(company)" classNames="btn--lg btn--green tu" text="je m'inscris" />
	        </template>
		</Card>
	</section>
	<footer>
		<img height="23px" width="174px" src="./../assets/img/LOGO BIG.svg" />
		<span class="tu">copyright 2018</span>
		<div class="icons">
			<img height="30px" width="30px" src="./../assets/img/facebook.svg" />
			<img height="30px" width="30px" src="./../assets/img/twitter.svg" />
			<img height="30px" width="30px" src="./../assets/img/linkedin.svg" />
		</div>
	</footer>
</div>
</template>

<script>
// Import modules
import { mapState, mapActions } from "vuex";
// Import components
import CustomButton from '@/components/CustomButton.vue';
import Card from '@/components/Card.vue';
import Checkbox from '@/components/Checkbox.vue';

export default {
  name: 'home',
  components: {
	CustomButton,
	Card,
	Checkbox
  },

  computed: {
    ...mapState(['isConnected'])
  },

  data: () => {
	return {
		company: {
			nom: null,
			prenom: null,
			email: null,
			societe: null,
			siret: null,
			telephone: null,
			keepInformed: false
		}
	};
  },
  methods: {
	...mapActions(['saveCompany', 'signIn', 'logout']),

	toggleKeepInformed(checked) {
		this.company.keepInformed = checked;
	}
  }
}
</script>