<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <h1>Login to Drees Starter Vue</h1>
      <LoginForm />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import LoginForm from '@/components/Form.vue';

@Component({
  components: {
    LoginForm,
  },
})
export default class Login extends Vue {}
</script>

<style lang="scss" scoped>

</style>
