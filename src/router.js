import Vue from 'vue'
import Router from 'vue-router'
import home from './views/Home.vue'
import LegalPersonPhoto from './views/LegalPersonPhoto.vue'
import auxiliary from './views/auxiliary.vue'

Vue.use(Router)

export default new Router({
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/LegalPersonPhoto',
            name: 'LegalPersonPhoto',
            component: function () {
                return import('./views/LegalPersonPhoto.vue')
            }
        },
        {
            path: '/auxiliary',
            name: 'auxiliary',
            component: function () {
                return import('./views/auxiliary.vue')
            }
        },{
            path: '/ShopPhoto',
            name: 'ShopPhoto',
            component: function () {
                return import('./views/ShopPhoto.vue')
            }
        }, {
            path: '/companyAddress',
            name: 'companyAddress',
            component: function () {
                return import('./views/companyAddress.vue')
            }
        }, {
            path: '/merchantAccount',
            name: 'merchantAccount',
            component: function () {
                return import('./views/merchantAccount.vue')
            }
        },
        {
            path: '/Authentication',
            name: 'Authentication',
            component: function () {
                return import('./views/Authentication.vue')
            }
        },
        {
            path: '/companyAddress',
            name: 'companyAddress',

            component: function () {
                return import('./views/companyAddress.vue')
            }
        },
        {
            path: '/merchantAccount',
            name: 'merchantAccount',
            component: function () {
                return import('./views/merchantAccount.vue')
            }
        }, {
            path: '/agreement',
            name: 'agreement',
            component: function () {
                return import('./views/agreement.vue')
            }
        }, {
            path: '/ApplySubmit',
            name: 'ApplySubmit',
            component: function () {
                return import('./views/ApplySubmit.vue')
            }
        }, {
            path: '/result',
            name: 'result',
            component: function () {
                return import('./views/Result.vue')
            }
        },
    ]
})
