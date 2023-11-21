<template>
  <ion-app>
    <component :is="selectedNavigation" @onLayoutChanged="(n: Navigation) => changeLayout(n)"></component>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp} from '@ionic/vue';
import TabNavigation from './components/TabNavigation.vue';
import MenuNavigation from './components/MenuNavigation.vue';
import { Navigation } from './enums'
</script>

<script lang="ts">
export default {
  data() {
    return {
      navigationType: Navigation.Tabs
    }
  },
  methods: {
    changeLayout(layout: Navigation) {
      console.log(layout);
      this.navigationType = layout;
    }
  },
  computed: {
    selectedNavigation() {
      if (this.navigationType === Navigation.Menu) {
        console.log("It's menu!");
        return MenuNavigation;
      }

      if (this.navigationType === Navigation.Tabs) {
        console.log("It's tabs!")
        return TabNavigation;
      }
    }
  }
}
</script>
