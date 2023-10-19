<template>
    <header class="cabecalho">
        <div class="cabecalho__container">
            <nav>
                <ul class="links-nav">
                    <li>
                        <router-link to="/">
                            {{ textos[idiomaSelecionado].link1 }}
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            {{ textos[idiomaSelecionado].link2 }}
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            {{ textos[idiomaSelecionado].link3 }}
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            {{ textos[idiomaSelecionado].link4 }}
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            {{ textos[idiomaSelecionado].link5 }}
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            {{ textos[idiomaSelecionado].link6 }}
                        </router-link>
                    </li>
                </ul>
            </nav>
            
            <SeletorDeIdioma />
            
            <div class="redes-sociais">
                <a target="_blank" href="https://www.linkedin.com/in/vinicius-front-dev-react/">
                    <img src="/assets/img/icons/linkedin.svg" alt="linkedin">
                </a>
                <a target="_blank" href="https://github.com/Vinicius-G-F">
                    <img src="/assets/img/icons/github.svg" alt="github">
                </a>
                <a v-if="idiomaSelecionado === 'pt-br'" target="_blank" href="https://api.whatsapp.com/send?phone=5522998911117&text=Ol%C3%A1,%20eu%20vim%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20falar%20sobre...">
                    <img src="/assets/img/icons/whatsapp.svg" alt="whatsapp">
                </a>
                <a v-else target="_blank" href="https://api.whatsapp.com/send?phone=5522998911117&text=%20Hello,%20I%20came%20across%20your%20website%20and%20would%20like%20to%20talk%20about...">
                    <img src="/assets/img/icons/whatsapp.svg" alt="whatsapp">
                </a>
            </div>

        </div>
    </header>
</template>



<script lang="ts">
import { defineComponent } from 'vue';
import SeletorDeIdioma from "./SeletorDeIdioma.vue"
import { useStore } from '../store/store';

const store = useStore();

export default defineComponent({
    name: 'Cabecalho',
    components: {
        SeletorDeIdioma
    },
    computed:{
        idiomaSelecionado(): 'pt-br' | 'en' {
            return store.getters.idiomaAtivado.nome.toLowerCase()
        }
    },
    data(){
        const textos = {
            ["pt-br"]: {
                link1: "HOME",
                link2: "QUEM SOU",
                link3: "O QUE FAÇO",
                link4: "PORTFÓLIO",
                link5: "CERTIFICADOS",
                link6: "FALE COMIGO"
            },
            ["en"]: {
                link1: "HOME",
                link2: "ABOUT",
                link3: "SKILLS",
                link4: "PORTFOLIO",
                link5: "CERTIFICATES",
                link6: "CONTACT"
            }
        };
        return {
            textos
        };
    }, methods: {
    darkThemeTogle() {
      document.documentElement.classList.toggle('dark');
    }
  }
})
</script>




<style lang="scss" scoped>

.cabecalho{
    @apply bg-white dark:bg-dark-200 flex justify-center h-16 relative z-10;
    padding: 8px 0;
    &__container{
        @apply flex justify-between items-start;
        width: 1128px;
        nav {
            @apply h-full flex items-center;
            .links-nav {
                @apply flex gap-4;
                li {
                    a {
                        @apply dark:invert;
                    }
                }
            }
        }
        .redes-sociais{
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
