import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state :{
		city :'上海'
	},
	actions :{
		changeCity (ctx,city){
			/* ctx用来调用commit */
			ctx.commit('changeCity',city)
		}
	},
	mutations :{
		changeCity (state,city){
			state.city=city
		}
	}
})