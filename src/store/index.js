/*
 * @Author: monster.huangwei 
 * @Date: 2018-11-04 16:55:52 
 * @Last Modified by: monster.huangwei
 * @Last Modified time: 2018-11-13 00:12:29
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import home from './modules/home';
import Authentication from './modules/Authentication';
import companyAddress from './modules/companyAddress';
import merchantAccount from './modules/merchantAccount';
import LegalPersonPhoto from './modules/LegalPersonPhoto';

Vue.use(Vuex)

export default new Vuex.Store({
    strict: false,
    state,
    getters,
    mutations,
    actions,
    modules: {
        home,
        Authentication,
        companyAddress,
        merchantAccount,
        LegalPersonPhoto
    }
})
