<template>
    <div id="MainApp" x-data="sidebarOpen" class="flex h-screen bg-white">
        <div v-if="isAuth" :class="sidebarOpen ? 'block' : 'hidden'" @click="showSidebar" class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>
        <Sidebar v-if="isAuth" :sidebarOpen="sidebarOpen"/>
        <div class="flex-1 flex flex-col overflow-hidden">
             <header class="flex justify-between items-center py-4 px-6 bg-white border-b-2 border-gray-300">
                <div class="flex items-center">
                    <button @click="showSidebar" class="text-gray-500 focus:outline-none lg:hidden">
                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                    </button>
                     <h1 class="text-gray-800 text-xl ml-3">LMS</h1>
                </div>

                <div class="flex items-center">
                   <nav class="space-x-4 test-gray-300">
                        <a v-if="!isAuth" href="" > <router-link to="/login">Login</router-link></a>
                        <a v-if="isAuth" href="" @click.prevent="logout">Logout</a>
                        <a v-if="!isAuth" href="" > <router-link to="/register">Register</router-link></a>
                    </nav>
                </div>
            </header>
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-white">
                <div class="container mx-auto px-6 py-8">
                    <router-view/></router-view>
              
                </div>
            </main>
        </div>
    </div>
</template>
<script>
import Sidebar from './components/views/student/Sidebar.vue'
import User from './api/User'

export default {
    data() {
        return {
            isAuth: false,
            sidebarOpen: false
        }
    },
    components: {
        Sidebar
    },
    methods: {
        logout() {
            User.logout().then(res => {
                this.isAuth = false
                localStorage.removeItem('token')
                this.$router.push('/login')
            }).catch(errors => {
                console.log(errors.response)
            })
        },
        getAuth() {
            this.isAuth = !!localStorage.getItem('token')
        },
         showSidebar() {
            this.sidebarOpen = !this.sidebarOpen
            console.log(this.sidebarOpen)
        }
    },
    mounted() {
        this.$root.$on('login', () => {
            this.isAuth = true
        })
        this.getAuth()

    }
}
</script>