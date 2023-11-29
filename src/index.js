import { defineAsyncComponent } from 'vue'
import Vuetify from '../plugins/Vuetify/vuetify'
import '../css/patch.css'
export const VxSuitePlugin = {
  install: (app, options) => {
    // Assuming your library's components are in `my-library-components`
    // and your plugin configuration is in `my-plugin-config`
    // Register all Vuetify components and directives

    // Create and configure the Vuetify instance
    // const vuetify = createVuetify(options.vuetify);
    app.use(Vuetify)

    // Register your library's components (similar to previous examples)
    // const myComponents = import.meta.globEager('./components/**/*.vue');
    // for (const path in myComponents) {
    //   const componentConfig = myComponents[path];
    //   const componentName = getComponentName(path); // Define this utility function
    //   app.component(componentName, componentConfig.default || componentConfig);
    // }

    // Import all components from the components directory
    // @global-components
    const components = import.meta.glob('./components/**/*.vue')

    for (const path in components) {
      const componentName = path
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
        .replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : '')) // Convert to PascalCase

      // For Vue 3, you can use defineAsyncComponent for better performance
      app.component(componentName, defineAsyncComponent(components[path]))

      // For Vue 2, you directly register the component
      // components[path]().then((module) => {
      //   Vue.component(componentName, module.default || module);
      // });
      // Vue.component('VBtn', VBtn)
      // Vue.component('VTextField', VTextField)

      // Also, when installing your plugin into the Vue application, we'll create a Vuetify instance
      // This is assuming you want to configure Vuetify at the application level
    }
  },
}

export default VxSuitePlugin

// Usage example in a consumer application
/*
import { createApp } from 'vue';
import App from './App.vue';
import { VxSuitePlugin } from 'your-ui-library';

const app = createApp(App);

app.use(VxSuitePlugin, {
  vuetify: {
    // Your Vuetify configuration here
  },
});

app.mount('#app');
*/
