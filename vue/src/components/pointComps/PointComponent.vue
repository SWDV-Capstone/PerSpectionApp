<template class="PointComponent">
    <h6>P COMP: {{ store.someState }}</h6>
    <ion-card
        :id="point.id"
        v-for="point in store.pointList" 
        :key="point.id"
    >
        <ion-card-header>
            <ion-card-title>P TITLE: {{ point.param1 }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <ion-list>
                <ion-item>
                    <ion-list>
                        <ion-item>
                            <ion-label>P NUMBER: {{ point.param2 }}</ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>P DATE: {{ point.param3 }}</ion-label>
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
import { usePointStore } from '../../stores/pointStore';

const store = usePointStore();

onMounted(() => {
    console.log('Mounted');
    store.fetchPoints();
});
</script>