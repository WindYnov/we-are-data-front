import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		company: {},
		clients: [
			{
				nom: "SAKHIRI Mostafa",
				secteur: "Informatique",
				siret: "11566",
				mail: "mostafa@gmail.com",
				numero: "065889515"
			},
			{
				nom: "OTMANI Dina",
				secteur: "Informatique",
				siret: "8657",
				mail: "dina@gmail.com",
				numero: "0786565515"
			},
			{
				nom: "PRINCE Jéremy",
				secteur: "Informatique",
				siret: "99999",
				mail: "luffy@gmail.com",
				numero: "0786565515"
			}
		]
	},
	mutations: {
		addClient(state, client) {
			state.clients.push(client);
		}
	},
	actions: {
		saveCompany(state, company) {
			axios.post("http://localhost:3000/company/info", company);
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

		saveSalesInfos(salesInfos) {
			axios.post("http://localhost:3000/company/salesinfos", salesInfos);
		},
		processFile(event) {
			let file = event.target.files[0];
			this.file = file;
			axios.post("http://localhost:3000/company/sales/file", file);
		},

		saveClient(state, client) {
			debugger;
			state.commit("addClient", client);
		}
	}
});
