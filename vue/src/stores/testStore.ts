import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
// import { useRoute } from 'vue-router'

export type test = { id: number, param1: string, param2: number, param3: string }

export const useTestStore = defineStore( 'testStore', () => {
    const someState = ref('Hello Pinia')
    const testList = ref([])
    // const testList = ref<test[]>([])
    const baseUrl = 'https://perspectionapp-server.onrender.com/tests/'

    async function fetchTests() {
        try {
            const response = await axios.get(baseUrl)
            testList.value = response.data
            console.log(testList.value)
        } catch (error) {
            console.error(error)
        }
    }

    return { 
        someState,
        testList,
        fetchTests
     }
    },
    {
        persist: true,
    }
)