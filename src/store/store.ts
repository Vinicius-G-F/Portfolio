import { Store, createStore } from "vuex";
import IIdioma from "../interfaces/IIdioma";

export interface Estado {
    listaDeIdiomas: IIdioma[]
    isDarkMode: boolean
}

export const store = createStore<Estado>({
    state() {
        return {
            listaDeIdiomas: [
                {
                    nome: "pt-BR",
                    estaAtivo: true,
                    imagemBandeira:"/assets/img/icons/br-flag.svg",
                    imgAlt: "Bandeira do Brasil"
                },
                {
                    nome: "en",
                    estaAtivo: false,
                    imagemBandeira:"/assets/img/icons/en-flag.svg",
                    imgAlt: "Bandeira dos EUA"
                }
            ],
            isDarkMode: false
        }
    },
    mutations: {
        trocarIdioma(state, idiomaNome){
            state.listaDeIdiomas = state.listaDeIdiomas.map(idioma=>{
                if(idioma.nome === idiomaNome){
                    idioma.estaAtivo = true
                } else {
                    idioma.estaAtivo = false
                }
                return idioma;
            })
        },
        darkModeToggle(state){
            state.isDarkMode = !state.isDarkMode
        }
    },
    getters: {
        idiomaAtivado(state){ return state.listaDeIdiomas.find((idioma:IIdioma)=> idioma.estaAtivo) },
        idiomasDesativados(state){ return state.listaDeIdiomas.filter(idioma=> !idioma.estaAtivo) }
    }
    
})

export function useStore (): Store<Estado> {
    return store as Store<Estado>
}