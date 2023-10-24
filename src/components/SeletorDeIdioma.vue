<template>
    <div class="lang-selector" @click="alternarMenu" ref="languageSelectorRef">
        <div class="lang-option lang-option--selected">
            <img :src="idiomaSelecionado.imagemBandeira" :alt="idiomaSelecionado.imgAlt">
            <p class="lang-text">{{ idiomaSelecionado.nome.toLowerCase() }}</p>
            <img class="seta" src="/assets/img/icons/chevron-down.svg" alt="expandir para baixo"
                :style="isLangMenuOpen ? 'transform: rotate(180deg);' : ''">
        </div>
        <div @click.stop v-for="(idioma, index) in idiomasNaoSelecionados" :key="index" @click="trocarIdioma(idioma.nome)"
            class="lang-option hover:underline" :class="isLangMenuOpen ? 'flex' : 'hidden'">
            <img :src="idioma.imagemBandeira" :alt="idioma.imgAlt">
            <p class="lang-text">{{ idioma.nome.toLowerCase() }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, computed } from 'vue';
import IIdioma from '../interfaces/IIdioma';
import { useStore } from '../store/store';
const store = useStore();


export default defineComponent({
    name: "SeletorDeIdioma",
    setup() {
        const languageSelectorRef = ref<null | HTMLDivElement>(null)
        let isLangMenuOpen = ref(false)
        const textos = {
            "pt-br": {
                title: "Vinícius Graciano Faria - Portfólio"  
            },
            en: {
                title: "Vinícius Graciano Faria - Portfolio"  
            },

        }
        const trocarIdioma = (idioma: "pt-BR" | "en") => {
            store.commit("trocarIdioma", idioma)
            document.documentElement.setAttribute('lang', idioma)
            isLangMenuOpen.value = false
            const idiomaFormatado = idioma.toLowerCase() as "pt-br" | "en"
            document.title = textos[idiomaFormatado].title
        }
        const alternarMenu = ()=>{
            isLangMenuOpen.value = !isLangMenuOpen.value
        }

        const aoClicarForaLangSelector = (event: MouseEvent) => {
            if (languageSelectorRef.value && !languageSelectorRef.value.contains(event.target as Node)) {
                    isLangMenuOpen.value = false;
            }
       
        }

        const idiomaSelecionado = computed((): IIdioma => {
            return store.getters.idiomaAtivado
        })

        const idiomasNaoSelecionados = computed((): IIdioma[]=>{
            return store.getters.idiomasDesativados
        })

        onMounted(() => {
            document.addEventListener('click', aoClicarForaLangSelector);
            const idiomaFormatado = idiomaSelecionado.value.nome.toLowerCase() as "pt-br" | "en"
            document.title = textos[idiomaFormatado].title
        });

        onBeforeUnmount(() => {
            document.removeEventListener('click', aoClicarForaLangSelector);
        });

        return {
            trocarIdioma,
            isLangMenuOpen,
            languageSelectorRef,
            alternarMenu,
            aoClicarForaLangSelector,
            idiomaSelecionado,
            idiomasNaoSelecionados
        }
    }
})
</script>



<style lang="scss" scoped>
.lang-selector {
    @apply border p-2 flex flex-col gap-8 cursor-pointer bg-white dark:bg-dark-200;

    .lang-option {
        @apply gap-2;
        text-decoration-skip-ink: none;

        p {
            @apply mr-14 dark:invert text-[20px];
        }

        .seta {
            @apply dark:invert;
        }
    }

    .lang-option--selected {
        @apply flex;

        p {
            @apply underline dark:invert;
        }
    }
}
</style>
