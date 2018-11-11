# Drees Starter Vue
This is a starter template to jump start Vue.js projects for Drees Homes. Common dependencies have already been saved and configured in the `package.json` file. All you need to do is run a few commands to install the dependencies and start the live server. You can use Yarn or NPM to install and run your local node server; it is recommended to use Yarn whenever possible.

## Getting Started

__Important:__ You will need to have an `env.config.ts` file for this starter project to build and run. In the root directory, there is an `env.config.example.ts` file to get you started. Just copy, paste, and rename that file to `env.config.ts`. This file will let you change your "environment" on the fly to reference and call the environment's respective URLs (ex: `dev` uses `publicdev.dreesteam.com`, etc). __This file should not be committed into version control.__

### Install Dependencies

```bash
$ yarn
# or
$ npm install
```

__Note:__ You can also run `yarn install` instead of `yarn`.

### Start the Live Server for Hot Reloading for Development

```bash
$ yarn run serve
# or
$ npm run serve
```

### Compiles and Minifies for Production

```bash
$ yarn run build
# or
$ npm run build
```

### Lints and Fixes Files

```bash
$ yarn run lint
# or
$ npm run lint
```

## Out of the Box

With the Drees Starter Vue template, you get the following already and saved and integrated out-of-the-box. This project is built with Webpack and compiled with Babel.


- [Vue.js](https://vuejs.org/)
- [Vuex (State Management)](https://vuex.vuejs.org/)
- [Vue Router (Routing)](https://router.vuejs.org/)
- [Typescript (Type Casting)](http://www.typescriptlang.org/)
- [Bootstrap 4](https://getbootstrap.com/)
- [SCSS (SASS)](https://sass-lang.com/)
- [JS Commons (Common Drees-Specific ES6 Functions)](https://bitbucket.org/dreeshomes/js-commons/src/master/)
- [CSS Commons (Drees Homes Base Styles)](https://bitbucket.org/dreeshomes/css-commons/src/master/)
- Functioning Notification and Modal Components

__Note:__ The js-commons library is available globally via the Vue Instance. This is done so that the user's APM key is automatically added to service methods without passing in arguments or writing your own custom code. This also makes every js-commons function available as `this['$commons'].*` through the Vue.js project. If you need to use the APM key, you will need to defined some properties in the `.commons.js` file.

## Naming Conventions and Standards

__Components__ are always PascalCase and should have a short, descriptive, yet generic name. Example: `Modal.vue`.

If the component is a single, stand alone component, then the component can be placed in the root `components` directory. If the container component has two or more components, then a folder should be created and follow the convention below:

```bash
|__components/
   |__Header/
      |__Header.vue (container)
      |__HeaderMain.vue
      |__HeaderSub.vue
      |__HeaderLogo.vue
```

When importing a component into another `component` or `view`, always use absolute paths with the `@` alias.

```html
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ComponentName from '@/components/ComponentName.vue'; // with alias

@Component({
  components: {
    ComponentName
  }
})
export default class SomeComponent extends Vue {
  // Props, Methods, Computed Properties, Lifecycle Methods, etc
}
</script>
```

__Note:__ The `drees-starter-vue` project uses the class-based syntax that Vue.js is moving towards in Vue.js version 3.x.

## Other

When working with Vuex, it is recommended to break up your `store` into namespaced modules. More information on that can be found on the [documentation website](https://vuex.vuejs.org/guide/modules.html).