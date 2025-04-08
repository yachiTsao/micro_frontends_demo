<attachment id="file:/micro_frontends_demo/micro_frontends_demo/apps/remote/src/components/RemoteComponent.vue">
<content>
<template>
  <div class="remote-component">
    <h2>This is a Remote Component</h2>
    <p>Content specific to the remote application goes here.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RemoteComponent',
});
</script>

<style scoped>
.remote-component {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}
</style>
</content>
</attachment>