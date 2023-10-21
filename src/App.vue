<template>

  <Cabecalho />
  <router-view></router-view>
  <Rodape />
  <ToggleTheme />
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Cabecalho from './components/Cabecalho.vue';
import ToggleTheme from './components/ToggleTheme.vue';
import Rodape from './components/Rodape.vue';

export default defineComponent({
    name: 'App',
    components: {
    Cabecalho,
    ToggleTheme,
    Rodape
}
    })
</script>
