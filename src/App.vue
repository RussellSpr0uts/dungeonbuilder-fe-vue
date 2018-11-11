<template>
  <div id="app">
    <div class="container">
      <img class="logo" src="@/assets/logo.png">
      <Navigation />
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';
import Notification from '@/components/Notification.vue';

@Component({
  components: {
    Navigation,
    Notification,
  },
})
export default class App extends Vue {
}
</script>


<style lang="scss">
@import './../node_modules/bootstrap/dist/css/bootstrap.css';
@import '@/assets/scss/styles.scss';

#app {
  padding: 3rem 15px;
}

.logo {
  max-width: 300px;
  width: 100%;
  display: block;
  margin: 0 auto;
}
</style>

