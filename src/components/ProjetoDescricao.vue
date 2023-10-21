<template>
    <section>
        <img :src="projeto?.imgURL" alt="projeto">
        <h1>{{ projeto?.textos[idiomaSelecionado].titulo }}</h1>
        <p v-for="paragrafo in projeto?.textos[idiomaSelecionado].paragrafosDescricao">
            {{ paragrafo }}
            <br><br>
        </p>
        <p>Clique <a href="/"><i><u>aqui</u></i></a> para ver o projeto no github ou <a href="/"><i><u>aqui</u></i></a> para
            ver ele hospedado.</p>

    </section>
</template>

<style lang="scss" scoped>
section {
    @apply dark:text-white w-desktop mx-auto pt-16;

    h1 {
        @apply font-medium text-[32px] pb-6;
    }

    img {
        @apply w-[calc(50%-24px)] inline-block mr-6;
        float: left;
    }

    p {
            @apply text-[20px] inline;
            overflow: hidden;
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

        return {
            projeto,
            idiomaSelecionado
        }
    }
})
</script>