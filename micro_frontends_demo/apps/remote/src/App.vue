<attachment id="file:/micro_frontends_demo/micro_frontends_demo/apps/remote/src/App.vue">
<content>
<template>
  <div id="remote-app">
    <h1>Welcome to the Remote Micro Frontend</h1>
    <RemoteComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RemoteComponent from './components/RemoteComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    RemoteComponent
  }
});
</script>

<style scoped>
#remote-app {
  text-align: center;
}
</style>
</content>
</attachment>