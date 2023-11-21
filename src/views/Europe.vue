<template>
    <ion-page>
        <ion-content color="tertiary">
            <ion-grid>
                <ion-row>
                    <ion-col size="auto" size-md="3"></ion-col>
                    <ion-col size="12" size-md="6">
                        <div class="content">
                            <div class="main">
                                <h1><b>EU's going into space situation</b></h1>
                                <h2><b>Geography</b></h2>
                                <p>In case of geography Europe is in bad situation. Everything that launches from Europe in
                                    case of an accident will fall into Russia.</p>
                                <p><img src="../../public/Dropped.png" alt="Rockets drop into Russia"></p>
                                <p>Of course, many European countries don't mind about pissing off Russia, but that means,
                                    that Russia can shoot everything that launches from Europe.</p>
                                <p><img src="../../public/Shooting.png" alt="Russia shooting down rockets"></p>
                                <p>For now, all European rockets are launching from French Guiana.</p>
                                <p><img src="../../public/launching_point.png" alt="Launching site in French Guiana"></p>
                                <p>But there can be an issue in future, if French Guiana will become free.</p>
                                <p>Then Europe must ask someone to launch their rockets for them.</p>
                                <p>Other option is to build new launching point. And for this purpose Portuguese islands
                                    called Azores are perfect point.</p>
                                <p><img src="../../public/azores.png" alt="Protugese Azores"></p>
                                <h2><b>Capabilities</b></h2>
                                <p>In terms of money and human resourses Europe is in a good position.</p>
                                <p>But in order to catch up with other countries all European states must work together.
                                    Otherwise Europe's space programs will stagnate.</p>
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
import { IonPage, IonContent, IonGrid, IonCol, IonRow } from '@ionic/vue';
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
}</style>