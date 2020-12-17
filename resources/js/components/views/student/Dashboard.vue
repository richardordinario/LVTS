<template>
      <div class="md:flex m-2">
        <div class="flex-auto bg-orange-200 rounded-xl h-100 w-100 p-6 m-2">
            <h1>Flex 1</h1>
        </div>
        <div class="flex-auto bg-blue-200 rounded-xl h-100 w-100 p-6 m-2">
            <h1>Flex 2</h1>
        </div>
        <div class="flex-auto bg-teal-200 rounded-xl h-100 w-100 p-6 m-2">
            <h1>Flex 3</h1>
        </div>
        <div class="flex-auto bg-yellow-200 rounded-xl h-100 w-100 p-6 m-2">
            <h1>Flex 4</h1>
        </div>
    </div>
</template>
<script>
import User from '../../../api/User'

export default {
    data() {
        return {
            sidebarOpen: false,
            user: null
        }
    },
    methods: {
        getUser() {
            User.auth().then(res => {
                this.user = res.data
                console.log(res.data)
            })
        }
    },
    mounted() {
        this.getUser()
    }
}
</script>