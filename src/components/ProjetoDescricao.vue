<template>
    <section>
        <img :src="projeto?.imgURL" alt="projeto">
        <h1>{{ projeto?.textos[idiomaSelecionado].titulo }}</h1>
        <p v-for="(paragrafo, index) in projeto?.textos[idiomaSelecionado].paragrafosDescricao" v-bind:key="index">
            {{ paragrafo }}
            <br><br>
        </p>
        <p v-html="htmlComTraducoes[idiomaSelecionado]"></p>

    </section>
</template>

<style lang="scss" scoped>
section {
    @apply dark:text-white sm:w-auto xl:w-desktop mx-auto sm:pt-16 sm:px-8 xl:px-0;

    h1 {
        @apply font-medium text-[24px] pb-6 px-4 sm:px-0 mt-4 sm:mt-0;
    }

    img {
        @apply w-screen sm:float-left sm:min-h-[150px] sm:min-w-[280px] sm:w-[34vw] xl:w-[calc(50%-24px)] mr-6 mb-1;
    }

    p {
            @apply text-[14px] sm:text-[20px] px-4 sm:px-0;
    }
}
</style>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import projetosJson from "../data/projetos.json"
import { useStore } from '../store/store';

const store = useStore()

export default defineComponent({
    name: "ProjetoDescricao",
    props: {
        id: String
    },
    setup({id}){

        const projetos = projetosJson
        const projeto = projetos.find(projeto=> projeto.id.toString() === id)
        const idiomaSelecionado = computed(():"pt-br" | "en"=>{
            return store.getters.idiomaAtivado.nome.toLowerCase()
        })

        const htmlComTraducoes = {
            "pt-br": `Clique <a href="${projeto?.links?.git}" target="_blank"><i><u>aqui</u></i></a> para ver o projeto no github ou <a href="${projeto?.links?.deploy}" target="_blank"><i><u>aqui</u></i></a> para
            ver ele hospedado.`,
            en: `Click <a href="${projeto?.links?.git}" target="_blank"><i><u>here</u></i></a> to see the project on github or <a href="${projeto?.links?.deploy}" target="_blank"><i><u>here</u></i></a> to see it in production.`
        }

        return {
            projeto,
            idiomaSelecionado,
            htmlComTraducoes
        }
    }
})
</script>