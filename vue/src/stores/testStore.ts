import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
// import { useRoute } from 'vue-router'

export type test = { id: number, param1: string, param2: number, param: string }

export const useTestStore = defineStore( 'testStore', () => {
    const someState = ref('Hello Pinia')
    const testList = ref<test[]>([])
    const baseUrl = 'https://perspectionapp-server.onrender.com/tests/9'

    async function fetchTests() {
        try {
            const response = await axios.get(baseUrl)
            testList.value = response.data
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