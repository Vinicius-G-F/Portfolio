<template>
    <section class="portfolio">
        <h2>Portfólio</h2>
        <div class="projetos-container">
            <div class="projeto" v-for="projeto in projetos" v-bind:key="projeto.id">
                <img :src="projeto.imgURL" :alt="projeto.textos[idiomaSelecionado()].titulo">
                <div>
                    <h3>{{ projeto.textos[idiomaSelecionado()].titulo }}</h3>
                    <p>{{ projeto.textos[idiomaSelecionado()].intro }}</p>
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
        @apply mb-4 font-bold text-[32px] dark:text-white;
    }

    .projetos-container {
        @apply w-desktop flex flex-wrap justify-center gap-4 justify-self-center;

        .projeto {
            @apply w-card bg-white mt-4 rounded-[16px] px-2 pt-2 pb-6 flex flex-col items-center dark:text-white dark:shadow-cardProjeto dark:bg-dark-200;
            box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);

            img {
                @apply w-[334px] h-[200px] rounded-[16px] mb-6;
            }

            div {
                @apply text-left px-6;

                h3 {
                    @apply mb-4 font-semibold;
                }

                p {
                    @apply mb-6;
                }

                a {
                    @apply text-white bg-blue-300 py-3 px-5 rounded-[6px] hover:bg-purple-300 duration-150;
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
                botaoCard: "Ver mais"
            },
            en: {
                botaoCard: "See more"
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
