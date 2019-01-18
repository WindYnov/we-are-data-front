import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		company: {}
	},
	mutations: {},
	actions: {
		saveCompany(state, company) {
			debugger;
			axios.post("http://localhost:3000/company/info", company);
		}
	}
});
