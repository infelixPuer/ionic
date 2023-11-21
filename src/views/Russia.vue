<template>
    <ion-page>
        <ion-content color="tertiary">
            <ion-grid>
                <ion-row>
                    <ion-col size="auto" size-md="3"></ion-col>
                    <ion-col size="12" size-md="6">
                        <div class="content">
                            <div class="main">
                                <h1><b>Russia's going into space situation</b></h1>
                                <h2><b>Geography</b></h2>
                                <p>While Russia's geography isn't too great for launching rockets, they still have one of
                                    the best space sites aeroport - Baikonur.</p>
                                <p>But there is a big issue...</p>
                                <p><img src="../../public/kazah_property.png" alt="Baikonur is kazah's"></p>
                                <p>Baikonur is located in Kazahstan. And since recently being proved, that Russia cannot
                                    force their will onto other contries, Russia's space program is fully dependent on the
                                    Kazah good will.</p>
                                <h2><b></b></h2>
                                <p>After recent known events Russia lost their ability to develop their space program
                                    entirely.</p>
                                <p><img src="../../public/semi.png" alt="Russia does not produce good semiconductors"></p>
                                <p>Despite being pioneer in the space travel - USSR first launched satelites, rockets and
                                    humans into space - after death of the Russian genius - Mikhail Korolev, their space
                                    program started stagnate. In todays world space travel is built upon cooperation of
                                    scientists, corporations and societies. And having good rocket engiens is not enough.
                                    Nowadays it is more important to have good relations with countries, whom produce
                                    semi-condoctors, such as USA, Taiwan, Netherlands. But Russia choosen the path of isolationism.</p>
                                <h2><b>Conclusion</b></h2>
                                <p><img src="../../public/russia_situation.png" alt="Russia is underdog"></p>
                                <p>Russia's space program will stagnate for years. And they won't become leader in space travel for decades.</p>
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