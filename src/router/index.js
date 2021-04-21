import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: '',
    routes: [{
            path: '/',
            name: 'Landing',
            component: () => import ('@/views/Landing.vue'),
            children: [],
        },
        
    ]
})

export default router