<template>
    <section class="certificados">
        <h2>{{ textos[idiomaSelecionado].tituloSecao }}</h2>
        <div class="certificados__lista">
            <div v-for="(certificado, index) in certificadosParaVisualizacao" v-bind:key="certificado.id"
                class="certificado" :class="index >= maximoProjetosMobileETablet ? 'hidden xl:block' : ''"
                @click="abrirModal(certificado.imgCertificado[idiomaSelecionado].frente, certificado.imgCertificado[idiomaSelecionado].verso)">
                <div class="imagem-container">
                    <img :src="certificado.imgCertificadoIcone" :alt="certificado.textos[idiomaSelecionado].curso">
                </div>
                <div class="descricao-container">
                    <div>
                        <h4>{{ textos[idiomaSelecionado].escola }}: {{ certificado.escola }}</h4>
                        <h5><strong>{{ textos[idiomaSelecionado].curso }}:</strong> {{
                            certificado.textos[idiomaSelecionado].curso }}</h5>
                    </div>
                    <p>* {{ textos[idiomaSelecionado].clicavel }}</p>
                </div>
            </div>
        </div>
        <button class="desktop-botao" v-if="projetosQtd <= certificados.length" type="button" @click="mostrarMais3">{{
            textos[idiomaSelecionado].botao }}<img src="/assets/img/icons/downArrow.svg" :alt="textos[idiomaSelecionado].botao"></button>
        <button class="mobile-tablet-botao"
            v-if="projetosQtd <= certificados.length || projetosQtd > maximoProjetosMobileETablet" type="button"
            @click="mostrarMais2">{{ textos[idiomaSelecionado].botao }}<img src="/assets/img/icons/downArrow.svg"
                :alt="textos[idiomaSelecionado].botao"></button>

    </section>


    <div @click="aoClicarFora">
        <div v-if="isModalOpen" class="fixed modal-overlay inset-0 flex items-center justify-center z-10">
            <div class="modal-overlay"></div>
            <div class="modal-container dark:bg-[#1B1B1B] dark:shadow-modalShadowDark bg-white w-min shadow-modalShadowLight" @click.stop>
                <header class="flex justify-end border-b-2 border-black"><button class="text-[#FF0000] font-bold text-[32px] leading-8 m-4 dark:text-white" type="button" @click="fecharModal">X</button></header>
                <main>
                    <img v-if="!rotacionarImgModal" class="max-w-[80vw] max-h-[65vh]" :src="imgModalFrente" :alt="textos[idiomaSelecionado].certificado">
                    <img v-if="rotacionarImgModal" class="max-w-[80vw] max-h-[65vh]" :src="imgModalVerso" :alt="textos[idiomaSelecionado].certificado">
                </main>
                <footer class="flex justify-end p-4 border-t-2 border-black">
                    <button @click="rotacionarImagem" class="border rounded-[16px] py-4 px-8 border-black mr-8 dark:text-white dark:border-white dark:bg-black" type="button"><img src="/assets/img/icons/rotate-360.svg" class="dark:invert" :alt="textos[idiomaSelecionado].botaoRotacionar"></button>
                    <button type="button" @click="fecharModal"
                        class="text-[#FF0000] dark:text-white dark:border-white dark:bg-black border-2 border-red-100 py-4 px-8 rounded-[16px]">{{ textos[idiomaSelecionado].fechar }}</button>
                </footer>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.certificados {
    @apply mx-auto w-desktop mt-14;

    h2 {
        @apply text-center text-[32px] font-bold mb-8 dark:text-white;
    }

    &__lista {
        @apply grid;
        grid-template-columns: 443px 443px 1fr;

        .certificado {
            @apply w-[246px] h-[290px] bg-[url(/assets/img/certificados/placa-de-madeira.png)] bg-no-repeat bg-top mb-8 drop-shadow-certificadoLight dark:drop-shadow-certificadoDark cursor-pointer;
            background-size: 370px;

            &:hover {
                animation: animacaoPlaca 0.5s linear infinite;

            }

            .imagem-container {
                @apply w-full pt-[109px];

                img {
                    @apply mx-auto w-[56px] h-[56px] border-4 border-[#4E311A] rounded-[16px] bg-[#A97C5B];
                }
            }

            .descricao-container {
                @apply px-5 text-white font-bold pt-2 h-[94px] leading-[normal] justify-between flex flex-col;

                div {
                    h5 {
                        @apply text-[11px] pt-1;

                        strong {
                            @apply text-[14px];
                        }
                    }
                }

                p {
                    @apply text-[11px] xl:hidden text-center;
                }
            }
        }
    }

    .desktop-botao {
        @apply border hidden xl:flex items-center gap-4 px-8 py-4 border-black mx-auto underline text-[24px] rounded-[16px] dark:invert;
    }

    .mobile-tablet-botao {
        @apply border flex xl:hidden items-center gap-4 px-8 py-4 border-black mx-auto underline text-[24px] rounded-[16px] dark:invert;
    }
}

@keyframes animacaoPlaca {
    0% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(5deg);
    }

    50% {
        transform: rotate(0deg);
    }

    75% {
        transform: rotate(-5deg);
    }

    100% {
        transform: rotate(0deg);
    }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import certificadosLista from '../data/certificados.json'
import { useStore } from '../store/store';

const store = useStore()

export default defineComponent({
    name: "Certification",
    data() {
        const certificados = certificadosLista
        const projetosQtd = 6;
        const maximoProjetosMobileETablet = 4;
        const textos = {
            "pt-br": {
                tituloSecao: "Certificados",
                escola: "Escola",
                curso: "curso",
                botao: "Mostra mais",
                clicavel: "Toque aqui para saber mais",
                fechar: "Fechar",
                placaDeMadeira: "Placa de madeira",
                botaoRotacionar: "Rotacionar",
                certificado: "Certificado"
            },
            en: {
                tituloSecao: "CERTIFICATION",
                escola: "School",
                curso: "Course",
                botao: "Show more",
                clicavel: "Touch here to know more",
                fechar: "Close",
                placaDeMadeira: "Wooden board",
                botaoRotacionar: "Rotate",
                certificado: "Certificate"
            }
        }
        return {
            certificados,
            textos,
            projetosQtd,
            maximoProjetosMobileETablet,
            isModalOpen: false,
            imgModalFrente: '',
            imgModalVerso: '',
            rotacionarImgModal: false
        }
    },
    methods: {
        mostrarMais3() {
            this.projetosQtd += 3;
        },
        mostrarMais2() {
            if (this.maximoProjetosMobileETablet < this.projetosQtd) {
                this.maximoProjetosMobileETablet += 2
                return
            }
            this.maximoProjetosMobileETablet += 2
            this.projetosQtd += 2;
        },
        abrirModal(imgFrente: string, imgVerso: string) {
            this.imgModalFrente = imgFrente
            this.imgModalVerso = imgVerso
            this.isModalOpen = true
            this.rotacionarImgModal = false
        },
        fecharModal() {
            this.isModalOpen = false
        },
        rotacionarImagem(){
            this.rotacionarImgModal = !this.rotacionarImgModal 
        },
        aoClicarFora(event: MouseEvent) {
            if (event.target instanceof Element && event.target.classList.contains("modal-overlay")) {
                this.fecharModal();
            }

        }
    },
    computed: {
        certificadosParaVisualizacao() {
            return this.certificados.filter((_, index) => {
                if (index < this.projetosQtd) {
                    return true
                }
                return false
            })
        },
        idiomaSelecionado(): 'pt-br' | 'en' {
            return store.getters.idiomaAtivado.nome.toLowerCase()
        }
    }
})
</script>