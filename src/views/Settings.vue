<template>
    <ion-page>
        <ion-content>
            <ion-button>Switch layout</ion-button>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
</script>

<script lang="ts">
export default defineComponent({
    emits: ['onLayoutChanged']
});
</script>