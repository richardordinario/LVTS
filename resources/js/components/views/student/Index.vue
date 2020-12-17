<template>
    <div class="flex">
        <span class="text-lg">Dashboard</span>
    </div>
</template>
<script>
import User from '../../../api/User'

export default {
    data() {
        return {
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