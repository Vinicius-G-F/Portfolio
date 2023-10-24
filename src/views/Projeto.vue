<template>
    <main class="projeto">
        <ProjetoDescricao :id="($route.params.id instanceof Array ? '' : $route.params.id)"/>
        <technologies :id="($route.params.id instanceof Array ? '' : $route.params.id)"/>
        <contact />
    </main>
</template>

<style lang="scss" scoped>

.projeto {
    @apply bg-gray-100 dark:bg-dark-900 pb-10;
}

</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Contact from '../components/Contact.vue';
import ProjetoDescricao from '../components/ProjetoDescricao.vue';
import Technologies from '../components/Technologies.vue';

export default defineComponent({
    name: "Projeto",
    setup() {
    },
    components: { ProjetoDescricao, Technologies, Contact },
    mounted() {
        const element = document.getElementById('cabecalho');

            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
    },
})
</script>