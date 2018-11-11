<template>
  <div>
    <h1>Home</h1>
    <p>This is a starter template for {{ $store.state.companyName }} Vue.js projects. This starter template includes:

      <ul class="gutter-top">
        <li>Babel</li>
        <li>Typescript</li>
        <li>SCSS/SASS Support</li>
        <li>ESLint (Drees Homes Vue)</li>
        <li>Drees Homes Base Styles (css-commons)</li>
        <li>Drees Utility Functions (js-commons)</li>
        <li>Bootstrap 4 Responsive Reporter</li>
        <li>SCSS Variables for Bootstrap 4 Breakpoints</li>
        <li>Axios</li>
      </ul>
    </p>

    <h2>Built-In Colors</h2>
    <div class="row gutter-top swatches">
      <div class="col-3">
        <p class="bkg-primary">$primary</p>
      </div>
      <div class="col-3">
        <p class="bkg-secondary">$secondary</p>
      </div>
      <div class="col-3">
        <p class="bkg-tertiary">$tertiary</p>
      </div>
      <div class="col-3">
        <p class="bkg-cta">$cta (Call to Action)</p>
      </div>
      <div class="col-3">
        <p class="bkg-success">$success</p>
      </div>
      <div class="col-3">
        <p class="bkg-info">$info</p>
      </div>
      <div class="col-3">
        <p class="bkg-warning">$warning</p>
      </div>
      <div class="col-3">
        <p class="bkg-danger">$danger</p>
      </div>
    </div>

    <h2 class="gutter-top">Additional Resources</h2>
    <ul>
      <li><a href="https://vuejs.org/">Vue.js Documentation</a></li>
      <li><a href="#">Drees CSS Commons Repository</a></li>
      <li><a href="https://daneden.github.io/animate.css/">Animate.css</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  private companyName: 'Drees Homes';
  private mounted() {
    this.$store.dispatch('addCompanyName', {vm: this, payload: 'Drees Homes'});
  }
}
</script>

<style lang="scss" scoped>
.swatches p {
  color: white;
  text-align: center;
  padding: 15px;
  border-radius: 2px;
}
</style>