<template>
  <ion-page>
    <ion-content color="tertiary">
            <ion-grid>
                <ion-row>
                    <ion-col size="auto" size-md="3"></ion-col>
                    <ion-col size="12" size-md="6">
                        <div class="content">
                            <div class="main">
                                <h1><b>Space travelling</b></h1>
                                <h2><b>What do you need to launch a rocket into space?</b></h2>
                                <p>1. Good geography</p>
                                <p>In order to save up some fuel and to make launching easier the best spots to launch rockets are located near equator.</p>
                                <p>And since Earth is rotating from west to east it is best to laucnh rockets into the east.</p>
                                <p>Because of that it would be nice, if on the east there will be nothing there in case something goes wrong or some rocket stages will fall on Earth.</p>
                                <p>2. Economy and human resources</p>
                                <p>It is obvious, that if country doesn't have enough money, then they will not be able to spend some of it onto building rockets or satelites.</p>
                                <p>And if there is no good education system for the people, than there will be no qualified enough scientists to making innovations in that area.</p>
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
import { IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/vue';
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
