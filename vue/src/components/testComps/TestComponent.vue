<template class="TestComponent">
    <h6>COMP: {{ store.someState }}</h6>
    <ion-card
        :id="test.id"
        v-for="test in store.testList" 
        :key="test.id"
    >
        <ion-card-header>
            <ion-card-title>TITLE: {{ test.param1 }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <ion-list>
                <ion-item>
                    <ion-list>
                        <ion-item>
                            <ion-label>NUMBER: {{ test.param2 }}</ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>DATE: {{ test.param3 }}</ion-label>
                        </ion-item>
                    </ion-list>
                </ion-item>
            </ion-list>
        </ion-card-content>
    </ion-card>
</template>
<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel } from '@ionic/vue';
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