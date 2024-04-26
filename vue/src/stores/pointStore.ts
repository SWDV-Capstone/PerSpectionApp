import { defineStore } from 'pinia'
import { ref } from 'vue'
// import axios from 'axios'

export const useTestStore = defineStore( 'testStore', () => {
    const someState = ref('Hello Pinia')
    return { someState }
    },
    {
        persist: true,
    }
)