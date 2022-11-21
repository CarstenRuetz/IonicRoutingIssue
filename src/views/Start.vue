<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Start</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-button
        :router-link="{
          name: 'Tab1',
          params: { id: 'test' },
        }"
        >move to tabs 1 page</ion-button
      ><br />
      <ion-button
        :router-link="{
          name: 'Tab1View1',
          params: { id: 'test' },
        }"
        >move to Tab1View1 page</ion-button
      >
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";

export default defineComponent({
  name: "StartMe",
  components: {
    // ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
  },
});
</script>
