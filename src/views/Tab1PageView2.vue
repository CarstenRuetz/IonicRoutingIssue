<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1 View 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1 View 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-button :router-link="{ name: 'Start' }">go to start</ion-button>
      <ion-button @click="goThere()">go to start code nav</ion-button>
      <ExploreContainer name="Tab 1 View 2 page" />
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
  useIonRouter,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";

export default defineComponent({
  name: "Tab1PageView2",
  components: {
    ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
  },
  setup() {
    const ionRouter = useIonRouter();
    return {
      ionRouter,
    };
  },
  methods: {
    goThere() {
      const result = this.ionRouter.navigate(
        {
          name: "Start",
          params: {},
        },
        "back",
        "replace"
      );
      console.log(result);
    },
  },
});
</script>
