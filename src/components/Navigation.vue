<template>
  <nav class="text-center">
    <Notification :showMessage="showMessage" @close="showMessage = false" :message="notificationMessage" />
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li @click="showMessage = true">Trigger Notification</li>
      <li @click="isModalOpen = true">Trigger Modal</li>
    </ul>
    <ExampleModal :isModalOpen="isModalOpen" transition="fade-in-down" @close="isModalOpen = false" />
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { NotificationMessage } from '@/types';
import Notification from '@/components/Notification.vue';
import ExampleModal from '@/components/ExampleModal.vue';

@Component({
  components: {
    Notification,
    ExampleModal,
  },
})
export default class Navigation extends Vue {
  private notificationMessage: NotificationMessage = {
    code: 200,
    title: 'Notification Triggered Successfully',
    body: 'You have successfully triggered the notification. These will change colors based on the reponse code.',
  };
  private showMessage: boolean = false;
  private isModalOpen: boolean =  false;
}
</script>

<style lang="scss" scoped>
nav {
  padding: 15px;
  margin: 2rem 0;
  border-radius: 2px;
  background: darken(white, 20%);

  ul { margin: 0; }

  li {
    cursor: pointer;
    display: inline-block;
    list-style-type: none;
    margin-right: 1rem;

    &:last-child { margin-right: 0; }
  }

  li a { color: black; }
}
</style>
