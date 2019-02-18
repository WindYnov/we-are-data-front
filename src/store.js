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

		settings: [
          { title: 'Mes informations', route: '/dashboard/personalsettings', active: false },
          { title: 'Mes ventes', route: '/dashboard/sales', active: false },
          { title: 'Mes clients', route: '/dashboard/clients', active: false },
          { title: 'Statistiques', route: '/dashboard/stats', active: false },
          { title: 'Simulateur', route: '/dashboard/simulateur', active: false }
        ],

        isConnected: !!localStorage.weAreDataSession,

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
        },
        {
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
		},

		activateSetting(state, route) {
			let activeRoute = state.settings.find((setting) => setting.route === route);
			if (activeRoute) {
				state.settings.map((setting) => setting.active = false);
				activeRoute.active = true;
			}
		},

		refreshConnection(state, isConnected) {
			state.isConnected = isConnected;
		}
	},
	actions: {
		saveCompany(state, company) {
			return axios.post("http://localhost:3000/companies/register", company);
		},

		updateCompany(state, company) {
			axios.put("http://localhost:3000/company/info", company);
		},

		verify(state, mail) {
			return mail &&
				axios
					.post("http://localhost:3000/companies/verify", { email: mail })
					.then((response) => {
						return {
							verified: response.data.verified,
							alreadyRegistered: response.data.alreadyRegistered
						};
					});
		},

		signIn(state, mail, password) {
			return axios
				.post("http://localhost:3000/companies/finalised", {
					email: mail,
					password
				})
				.then((response) => {
					let session = JSON.stringify({ token: response.data.token });
					localStorage.setItem('weAreDataSession', session);
					state.commit("refreshConnection", !!session);
				});
		},
		signUp(state, { mail, password }) {
			return axios
				.post("http://localhost:3000/companies/finalised", {
					email: mail,
					password
				})
				.then((response) => {
					let session = JSON.stringify({ token: response.data.token });
					localStorage.setItem('weAreDataSession', session);
					state.commit("refreshConnection", !!session);
				});
		},
		logout(state) {
			return axios
				.post("http://localhost:3000/company/logout")
				.then(() => {
					localStorage.removeItem('weAreDataSession');
					state.commit("refreshConnection", false);
				})
				.then((response) => {
					debugger;
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
		},

		activateSetting(state, route) {
			state.commit('activateSetting', route);
		}
	}
});
