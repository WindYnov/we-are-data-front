import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		company: {
			nom: 'Sakhiri',
			prenom: 'Mostafa'
		},
		sales: [
		{
			numFacture:123,
            dateFacture: 230,
            productName: 400,
            totalHT: 400,
            tauxTVA: 20,
            qteVendue: 400,
            client: 400,
            productsType: 400,
            activityArea: 400
        }, {
			numFacture:123,
            dateFacture: 230,
            productName: 400,
            totalHT:400,
            tauxTVA: 20,
            qteVendue: 400,
            client: 400,
            productsType: 400,
            activityArea: 400
		},
		{
			numFacture:123,
            dateFacture: 230,
            productName: 400,
            totalHT: 400,
            tauxTVA: 20,
            qteVendue: 400,
            client: 400,
            productsType: 400,
            activityArea: 400
		}],
		clients: [
			{
				_id: 1,
				nom: "SAKHIRI Mostafa",
				secteur: "Informatique",
				siret: "11566",
				mail: "mostafa@gmail.com",
				telephone: "065889515"
			},
			{
				_id: 2,
				nom: "OTMANI Dina",
				secteur: "Informatique",
				siret: "8657",
				mail: "dina@gmail.com",
				telephone: "0786565515"
			},
			{
				_id: 3,
				nom: "PRINCE Jéremy",
				secteur: "Informatique",
				siret: "99999",
				mail: "luffy@gmail.com",
				telephone: "0786565515"
			}
		],
		darkTheme: true
	},
	mutations: {
		addClient(state, client) {
			state.clients.push(client);
		},

		addSalesInfos(state, sales) {
			state.sales.push(sales);
		},

		switchTheme(state) {
			state.darkTheme = !state.darkTheme;
		}
	},
	actions: {
		saveCompany(state, company) {
			axios.post("http://localhost:3000/company/info", company);
		},

		updateCompany(state, company) {
			axios.put("http://localhost:3000/company/info", company);
		},

		verify(mail) {
			mail &&
				axios
					.get("http://localhost:3000/company/auth/check", { mail })
					.then(response => {
						this.verified = true;
						this.alreadyRegistered = response.alreadyRegistered;
					});
		},

		signIn(mail, password) {
			mail &&
				password &&
				axios.post("http://localhost:3000/company/auth/signin", {
					mail,
					password
				});
		},
		signUp(mail, password) {
			mail &&
				password &&
				axios.post("http://localhost:3000/company/signup", {
					mail,
					password
				});
		},

		saveSalesInfos(state, salesInfos) {
			state.commit("addSalesInfos", salesInfos);
		},
		processFile(event) {
			let file = event.target.files[0];
			this.file = file;
			axios.post("http://localhost:3000/company/sales/file", file);
		},

		saveClient(state, client) {
			state.commit("addClient", client);
		},

		switchTheme(state) {
			state.commit("switchTheme");
		}
	}
});
