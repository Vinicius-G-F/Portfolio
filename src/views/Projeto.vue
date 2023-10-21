<template>
    <main class="projeto">
        <ProjetoDescricao :id="($route.params.id as string)"/>
        
    </main>
</template>

<style lang="scss" scoped>

.projeto {
    @apply bg-gray-100 dark:bg-dark-900 pb-10;
}

</style>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjetoDescricao from '../components/ProjetoDescricao.vue';

export default defineComponent({
    name: "Projeto",
    setup() {
    },
    components: { ProjetoDescricao }
})
</script>