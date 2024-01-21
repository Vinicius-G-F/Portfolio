<template>
    <footer class="rodape">
        <div class="rodape__container">
            <p class="creditos">{{ textos[idiomaSelecionado].creditos }}</p>
            <div class="redes">
                <p>{{ textos[idiomaSelecionado].redes }}</p>
                <div class="redes__icones">
                    <a target="_blank" href="https://www.linkedin.com/in/vinicius-front-dev-react/">
                        <img src="/assets/img/icons/linkedin.svg" alt="linkedin">
                    </a>
                    <a target="_blank" href="https://github.com/Vinicius-G-F">
                        <img src="/assets/img/icons/github.svg" alt="github">
                    </a>
                    <a v-if="idiomaSelecionado === 'pt-br'" target="_blank"
                        href="https://api.whatsapp.com/send?phone=5522998911117&text=Ol%C3%A1,%20eu%20vim%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20falar%20sobre...">
                        <img src="/assets/img/icons/whatsapp.svg" alt="whatsapp">
                    </a>
                    <a v-else target="_blank"
                        href="https://api.whatsapp.com/send?phone=5522998911117&text=%20Hello,%20I%20came%20across%20your%20website%20and%20would%20like%20to%20talk%20about...">
                        <img src="/assets/img/icons/whatsapp.svg" alt="whatsapp">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.rodape {
    @apply bg-black text-white font-bold text-[16px] py-5 dark:bg-dark-200;

    &__container {
        @apply px-4 sm:px-8 xl:px-0 xl:w-desktop mx-auto flex flex-col sm:flex-row justify-between items-center;
        .creditos{
            @apply text-center border-b border-white sm:border-none pb-4 mb-4 sm:pb-0 sm:mb-0;
        }
        .redes {
            @apply flex items-center flex-col pb-4 sm:pb-0;

            &__icones {
                @apply invert flex;

                img {
                    @apply w-[32px] h-[32px];
                }
            }
        }
    }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '../store/store';

const store = useStore()

export default defineComponent({
    name: "Rodape",
    data() {
        const dataAtual = new Date();
        const ano = dataAtual.getFullYear();
        const textos = {
            ["pt-br"]: {
                creditos: `${ano} © Desenvolvido por Vinícius Graciano Faria`,
                redes: "Minhas redes:"
            },
            en: {
                creditos: `${ano} © Developed by Vinícius Graciano Faria`,
                redes: "My social networks:"
            }
        }
        return {
            textos
        }
    },
    computed: {
        idiomaSelecionado(): 'pt-br' | 'en' {
            return store.getters.idiomaAtivado.nome.toLowerCase()
        }
    }
})
</script>