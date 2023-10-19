<template>

  <Cabecalho />
  <router-view></router-view>
  <!-- footer -->
  <ToggleTheme />
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Cabecalho from './components/Cabecalho.vue';
import ToggleTheme from './components/ToggleTheme.vue';

export default defineComponent({
    name: 'App',
    components: {
      Cabecalho,
      ToggleTheme
    }
    })
</script>
