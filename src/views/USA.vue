<template>
    <ion-page>
        <ion-content color="tertiary">
            <ion-grid>
                <ion-row>
                    <ion-col size="auto" size-md="3"></ion-col>
                    <ion-col size="12" size-md="6">
                        <div class="content">
                            <div class="main">
                                <h1><b>USA's going into space situation</b></h1>
                                <h2><b>Geography</b></h2>
                                <p>USA have ideal geography. They are launching their rockets from Floride. It's close to
                                    the equator and if something will fall out, then it will fall into the Atlantic sea.</p>
                                <p>In the future USA can make more lauching pods: Hawaii, Guam, Puerto Rico. So USA in future can have four ideal launching pods.</p>
                                <p><img src="../../public/usa_launching.png" alt="Launchings sites"></p>
                                <h2><b>Capabilities</b></h2>
                                <p>In terms of economy USA's economy is the largest economy in the world for the last 150 years.</p>
                                <p>And there is still plenty of clever people in the USA.</p>
                                <p>At least for now...</p>
                                <h2><b>Conclusion</b></h2>
                                <p>USA will still dominate space sector for decades with it's perfect geographical position and resources.</p>
                            </div>
                        </div>
                    </ion-col>
                    <ion-col size="auto" size-md="3"></ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
</script>

<script lang="ts">
</script>

<style scoped>
h1,
h2,
p {
    margin: 10px;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    color: white;
}
</style>