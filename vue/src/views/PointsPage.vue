<template>
  <ion-page>
    <HeaderComponent />
    <ion-content :fullscreen="true">
      <PointComponent />
      <!-- <PointAccordion 
        :points="poinStore.currentInspectionPoints"
      /> -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { onBeforeMount } from 'vue';
import HeaderComponent from '@/components/HeaderFooter/headerComponent.vue';
import PointComponent from '@/components/pointComps/PointComponent.vue';
// import PointAccordion from '@/components/pointComps/PointAccordion.vue';

import { usePointStore } from '@/stores/pointStore';
const poinStore = usePointStore();

onBeforeMount(() => {
  poinStore.fetchPoints();
});

</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
