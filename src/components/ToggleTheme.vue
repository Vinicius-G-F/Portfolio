<template>
    <div v-if="!isDarkMode" class="botao-lua" @click="darkThemeTogle">
        <p>{{ textos[idiomaSelecionado()].modoEscuro }}</p>
        <img src="/assets/img/icons/moon.svg" alt="escurecer a página">
    </div>
    <div v-else class="botao-sol" @click="darkThemeTogle">
        <p>{{textos[idiomaSelecionado()].modoClaro}}</p>
        <img src="/assets/img/icons/sun.svg" alt="escurecer a página">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '../store/store';

const store = useStore();

export default defineComponent({
    name: 'ToggleTheme',
    data(){
        const textos = {
            'pt-br': {
                modoEscuro: "modo escuro",
                modoClaro: "modo claro"
            },
            'en' : {
                modoEscuro: "dark mode",
                modoClaro: "light mode"
            }
        }
        return {
            textos
        }
    },
    computed: {
        isDarkMode(){
            return store.state.isDarkMode
        },

    },
    methods: {
        darkThemeTogle() {
            document.documentElement.classList.toggle('dark');
            store.commit('darkModeToggle')
        },
        idiomaSelecionado(): 'pt-br' | 'en' {
            return store.getters.idiomaAtivado.nome.toLowerCase()
        }
    },
    mounted() {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeMediaQuery.matches && this.darkThemeTogle()
    }
})
</script>

<style lang="scss" scoped>
    .botao-lua {
        @apply flex items-center gap-6 px-8 py-4 bg-purple-400 fixed bottom-6 left-6 rounded-[99px] text-white cursor-pointer;
        
        &:hover {
            p {
            @apply block;
        }    
        }
        p {
            @apply hidden;
        }
    }
    .botao-sol {
        @apply flex items-center gap-6 px-8 py-4 bg-yellow-400 fixed bottom-6 left-6 rounded-[99px] cursor-pointer;
        
        &:hover {
            p {
            @apply block;
        }    
        }
        p {
            @apply hidden;
        }
    }
</style>