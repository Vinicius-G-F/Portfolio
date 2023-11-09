<template>
    <section class="portfolio" id="portfolio">
        <h2>{{textos[idiomaSelecionado()].portfolio}}</h2>
        <div class="projetos-container">
            <div class="projeto" v-for="projeto in projetos" v-bind:key="projeto.id">
                <img :src="projeto.imgURL" :alt="projeto.textos[idiomaSelecionado()].titulo">
                <div class="projeto__body">
                    <div class="body__textos">
                        <h3>{{ projeto.textos[idiomaSelecionado()].titulo }}</h3>
                        <p>{{ projeto.textos[idiomaSelecionado()].intro }}</p>
                    </div>
                    <router-link :to="'/projeto/' + projeto.id.toString()">
                        <button type="button">{{ textos[idiomaSelecionado()].botaoCard }}</button>
                    </router-link>
                </div>
            </div>
        </div>
        
    </section>
</template>

<style lang="scss" scoped>
.portfolio {
    @apply grid text-center mt-14;

    h2 {
        @apply mb-4 font-bold text-[24px] sm:text-[32px] dark:text-white;
    }

    .projetos-container {
        @apply xl:w-desktop flex justify-center flex-col sm:flex-row sm:justify-around px-4 sm:px-8 xl:p-0 flex-wrap xl:justify-center gap-4 justify-self-center;

        .projeto {
            @apply max-w-[380px] min-w-[320px] min-w-[auto] max-w-[auto] sm:w-[270px] md:w-[310px] lg:w-card bg-white mt-4 rounded-[16px] px-2 pt-2 pb-6 flex flex-col items-center dark:text-white dark:shadow-cardProjeto dark:bg-dark-200;
            box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);

            img {
                @apply w-[334px] max-h-[200px] rounded-[16px] mb-6;
            }

            &__body {
                @apply text-left px-6 grid;
                height: -webkit-fill-available;
                div {
                    h3 {
                    @apply mb-4 font-semibold;
                    }
    
                    p {
                        @apply mb-6;
                    }
                }

                a {
                    @apply text-white bg-blue-300 py-3 px-5 rounded-[6px] hover:bg-purple-300 duration-150 self-end justify-self-start;
                }
            }
        }
    }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import projetosLista from "../data/projetos.json"
import { useStore } from '../store/store';

const store = useStore()

export default defineComponent({
    name: "Portfolio",
    data() {
        const projetos = projetosLista;
        const textos = {
            'pt-br': {
                botaoCard: "Ver mais",
                portfolio: "Portfólio"
            },
            en: {
                botaoCard: "See more",
                portfolio: "PORTFOLIO"
            }
        }
        let isModalOpen = false
        let tituloModal = ''
        return {
            projetos,
            textos,
            isModalOpen,
            tituloModal
        }
    },
    methods: {
        idiomaSelecionado(): 'pt-br' | 'en' {
            return store.getters.idiomaAtivado.nome.toLowerCase()
        }
    }
})
</script>
