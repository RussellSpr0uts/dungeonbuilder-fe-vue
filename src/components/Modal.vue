<template>
  <div>
    <transition :name="transition">
      <div class="modal" :class="{ 'bordered': borders, 'modal-md': size === 'md', 'modal-sm': size === 'sm' }" v-if="isModalOpen">
        <header class="modal-header" v-if="$slots.header">
          <slot name="header" />
        </header>
        <main class="modal-body" v-if="$slots.main">
          <slot name="main" />
        </main>
        <footer class="modal-footer" v-if="$slots.footer">
          <slot name="footer" />
        </footer>
      </div>
    </transition>
    <transition name="fade-in">
      <div class="overlay" v-if="isModalOpen" @click="$emit('close');"></div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class Modal extends Vue {
  @Prop({type: Boolean, required: true}) private isModalOpen: boolean;
  @Prop({type: String, required: true}) private transition: string;
  @Prop({type: Boolean, required: false, default: false}) private borders: boolean;
  @Prop({type: String, required: false}) private size: boolean;

  @Watch('isModalOpen')
  private onIsModalToggled() {
    if (this.isModalOpen === true) {
      document.querySelector('body').classList.add('no-scroll');
    } else {
      document.querySelector('body').classList.remove('no-scroll');
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  background: rgba(black, .5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0; left: 0;
  z-index: 9999;
}

.modal {
  text-align: left;
  display: block;
  overflow: hidden;
  background: white;
  position: fixed;
  z-index: 99999;
  width:auto;
  right: auto; bottom: auto;
  border-radius: 3px;
  padding: 20px;
  width: 94vw;
  left: 3vw;
  max-height: 90vh;
  top: 5vh;

  .modal-header { border-bottom: none; }
  .modal-footer { border-top: none; }

  &.bordered {
    .modal-header { border-bottom: 1px solid #ccc; }
    .modal-footer { border-top: 1px solid #ccc; }
  }

  @media screen and (min-width: 400px) {
    .modal {
      width: 90vw;
      left: 5vw;
    }

    &.modal-sm {
      max-width: 50vw;
      left: 25vw;
    }

    &.modal-md {
      max-width: 75vw;
      left: 12.5vw;
    }
  }
}

main {
  overflow: auto;
  max-height: 80vh;
}

// Transitions

.fade-in-enter,
.fade-in-leave-to {
  transform: translateY(0%);
}

.fade-in-down-enter,
.fade-in-down-leave-to {
  transform: translateY(-100%);
}

.fade-in-left-enter,
.fade-in-left-leave-to {
  transform: translateX(100%);
}

.fade-in-up-enter,
.fade-in-up-leave-to {
  transform: translateY(100%);
}

.fade-in-right-enter,
.fade-in-right-leave-to {
  transform: translateX(-100%);
}

.fade-in-down-enter,
.fade-in-down-leave-to,
.fade-in-left-enter,
.fade-in-left-leave-to,
.fade-in-up-enter,
.fade-in-up-leave-to,
.fade-in-enter,
.fade-in-leave-to,
.fade-in-right-enter,
.fade-in-right-leave-to {
  opacity: 0;
}

.fade-in-down-enter-active,
.fade-in-down-leave-active,
.fade-in-left-enter-active,
.fade-in-left-leave-active,
.fade-in-up-enter-active,
.fade-in-up-leave-active,
.fade-in-enter-active,
.fade-in-leave-active,
.fade-in-right-enter-active,
.fade-in-right-leave-active {
  transition: all 0.5s ease;
}
</style>
