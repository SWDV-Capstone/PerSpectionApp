<template class="InspectionComponent">
    <h6>I COMP: {{ store.someState }}</h6>
    <ion-card
        :id="inspection.id"
        v-for="inspection in store.inspectionList" 
        :key="inspection.id"
    >
        <ion-card-header>
            <ion-card-title>I TITLE: {{ inspection.param1 }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <ion-list>
                <ion-item>
                    <ion-list>
                        <ion-item>
                            <ion-label>I NUMBER: {{ inspection.param2 }}</ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>I DATE: {{ inspection.param3 }}</ion-label>
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
import { useInspectionStore } from '../../stores/inspectionStore';

const store = useInspectionStore();

onMounted(() => {
    console.log('Mounted');
    store.fetchInspections();
});
</script>