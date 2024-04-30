import { defineStore } from 'pinia'
import axios from 'axios'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

export type point = { id: number, param1: string, param2: number, param3: string }

export const usePointStore = defineStore( 'pointStore', () => {
    const someState = ref('Hello Pinia Points')
    const pointList = ref([])
    // const pointList = ref<test[]>([])
    // const baseUrl = 'https://perspectionapp-server.onrender.com/points/'
    const baseUrl = 'https://perspectionapp-server.onrender.com/perspectionDb/points/'

    async function fetchPoints() {
        try {
            const response = await axios.get(baseUrl)
            pointList.value = response.data
            console.log(pointList.value)
        } catch (error) {
            console.error(error)
        }
    }

    async function addPoint(point: point) {
        try {
            const response = await axios.post(baseUrl, point)
            pointList.value.push(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    async function deletePoint(id: number) {
        try {
            const response = await axios.delete(baseUrl + id)
            pointList.value = response.data
        } catch (error) {
            console.error(error)
        }
    }
    async function updatePoint(point: point) {
        try {
            const response = await axios.put(baseUrl + point.id, point)
            pointList.value = response.data
        } catch (error) {
            console.error(error)
        }
    }
    // Update status of point measurement
    const pointStatus = ref(false)
    const id = ref('')
    async function updateStatus(data) {
        try {
            const response = await axios.patch(baseUrl + data.id, data)
            pointList.value = response.data
        }
        catch (error) {
            console.error(error)
        }
    }
    // Find the points for the current inspection
    const route = useRoute()
    const currentInspectionPoints = computed(() => {
        const newPointList = pointList.value.filter((point: point) => point.param1 === route.params.id)
        return newPointList.sort((a: point, b: point) => (a.param2 > b.param2)? 1 :1)
    })

    // function togglePoint(id) {
    //     const pointToggle = currentInspectionPoints.value.find((point: point) => point.id === id)
    //     const pointOpen = currentInspectionPoints.value.find((point: point) => point.open === true)
    //     if (pointToggle && pointOpen && pointToggle.id !== pointOpen.id) {
    //         pointOpen.open = false
    //     }
    //     else {
    //         if (pointOpen)
    //             {pointOpen.open = false}
    //         pointToggle.open = true
    //     }
    // }

    return { 
        someState, pointList, pointStatus, currentInspectionPoints, id,
        fetchPoints,
        addPoint,
        deletePoint,
        updatePoint,
        updateStatus,
        // togglePoint
     }
    },
    {
        persist: true,
    }
)