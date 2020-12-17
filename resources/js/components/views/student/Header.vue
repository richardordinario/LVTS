<template>
    <div x-data="sidebarOpen" class="flex h-screen bg-gray-200">
        <div :class="sidebarOpen ? 'block' : 'hidden'" @click="showSidebar" class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>
        <Sidebar :sidebarOpen="sidebarOpen"/>
        <div class="flex-1 flex flex-col overflow-hidden">
             <header class="flex justify-between items-center py-4 px-6 bg-white border-b-2 border-gray-300">
                <div class="flex items-center">
                    <button @click="showSidebar" class="text-gray-500 focus:outline-none lg:hidden">
                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                    </button>
                     <h1 class="text-gray-800 text-xl ml-3">Laravel Vuex Tailwind</h1>
                </div>

                <div class="flex items-center">
                    <div x-data="{ dropdownOpen: false }" class="relative">
                        <button @click="dropdownOpen = ! dropdownOpen"
                            class="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                            <img class="h-full w-full object-cover"
                                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                                alt="Your avatar">
                        </button>

                        <div x-show="dropdownOpen" @click="dropdownOpen = false" class="fixed inset-0 h-full w-full z-10"
                            style="display: none;"></div>

                        <div x-show="dropdownOpen"
                            class="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10"
                            style="display: none;">
                            <a href="#"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Profile</a>
                            <a href="#"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Products</a>
                            <a href="/login"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Logout</a>
                        </div>
                    </div>
                </div>
            </header>
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                <div class="container mx-auto px-6 py-8">
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue'

export default {
    name: 'Header',
    components: {
        Sidebar
    },
    data() {
        return {
            sidebarOpen: false
        }
    },
    methods: {
        showSidebar() {
            this.sidebarOpen = !this.sidebarOpen
            console.log(this.sidebarOpen)
        }
    }
}
</script>