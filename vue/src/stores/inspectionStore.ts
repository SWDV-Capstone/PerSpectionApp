import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
// import { useRoute } from 'vue-router'

export type inspectionList = { id: number, param1: string, param2: number, param3: string }[]
export type inspection = { id: number, param1: string, param2: number, param3: string }

export const useInspectionStore = defineStore( 'inspectionStore', () => {
    const someState = ref('Hello Pinia Inspections')
    const inspectionList = ref([])
    const baseUrl = 'https://perspectionapp-server.onrender.com/inspections/'

    async function fetchInspections() {
        try {
            const response = await axios.get(baseUrl)
            inspectionList.value = response.data
            console.log(inspectionList.value)
        } catch (error) {
            console.error(error)
        }
    }

    return { 
        someState,
        inspectionList,
        fetchInspections
     }
    },
    {
        persist: true,
    }
)