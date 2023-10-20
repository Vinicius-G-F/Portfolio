<template>
    <section class="contato">
        <h2>{{ textos[idiomaSelecionado].titulo }}</h2>
        <form @submit.prevent="enviarMensagemForm">
            <div class="relative">
                <input required class="peer placeholder-transparent" type="text" id="nome" name="nome"
                    :placeholder="textos[idiomaSelecionado].campoNome" v-model="nome">
                <label for="nome"
                    class="absolute dark:text-white dark:peer-focus:text-white dark:peer-placeholder-shown:text-white left-4 top-0 text-gray-400 text-[20px] peer-placeholder-shown:text-[24px] peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 transition-all  peer-focus:top-0 peer-focus:text-gray-400 peer-focus:text-[20px]">{{ textos[idiomaSelecionado].campoNome }}</label>
            </div>
            <div class="relative">
                <input class="peer placeholder-transparent" required type="email" id="email" name="email"
                    :placeholder="textos[idiomaSelecionado].campoEmail" v-model="email">
                <label
                    class="absolute dark:text-white dark:peer-focus:text-white dark:peer-placeholder-shown:text-white left-4 top-0 text-gray-400 text-[20px] peer-placeholder-shown:text-[24px] peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 transition-all  peer-focus:top-0 peer-focus:text-gray-400 peer-focus:text-[20px]"
                    for="email">{{ textos[idiomaSelecionado].campoEmail }}</label>
            </div>
            <div class="relative">
                <textarea class="peer placeholder-transparent" required id="mensagem" name="mensagem"
                    :placeholder="textos[idiomaSelecionado].campoMensagem" v-model="mensagem"></textarea>
                <label
                    class="absolute dark:text-white dark:peer-focus:text-white dark:peer-placeholder-shown:text-white left-4 top-0 text-gray-400 text-[20px] peer-placeholder-shown:text-[24px] peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 transition-all  peer-focus:top-0 peer-focus:text-gray-400 peer-focus:text-[20px]"
                    for="mensagem">{{ textos[idiomaSelecionado].campoMensagem }}</label>
            </div>
            <button type="submit">
                {{ textos[idiomaSelecionado].botao }}
            </button>
        </form>
    </section>


    <div v-if="mostrarAlerta" class="fixed top-6 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md -translate-x-2/4 left-2/4"
        role="alert">
        <div class="flex">
            <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path
                        d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg></div>
            <div>
                <p class="font-bold">Mensagem enviada com sucesso!</p>
                <p class="text-sm">Obrigado por entrar em contato ;{{')'}}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.contato {
    @apply w-desktop mx-auto mt-14;

    h2 {
        @apply text-center font-bold text-[32px] pb-4 dark:text-white;
    }

    form {
        div {
            @apply w-full mb-4;

            input,
            textarea {
                @apply w-full border-2 border-black rounded-[16px] pl-4 pb-4 pt-6 dark:text-white text-black text-[24px] dark:bg-dark-200;
            }

            textarea {
                @apply h-[128px];
            }
        }

        button {
            @apply px-8 py-4 bg-[#0029FF] text-white rounded-[16px] text-[24px] font-semibold hover:bg-purple-300 duration-150;
        }
    }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '../store/store';
import enviarMensagem from '../util/enviarMensagem';

const store = useStore()

export default defineComponent({
    name: "Contact",
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
            textos,
            nome: '',
            email: '',
            mensagem: '',
            mostrarAlerta: false
        }
    },
    methods: {
        enviarMensagemForm() {
            const dadosDoFormulario =
                `
Nome: ${this.nome},

E-mail: ${this.email},

Mensagem: ${this.mensagem}
`
            this.nome = ''
            this.email = ''
            this.mensagem = ''
            const enviadorDeMensagens = enviarMensagem(dadosDoFormulario)
            enviadorDeMensagens()
            this.alertaView()
        },
        alertaView(){
            this.mostrarAlerta = true
            setTimeout(()=> this.mostrarAlerta=false ,5000)
        }
    }
})
</script>