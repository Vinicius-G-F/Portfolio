<template>
    <section class="about" id="about">
        <div class="about__container">
            <h2>{{ textos[idiomaSelecionado].titulo }}</h2>
            <p>
                {{ textos[idiomaSelecionado].paragrafo1 }}
                <br>
                <br>
                {{ textos[idiomaSelecionado].paragrafo2 }}
                <br>
                <br>
                {{ textos[idiomaSelecionado].paragrafo3 }}
            </p>     
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '../store/store';
const store = useStore()

export default defineComponent({
    name: "About",
    data(){
        const textos = {
            "pt-br": {
                paragrafo1: `Olá, eu sou Vinícius Graciano Faria, um entusiasta em tecnologias web e desenvolvedor Front-end freelancer. Com 28 anos de idade, minha jornada começou como um ex-estudante de engenharia de produção, mas minha paixão pela programação me levou a seguir um caminho diferente. Tenho um inglês avançado, o que me ajuda a ler documentações e dominar novas tecnologias rapidamente.`,
                paragrafo2: `Nos meus momentos de lazer, você pode me encontrar assistindo animes, explorando mundos virtuais em diversos jogos ou desafiando minha mente com partidas de xadrez (meu rating no chess.com em partidas rápidas é de cerca de 1500). Além disso, praticar muay thai é uma parte importante da minha vida, pois me ajuda a manter o equilíbrio entre mente e corpo.`,
                paragrafo3: `Adoro unir minha criatividade e habilidades técnicas para criar experiências web incríveis. Se você está procurando um desenvolvedor Front-end apaixonado e comprometido, estou aqui para ajudar no que for preciso.`,
                titulo: `Quem sou`

            },
            "en": {
                paragrafo1: `Hello, I'm Vinícius Graciano Faria, a web technology enthusiast and freelance Front-end developer. At the age of 28, my journey began as a former production engineering student, but my passion for programming led me to follow a different path. I have advanced English, which helps me read documentation and master new technologies quickly.`,
                paragrafo2: `In my leisure time, you can find me watching anime, exploring virtual worlds in various games or challenging my mind with games of chess (my rating on chess.com in quick games is around 1500). Furthermore, practicing Muay Thai is an important part of my life as it helps me maintain balance between mind and body.`,
                paragrafo3: `I love combining my creativity and technical skills to create amazing web experiences. If you're looking for a passionate and committed Front-end developer, I'm here to help with whatever you need.`,
                titulo: `SKILLS`
            }
        }
        return {
            textos
        }
    },
    computed: {
        idiomaSelecionado(): "pt-br" | "en"{
            return store.getters.idiomaAtivado.nome.toLowerCase()
        }
    }
})
</script>

<style lang="scss" scoped>
.about{
    @apply flex justify-center dark:text-white;
    &__container {
        @apply xl:w-desktop px-4 sm:px-8 xl:px-0 flex flex-col items-center;
        h2 {
            @apply font-bold text-[24px] sm:text-[32px] pt-10 pb-8;
        }
        p{
            @apply sm:text-[24px];
        }
    }
}
</style>