import vue from 'vue'
import VueRouter from 'vue-router'
import Index from './../components/views/student/Index.vue'
import Dashboard from './../components/views/student/Dashboard.vue'
import Subject from './../components/views/student/Subject.vue'
import Account from './../components/views/student/Account.vue'
import Login from './../components/views/auth/Login.vue'
import Register from './../components/views/auth/Register.vue'

vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {guest: true}
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {guest: true}
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {requiresAuth: true},
        
    },
    {
        path: '/account',
        name: 'account',
        component: Account,
        meta: {requiresAuth: true},
    }, 
    {
        
        path: '/subject',
        name: 'subject',
        component: Subject,
        meta: {requiresAuth: true},
    
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})

function loggedIn() {
    return localStorage.getItem('token')
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!loggedIn()) {
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
        } else {
        next()
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if (loggedIn()) {
            next({
                path: '/dashboard',
                query: { redirect: to.fullPath }
            })
            } else {
            next()
            }
    }else {
        next() // make sure to always call next()!
    }
})

export default router
