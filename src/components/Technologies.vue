<template>
    <section>
        <h2>{{ textos[idiomaSelecionado].titulo }}</h2>
        <div class="imagens-container">
            <div class="imagem-pc" v-for="img in projeto?.tecnologiasImg" v-bind:key="img.alt">
                <img :src="img.url" :alt="img.alt">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section {
        @apply xl:w-desktop mx-4 sm:mx-8 xl:mx-auto pt-16 sm:pb-8;
        h2 {
            @apply font-bold text-[32px] pb-4 dark:text-white;
        }
        .imagens-container {
            @apply flex flex-wrap gap-4 justify-between sm:gap-[calc((100%-(178px*3))/2)] xl:gap-[calc((100%-(320px*3))/2)];
            .imagem-pc {
                @apply bg-cardTecnologiaMobile sm:bg-cardTecnologiaTablet xl:bg-cardTecnologiaDesktop bg-[url(/assets/img/pc-vintage.png)] relative w-[150px] h-[100px] sm:w-[178px] sm:h-[122px] xl:w-[320px] xl:h-[220px] bg-center drop-shadow-blackShadow dark:drop-shadow-whiteShadow mb-8;
                img {
                    @apply absolute w-[45px] h-[38px] left-[29%] sm:left-[26%] top-[18%] sm:w-[60px] sm:h-[48px] xl:left-[27.5%] xl:w-[100px] xl:h-[86px] rounded-full;
                }
            }
        }

    }
</style>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import projetosLista from '../data/projetos.json';
import { useStore } from '../store/store';

const store = useStore()

export default defineComponent({
    name:"Technologies",
    props: {
        id: String
    },
    
    setup({id}){
        const projetos = projetosLista
        const projeto = projetos.find(projeto=> projeto.id.toString() === id)
        const idiomaSelecionado = computed(():"pt-br" | "en"=>{
            return store.getters.idiomaAtivado.nome.toLowerCase()
        })
        const textos = {
            "pt-br": {
                titulo: "Tecnologias utilizadas"
            },
            en: {
                titulo: "Technologies used"
            }
        }
        return {
            projeto,
            idiomaSelecionado,
            textos
        }
    }
})
</script>