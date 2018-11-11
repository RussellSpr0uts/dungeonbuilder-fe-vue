<template>
  <div>
    <h1>About</h1>
    <p>This is another view or a component that gets mounted when a certain route is visited. This template uses the Drees CSS Commons library which is built off of Bootstrap. There several additional utility classes like, "gutter-top" to add 15px of top margin, or "bkg-primary" to make something the primary color.</p>

    <p>You can also add the "gradient-$color" class to make anything have a gradient of that color. Example, "btn btn-cta gradient-cta" will render a button with an orange gradient.</p>

    <p>For more information, visit the css-commons BitBucket repository.</p>

    <div class="alert alert-info">
      <p>This starter template was created by {{ templateCreatedBy }}.</p>
      <p>By looking at the source code, you will see Typescript, css-commons, and js-commons already installed and being used. For example, "Dave" was originally "David" but thanks to a utility function imported from js-commons, that original string was replaced.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  private companyName: 'Drees Homes';
  private get templateCreatedBy() {
    return 'David Berning';
  }
  private mounted() {
    this.$store.dispatch('addCompanyName', { vm: this, payload: 'DH' });
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

.alert p:last-child { margin-bottom: 0; }
</style>