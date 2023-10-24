<template>
    <main class="home">
        <Banner />
        <About />
        <Skills />
        <Portfolio />
        <Certification />
        <Contact />
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from '../components/Banner.vue';
import About from '../components/About.vue';
import Skills from "../components/Skills.vue"
import Portfolio from '../components/Portfolio.vue';
import Certification from '../components/Certification.vue';
import Contact from '../components/Contact.vue';

export default defineComponent({
    name: 'Home',
    components: {
        Banner,
        About,
        Skills,
        Portfolio,
        Certification,
        Contact
    },
    mounted() {
        const element = document.getElementById('cabecalho');

            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
    },
})
</script>

<style lang="scss" scoped>
    .home {
        @apply bg-gray-100 dark:bg-dark-900 pb-10;
        
    }
</style>