<template>
    <section class="skills" id="skills">
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
    data() {
        const textos = {
            "pt-br": {
                paragrafo1: `Atualmente eu estou cursando faculdade de ADS (Análise e Desenvolvimento de Sistemas) e certamente estou a disposição para possíveis contratações e trabalhos com desenvolvimento Full Stack, os projetos em que eu trabalhei estão logo abaixo na seção de portfólio do site ou no meu curriculum.`,
                paragrafo2: `Tecnologias:`,
                paragrafo3: `Typescript, React, Vuejs, Nodejs, Jquery, Bootstrap, Tailwind, Wordpress, Javascript, Html, Scss, CSS, PHP, Figma, Git e Github.`,
                paragrafo4: `Clique no botão abaixo para baixar o meu curriculum:`,
                titulo: "O que faço"

            },
            "en": {
                paragrafo1: `I am currently studying ADS (Systems Analysis and Development) and I am certainly available for possible hires and jobs with Full Stack development, the projects I worked on are below in the portfolio section of the website or on my CV.`,
                paragrafo2: `Technologies:`,
                paragrafo3: `Typescript, React, Vuejs, Nodejs, Jquery, Bootstrap, Tailwind, Wordpress, Javascript, Html, Scss, CSS, PHP, Figma, Git e Github.`,
                paragrafo4: "Click the button below to download my CV:",
                titulo: "SKILLS"
            }
        }
        return {
            textos
        }
    },
    computed: {
        idiomaSelecionado(): "pt-br" | "en" {
            return store.getters.idiomaAtivado.nome.toLowerCase()
        }
    }
})
</script>

<style lang="scss" scoped>
.skills {
    @apply flex justify-center dark:text-white;

    &__container {
        @apply xl:w-desktop px-4 sm:px-8 xl:p-0 flex flex-col items-center;

        h2 {
            @apply font-bold text-[24px] sm:text-[32px] pt-10 pb-8;
        }

        p {
            @apply sm:text-[24px];
        }

        div {
            a {
                @apply w-fit block;

                .botao-download {
                    @apply sm:text-[24px] text-blue-400 font-semibold py-2 px-4 flex justify-center border-2 rounded-[16px] border-blue-400 mt-8 hover:drop-shadow-blueShadow hover:underline duration-150 dark:bg-dark-200;
                }
            }
        }
    }
}</style>