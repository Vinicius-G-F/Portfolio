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
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import IIdioma from '../interfaces/IIdioma';
import { useStore } from '../store/store';
const store = useStore();


export default defineComponent({
    name: "SeletorDeIdioma",
    computed: {
        idiomaSelecionado(): IIdioma {
            return store.getters.idiomaAtivado
        },
        idiomasNaoSelecionados(): IIdioma[] {
            return store.getters.idiomasDesativados
        }
    },
    setup() {
        const languageSelectorRef = ref<null | HTMLDivElement>(null)
        let isLangMenuOpen = ref(false)
        const trocarIdioma = (idioma: string) => {
            store.commit("trocarIdioma", idioma)
            document.documentElement.setAttribute('lang', idioma)
            isLangMenuOpen.value = false
        }
        const alternarMenu = ()=>{
            isLangMenuOpen.value = !isLangMenuOpen.value
        }

        const aoClicarFora = (event: MouseEvent) => {
            if (languageSelectorRef.value && !languageSelectorRef.value.contains(event.target as Node)) {
                    isLangMenuOpen.value = false;
            }
       
        }

        onMounted(() => {
            document.addEventListener('click', aoClicarFora);
        });

        onBeforeUnmount(() => {
            document.removeEventListener('click', aoClicarFora);
        });

        return {
            trocarIdioma,
            isLangMenuOpen,
            languageSelectorRef,
            alternarMenu,
            aoClicarFora
        }
    },
    mounted() {
    document.addEventListener('click', this.aoClicarFora);
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
