<template>
  <form class="well">
    <div class="row">
      <div class="col">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" class="form-control gutter-bottom" v-model="username">
      </div>
      <div class="col">
        <label for="username">Password</label>
        <input type="password" id="password" name="password" class="form-control gutter-bottom" v-model="password">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-block btn-cta" type="submit">Sign In</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Form extends Vue {
  private username: string = '';
  private password: string = '';
}
</script>

<style lang="scss" scoped>
.well {
  padding: 15px;
}
</style>
