<template>
    <section class="contato">
        <h2>{{textos[idiomaSelecionado].titulo}}</h2>
        <form>
            <div class="relative"> 
                <input required class="peer placeholder-transparent" type="text" id="nome" name="nome" :placeholder="textos[idiomaSelecionado].campoNome">
                <label for="nome" class="absolute dark:text-white dark:peer-focus:text-white dark:peer-placeholder-shown:text-white left-4 top-0 text-gray-400 text-[20px] peer-placeholder-shown:text-[24px] peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 transition-all  peer-focus:top-0 peer-focus:text-gray-400 peer-focus:text-[20px]">{{textos[idiomaSelecionado].campoNome}}</label>
            </div>
            <div class="relative">
                <input class="peer placeholder-transparent" required type="email" id="email" name="email" :placeholder="textos[idiomaSelecionado].campoEmail">
                <label class="absolute dark:text-white dark:peer-focus:text-white dark:peer-placeholder-shown:text-white left-4 top-0 text-gray-400 text-[20px] peer-placeholder-shown:text-[24px] peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 transition-all  peer-focus:top-0 peer-focus:text-gray-400 peer-focus:text-[20px]" for="email">{{textos[idiomaSelecionado].campoEmail}}</label>
            </div>
            <div class="relative">
                <textarea class="peer placeholder-transparent" required id="mensagem" name="mensagem" :placeholder="textos[idiomaSelecionado].campoMensagem"></textarea>
                <label class="absolute dark:text-white dark:peer-focus:text-white dark:peer-placeholder-shown:text-white left-4 top-0 text-gray-400 text-[20px] peer-placeholder-shown:text-[24px] peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 transition-all  peer-focus:top-0 peer-focus:text-gray-400 peer-focus:text-[20px]" for="mensagem">{{textos[idiomaSelecionado].campoMensagem}}</label>
            </div>
            <button type="submit">
                {{ textos[idiomaSelecionado].botao }}
            </button>
        </form>
    </section>
</template>

<style lang="scss" scoped>
    .contato {
        @apply w-desktop mx-auto mt-14;
        h2{
            @apply text-center font-bold text-[32px] pb-4 dark:text-white;
        }
        form {
                div {
                    @apply w-full mb-4;
                    input, textarea {
                        @apply w-full border-2 border-black rounded-[16px] pl-4 pb-4 pt-6 dark:text-white text-black text-[24px] dark:bg-dark-200;
                    }
                    textarea {
                        @apply h-[128px];
                    }
                }
                button {
                    @apply px-8 py-4 bg-[#0029FF] text-white rounded-[16px] text-[24px] font-semibold;
                }
            }
    }
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '../store/store';

const store = useStore()

export default defineComponent({
    name:"Contact",
    computed: {
        idiomaSelecionado(): 'pt-br' | 'en' {
            return store.getters.idiomaAtivado.nome.toLowerCase()
        }
    },
    data() {
        const textos = {
            ["pt-br"]: {
                titulo: "Fale Comigo",
                campoNome: "Nome",
                campoEmail: "E-mail",
                campoMensagem: "Mensagem",
                botao: "Enviar"
            },
            en: {
                titulo: "CONTACT",
                campoNome: "Name",
                campoEmail: "E-mail",
                campoMensagem: "Message",
                botao: "Send"
            }
        }
        return {
                textos
        }
    }
})
</script>