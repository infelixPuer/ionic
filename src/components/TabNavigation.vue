<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>            
            <ion-tab-bar slot="top">
                <ion-tab-button class="center-button" tab="home" href="/home">
                    <ion-icon :icon="tvOutline"></ion-icon>
                    <ion-label>Home</ion-label>
                </ion-tab-button>
                <ion-tab-button class="center-button" tab="usa" href="/usa">
                    <ion-icon :icon="rocketOutline"></ion-icon>
                    <ion-label>USA</ion-label>
                </ion-tab-button>
                <ion-tab-button class="center-button" tab="europe" href="/europe">
                    <ion-icon :icon="starOutline"></ion-icon>
                    <ion-label>Europe</ion-label>
                </ion-tab-button>
                <ion-tab-button class="center-button" tab="russia" href="/russia">
                    <ion-icon :icon="skullOutline"></ion-icon>
                    <ion-label>Russia</ion-label>
                </ion-tab-button>                
                <ion-button @click="() => changeLayout(Navigation.Tabs)" class="end-button">Tabs</ion-button>
                <ion-button @click="() => changeLayout(Navigation.Menu)" style="margin-right: 5px;">Menu</ion-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonTabBar, IonTabs, IonTabButton, IonRouterOutlet, IonIcon, IonLabel, IonButton } from '@ionic/vue'
import { tvOutline, rocketOutline, skullOutline, starOutline } from 'ionicons/icons'
import { defineComponent } from 'vue';
import { Navigation } from '../enums';
</script>

<script lang="ts">
export default defineComponent({
    methods: {
        changeLayout(value: Navigation) {
            this.$emit("onLayoutChanged", value);
        }
    }
})
</script>

<style scoped>

ion-tab-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.center-button {
  margin: 0 auto;
}

.end-button {
    margin-left: auto;
    margin-right: 5px;
}
</style>