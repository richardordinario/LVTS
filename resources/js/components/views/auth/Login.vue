<template>
    <main class="sm:container sm:mx-auto sm:max-w-lg sm:mt-10">
        <div class="">
            <div class="w-full">
                <section class="flex flex-col bg-white shadow-lg rounded-b-md">
                    <header class="bg-gray-700 text-gray-200 py-4 rounded-t-md px-5">
                        Login
                    </header>
                    <form class="w-full space-y-6 px-10 py-8" @submit.prevent="frmLogin">
                        <div class="flex flex-wrap">
                            <label for="" class="block text-gray-800 text-md font-bold mb-2 sm:mb-4">
                                Email
                            </label>
                            <input :class="{'border-red-500':errors.email}" v-model="form.email" type="email" class="form-input w-full">
                            <small class="text-red-500 font-bold">{{ errors.email }}</small>
                        </div>
                        <div class="flex flex-wrap">
                            <label for="" class="block text-gray-800 text-md font-bold mb-2 sm:mb-4">
                                Password
                            </label>
                            <input :class="{'border-red-500':errors.password}" v-model="form.password" type="password" class="form-input w-full">
                            <small class="text-red-500 font-bold">{{ errors.password }}</small>
                        </div>
                        <div class="flex flex-wrap">
                            <button type="submit"
                            class="w-full select-none  whitespace-no-wrap p-2 rounded-md
                            text-base leading-normal no-underline text-gray-100 bg-blue-500
                            hover:bg-blue-700 sm:py-2">
                                Login
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </main>
</template>
<script>
import User from '../../../api/User'

export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
                device_name: 'browser'
            },
            errors: []
        }
    },
    methods: {
        frmLogin() {
            User.login(this.form).then(res => {
                this.$root.$emit('login', true)
                localStorage.setItem('token', res.data)
                this.$router.push('/dashboard')
                console.log(res.data)
            }).catch(errors => {
                 this.errors = errors.response.data.errors
            })
        }
    }
}
</script>