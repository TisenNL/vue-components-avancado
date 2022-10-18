<template>
  <div id="app" class="container">
    <h1>Components Dinâmicos</h1>

    <button @click="componentSelecionado = 'AppHome'">Home</button>
    <button @click="componentSelecionado = 'AppPostsLista'">PostsLista</button>
    <button @click="componentSelecionado = 'AppSobre'">Sobre</button>
    <button @click="componentSelecionado = 'AppAssincrono'">Assincrono</button>
    <button @click="componentSelecionado = 'AppContato'">Contato</button>

    <KeepAlive max="2">
      <component
        :is="componentSelecionado"
        v-bind="propsAtuais"
        ></component>
    </KeepAlive>
  </div>
</template>

<script>
import AppHome from "./components/AppHome.vue";
import AppPostsLista from "./components/AppPostsLista.vue";
import AppSobre from "./components/AppSobre.vue";

const AppContato = {
  render: h => h({
    name: 'ContatoDados',
    template: '<h2>Component Anonimo</h2>'
  })
}

export default {
  components: {
    AppAssincrono: () => ({
      // eslint-disable-next-line no-unused-vars
      component: new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(import('./components/AppAssincrono.vue'))
          // reject('Carregamento falhou!')
        }, 2000)
      }),
      loading: { template: '<p>Carregando...</p>' },
      error: { template: '<p>Erro ao carregar component!</p>' },
      delay: 200,
      timeout: 3000
    }),
    AppContato,
    AppHome,
    AppPostsLista,
    AppSobre,
  },
  data() {
    return {
      componentSelecionado: "AppHome",
      posts: [
        {
          id: 1,
          titulo: "Components no Vue",
          conteudo: "Components são uma das peças mais importantes",
          autor: "Tiago Neves",
        },
        {
          id: 2,
          titulo: "Distribuindo conteúdo com Slots",
          conteudo: "Slots podem ser acessados como repositórios de código HTML",
          autor: "Tiago Neves",
        },
      ],
    };
  },
  computed: {
    propsAtuais() {
      return this.componentSelecionado === "AppPostsLista" ? { posts: this.posts } : {};
    },
  },
};
</script>

<style scoped>
.container {
  width: 960px;
  margin: auto;
}
</style>
