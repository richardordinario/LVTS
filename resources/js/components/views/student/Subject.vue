<template>
    <div class="flex-1 m-2">
        <div class="flex items-center justify-between">
            <h1 class="text-gray-800 text-4xl">Subject Management</h1>
            <button @click="showModal" class=" bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">New Course</button>
        </div>


         <!--Modal-->
        <div v-if="modalShow" class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div @click="showModal" class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div class="modal-container bg-white w-11/12 md:max-w-lg mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
            <!-- Add margin if you want to see some of the overlay behind the modal-->
                <div class="modal-content py-2 text-left px-6">
                    <!--Title-->
                    <div class="flex justify-between items-center pb-3 mt-3">
                    <p class="text-3xl text-gray-700 font-bold">Add Subject</p>
                    <div @click="showModal" class="modal-close hover:text-md cursor-pointer z-50">
                        <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                        </svg>
                    </div>
                    </div>
                    <!--Body-->
                     <form @submit.prevent="submit" class="p-6 flex flex-col justify-center">
                        <div class="flex flex-col">
                            <label for="name" class="hidden">Subject Name</label>
                            <input type="text" v-model="frmCourse.code" placeholder="Subject Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
                        </div>

                        <div class="flex flex-col mt-2">
                            <label for="email" class="hidden">Subject Category</label>
                            <select  class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
                                <option value="English">English</option>
                                <option value="Math">Math</option>
                            </select>
                        </div>
                    <!--Footer-->
                    <div class="flex justify-end space-x-2 mt-5">
                    <button type="submit"  class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-500 transition ease-in-out duration-300">Submit</button>
                    <button @click="showModal"  class="md:w-32 bg-red-600 hover:bg-red-dark text-white font-bold py-3 px-6 rounded-lg hover:bg-red-500 transition ease-in-out duration-300">Close</button>
                    </div>
                     </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            modalShow: false,
            frmCourse: {
                code: null,
                desc: null,
            }
        }
    },
    methods: {
        submit() {
            alert(this.frmCourse.code)
        },
        showModal() {
            this.modalShow = !this.modalShow
        }
    }
}
</script>
