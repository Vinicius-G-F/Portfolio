<template>
    <div class="bg-dark-900">
        <div class="banner"></div>
    
        <div class="mensagem">
            <p>
                <span class="typed-text">{{ typeValue0 }}</span>
                <span v-if="paragraphIndex <= 0" class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
                <br>
                <br>

                <span class="typed-text">{{ typeValue1 }}</span>
                <span v-if="paragraphIndex >= 1" class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
            </p>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '../store/store';
const store = useStore()

export default defineComponent({
    name:"Banner",
    data(){

        const textos = {
            ["pt-br"]: {
                0: `Olá e seja bem vindo ao meu site pessoal! Meu maior objetivo é que juntos possamos usar a internet como ponte para prospectar novos clientes para o seu negócio!`,
                1:`Eu me chamo Vinícius Graciano Faria e estou ansioso para poder te conhecer. =)`},
            ["en"]: {
                0: `Hello and welcome to my personal website! My main objective is that together we can use the internet as a bridge to prospect new customers for your business!`,
                1:`My name is Vinícius Graciano Faria and I'm looking forward to meeting you. =)`},
        }
        const paragraphIndex: 0 | 1 = 0
        return {
            typeValue0: '',
            typeValue1: '',
            typeStatus: false,
            textos,
            typingSpeed: 30,
            charIndex: 0,
            paragraphIndex
        }
    },
    computed: {
        idiomaSelecionado(): "pt-br" | "en" {
            return store.getters.idiomaAtivado.nome.toLowerCase()
        }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.textos[this.idiomaSelecionado][this.paragraphIndex].length) {

          if(!this.typeStatus) this.typeStatus = true;

          this[`typeValue${this.paragraphIndex}`] += this.textos[this.idiomaSelecionado][this.paragraphIndex].charAt(this.charIndex);
          this.charIndex++;

          setTimeout(this.typeText, this.typingSpeed);
        }
        else if(this.paragraphIndex < 1) {
          this.paragraphIndex++;
          this.charIndex = 0;

          this.typeText();
        }
        else {
          this.typeStatus = false;
        }
      }
    },
    mounted() {
        setTimeout(this.typeText, 1000);
    }, 
    watch: {
        idiomaSelecionado(){
            this.typeValue0 = ''
            this.typeValue1 = ''
            this.charIndex = 0
            this.paragraphIndex = 0
            if(!this.typeStatus) {
                this.typeText()
            }
        }
    }
})

</script>

<style lang="scss" scoped>
    .banner {
        @apply bg-fixed h-[calc(100vh-56px)] sm:h-[calc(100vh-78px)] xl:h-[calc(100vh-4rem)] bg-contain flex justify-center items-center bg-dark-900;
        background-image: url('/assets/img/banner.jpg');
        opacity: 0.8;
    }
    .mensagem {
        @apply sm:text-titulo text-[24px] font-bold w-full px-4 sm:px-8 xl:p-0 xl:w-desktop text-white text-center absolute flex items-center top-16 h-[calc(100vh-56px)] sm:h-[calc(100vh-78px)] xl:h-[calc(100vh-4rem)] -translate-x-2/4 left-2/4; 
        p {
            span.cursor {
                display: inline-block;
                margin-left: 3px;
                width: 4px;
                background-color: #fff;
                animation: cursorBlink 1s infinite;
            }

            span.cursor.typing {
                animation: none;
            }
        }
    }
    @keyframes cursorBlink {
        49% { background-color: #fff; }
        50% { background-color: transparent; }
        99% { background-color: transparent; }
    }
</style>

