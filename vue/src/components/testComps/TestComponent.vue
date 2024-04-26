<template class="TestComponent">
    <ion-card>
        <ion-card-header></ion-card-header>
        <ion-card-content>
            <ion-list>
                <ion-item
                    :id="test.id"
                    v-for="test in store.testList" 
                    :key="test.id"
                >
                    <ion-label>{{ test.param1 }}</ion-label>
                </ion-item>
            </ion-list>
        </ion-card-content>
    </ion-card>
</template>
<script setup lang="ts">
import { IonCard, IonCardContent, IonList, IonItem, IonLabel } from '@ionic/vue';
import { onMounted } from 'vue';
import { useTestStore } from '@/stores/testStore';

const store = useTestStore();

// const testFunction = () => {
//     console.log('Test Function');

// }

onMounted(() => {
    console.log('Mounted');
    store.fetchTests();
});
</script>