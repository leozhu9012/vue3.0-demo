<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { ref,defineComponent, onActivated, onRenderTracked } from 'vue';
export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    onActivated((): void => {
      console.log('onActivated');
    });
    onRenderTracked((): void => {
      console.log('onRenderTracked');
    })
  }
})
</script>
