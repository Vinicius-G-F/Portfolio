<template>
    <section class="skills">
        <div class="skills__container">
            <h2>{{ textos[idiomaSelecionado].titulo }}</h2>
            <p>
                {{ textos[idiomaSelecionado].paragrafo1 }}
                <br>
                <br>
                <strong class="text-bold"> {{ textos[idiomaSelecionado].paragrafo2 }} </strong>
                <br>
                {{ textos[idiomaSelecionado].paragrafo3 }}
                <br>
                <br>
                {{ textos[idiomaSelecionado].paragrafo4 }}
            </p>
            <div class="w-full">
                <a v-if="idiomaSelecionado === 'pt-br'" href="/Vinícius-cv-pt-br.pdf" download="Vinícius-cv-pt-br.pdf">
                    <button class="botao-download" type="button">Download</button>     
                </a>
                <a v-else href="/Vinícius-cv-en.pdf" download="Vinícius-cv-en.pdf">
                    <button class="botao-download" type="button">Download</button>     
                </a>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '../store/store';
const store = useStore()

export default defineComponent({
    name: "Skills",
    data(){
        const textos = {
            "pt-br": {
                paragrafo1: `Atualmente eu estou a disposição para possíveis contratações e trabalhos free lancers com desenvolvimento Front-end, os projetos em que eu trabalhei estão logo abaixo na seção de portfólio do site ou no meu curriculum.`,
                paragrafo2: `Tecnologias:`,
                paragrafo3: `typescript, react, jquery, bootstrap, tailwind, wordpress, javascript, html, scss, css, php, figma, git e github.`,
                paragrafo4: `Clique no botão abaixo para baixar o meu curriculum:`,
                titulo: "O que faço"

            },
            "en": {
                paragrafo1: `I am currently available for possible hiring and free lance work with Front-end development, the projects I worked on are below in the portfolio section of the website or on my CV.`,
                paragrafo2: `Technologies:`,
                paragrafo3: `typescript, react, jquery, bootstrap, tailwind, wordpress, javascript, html, scss, css, php, figma, git and github.`,
                paragrafo4: "Click the button below to download my CV:",
                titulo: "SKILLS"
            }
        }
        return {
            textos
        }
    },
    computed: {
        idiomaSelecionado(): "pt-br" | "en"{
            return store.getters.idiomaAtivado.nome.toLowerCase()
        }
    }
})
</script>

<style lang="scss" scoped>
.skills{
    @apply flex justify-center dark:text-white;
    &__container {
        @apply w-desktop flex flex-col items-center;
        h2 {
            @apply font-bold text-[32px] pt-10 pb-8;
        }
        p{
            @apply text-[24px];
        }
        .botao-download {
            @apply text-blue-400 font-semibold py-2 px-4 flex justify-center border-2 rounded-[16px] border-blue-400 mt-8 hover:drop-shadow-blueShadow hover:underline duration-150;
        }
        div {
            a {
                @apply w-fit block;
            }
        }
    }
}
</style>