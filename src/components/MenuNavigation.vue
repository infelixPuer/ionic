<template>
    <ion-menu content-id="content">
        <ion-header>
            <ion-toolbar>
                <ion-title>Space programs</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-menu-toggle>
                <div class="menu-buttons">
                    <ion-button class="menu-button" router-link="/home">Home</ion-button>
                    <ion-button class="menu-button" router-link="/usa">USA</ion-button>
                    <ion-button class="menu-button" router-link="/europe">Europe</ion-button>
                    <ion-button class="menu-button" router-link="/russia">Russia</ion-button>
                </div>                    
            </ion-menu-toggle>
        </ion-content>
    </ion-menu>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
                <ion-button style="margin: auto 5px ;" slot="end" @click="() => changeLayout(Navigation.Tabs)" expand="block" color="primary" fill="solid">Tabs</ion-button>
                <ion-button style="margin-right: 5px ;" slot="end" @click="() => changeLayout(Navigation.Menu)" expand="block" color="primary" fill="solid">Menu</ion-button>
                <ion-title>Menu</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content id="content">
            <ion-router-outlet></ion-router-outlet>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { Navigation } from '../enums';
import { IonPage, IonContent, IonMenu, IonMenuButton, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonMenuToggle } from '@ionic/vue';
import { defineComponent } from 'vue';
</script>

<script lang="ts">
export default defineComponent({
    methods: {
        changeLayout(value: Navigation) {            
            this.$emit("onLayoutChanged", value);
        }
    }
});
</script>

<style scoped>

.menu-buttons {
    display: flex;
    flex-direction: column;
}
</style>