<template>
    <header ref="menuHamburguerRef" class="cabecalho" id="cabecalho">
        <router-link to="/">
            <img class="cabecalho__logo" src="/assets/img/icons/logo.svg" alt="Vinícius Graciano Faria">
        </router-link>
        <img @click="toggleMenuHamburguer" class="cabecalho__menu-hamburguer" src="/assets/img/icons/menu-hamburguer.svg"
            :alt="textos[idiomaSelecionado].altLogo">
        <div class="cabecalho__container" :class="menuHamburguerAberto ? 'flex' : 'hidden'">
            <button @click="toggleMenuHamburguer" @click.stop class="fechar-btn" type="button">X</button>
            <nav>
                <ul class="links-nav">
                    <li>
                        <router-link to="/">
                            {{ textos[idiomaSelecionado].link1 }}
                        </router-link>
                    </li>
                    <li @click="scrollToElement('about')">
                        {{ textos[idiomaSelecionado].link2 }}
                    </li>
                    <li @click="scrollToElement('skills')">
                        {{ textos[idiomaSelecionado].link3 }}
                    </li>
                    <li @click="scrollToElement('portfolio')">
                        {{ textos[idiomaSelecionado].link4 }}
                    </li>
                    <li @click="scrollToElement('certification')">
                        {{ textos[idiomaSelecionado].link5 }}
                    </li>
                    <li @click="scrollToElement('contact')">
                        {{ textos[idiomaSelecionado].link6 }}
                    </li>
                </ul>
            </nav>

            <SeletorDeIdioma />

            <div class="toggle-theme">
                <label for="dark-mode" class="cursor-pointer">{{ textos[idiomaSelecionado].modoEscuro }}</label>
                <label @change="darkThemeToggle" class="toggle-theme__caixa">
                    <input type="checkbox" v-model="isDarkMode" id="dark-mode" class="sr-only peer">
                    <div
                        class="toggle-btn peer peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-400 dark:peer-focus:ring-gray-500 peer-checked:after:translate-x-full peer-checked:after:border-white dark:peer-checked:bg-[#bababa]">
                    </div>
                </label>
            </div>

            <div class="redes-sociais">
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
    </header>
</template>




<style lang="scss" scoped>
.cabecalho {
    @apply bg-white px-8 xl:px-0 py-2 dark:bg-dark-200 flex justify-between xl:justify-center xl:h-16 relative z-10;
    a {
        .cabecalho__logo {
            @apply xl:hidden dark:invert sm:h-[60px] h-[40px];
        }
    }

    &__menu-hamburguer {
        @apply xl:hidden dark:invert cursor-pointer sm:h-[60px] h-[40px];
    }

    &__container {
        @apply justify-between items-start xl:flex xl:flex-row flex-col xl:w-desktop bg-white dark:bg-dark-200 absolute xl:static top-0 right-0 px-8 pb-4 xl:p-0 text-center;

        .fechar-btn {
            @apply xl:hidden text-[32px] dark:text-white ml-auto pt-2;
        }

        nav {
            @apply h-full flex items-center w-full xl:w-auto;

            .links-nav {
                @apply flex gap-4 xl:flex-row flex-col w-full xl:w-auto py-4 xl:p-0;

                li {
                    @apply dark:invert cursor-pointer xl:border-0 border-b border-black pb-4 xl:pb-0;
                }
            }
        }

        .toggle-theme {
            @apply flex flex-col items-center w-full dark:text-white py-2 gap-4 border-y border-black dark:border-white my-4 xl:hidden;
            &__caixa {
                @apply relative inline-flex items-center cursor-pointer;
                .toggle-btn {
                    @apply w-9 h-5 border-2 border-black dark:border-0 rounded-full dark:bg-[#bababa] dark:border-gray-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-black dark:after:bg-dark-200 after:border after:rounded-full after:h-4 after:w-4 after:transition-all; 
                }
            }
        }

        .redes-sociais {
            @apply flex gap-5 h-full items-center;

            img {
                @apply dark:invert;
            }
        }
    }

}

.lang-text {
    width: -webkit-fill-available;
}
</style>



<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import SeletorDeIdioma from "./SeletorDeIdioma.vue"
import { useStore } from '../store/store';
import router from '../router';

const store = useStore();

export default defineComponent({
    name: 'Cabecalho',
    components: {
        SeletorDeIdioma
    },
    computed: {
        idiomaSelecionado(): 'pt-br' | 'en' {
            return store.getters.idiomaAtivado.nome.toLowerCase()
        },
        isDarkMode(){
            return store.state.isDarkMode
        }
    },
    data() {
        const textos = {
            ["pt-br"]: {
                altLogo: "menu hamburguer",
                modoEscuro: "Modo escuro",
                link1: "INÍCIO",
                link2: "QUEM SOU",
                link3: "O QUE FAÇO",
                link4: "PORTFÓLIO",
                link5: "CERTIFICADOS",
                link6: "FALE COMIGO"
            },
            ["en"]: {
                altLogo: "burger menu",
                modoEscuro: "Dark mode",
                link1: "HOME",
                link2: "ABOUT",
                link3: "SKILLS",
                link4: "PORTFOLIO",
                link5: "CERTIFICATION",
                link6: "CONTACT"
            }
        };
        return {
            textos
        };
    }, methods: {
        darkThemeToggle() {
            document.documentElement.classList.toggle('dark');
            store.commit('darkModeToggle')
        },
        toggleMenuHamburguer(){
            this.menuHamburguerAberto = !this.menuHamburguerAberto
        },
        async scrollToElement(id: string) {
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                router.push({ path: '/' }).then(() => {
                    const elementRecarregado = document.getElementById(id);
                    if (elementRecarregado) {
                        elementRecarregado.scrollIntoView({ behavior: 'smooth' });
                    }
                })
            }

        }
    },
    setup() {
        const menuHamburguerAberto = ref(false)
        const menuHamburguerRef = ref<null | HTMLDivElement>(null)

        const aoClicarForaMenuHamburguer = (event: MouseEvent) => {
            if (menuHamburguerAberto.value && menuHamburguerRef.value && !menuHamburguerRef.value.contains(event.target as Node)) {
                menuHamburguerAberto.value = false;
            }
       
        }

        onMounted(() => {
            document.addEventListener('click', aoClicarForaMenuHamburguer);
        });

        onBeforeUnmount(() => {
            document.removeEventListener('click', aoClicarForaMenuHamburguer);
        });

        return {
            menuHamburguerAberto,
            menuHamburguerRef
        }
    },
    
})
</script>

