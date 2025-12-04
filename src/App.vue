<script>
import { RouterView } from 'vue-router'
import sidebar from './components/layouts/sidebar.vue'
import navbar from './components/layouts/navbar.vue'
import Footer from './components/layouts/footer.vue'

export default {
  name: 'ContohComponent',
  components: {
    sidebar,
    navbar,
    Footer,
  },
  data() {
    return {
      title: 'Halo Tuan, ini contoh Options API',
      counter: 0,
      new_lang: 'en',
    }
  },
  mounted() {
    localStorage.setItem('lang', this.new_lang)
  },
  methods: {},
}
</script>

<template>
  <navbar />
  <RouterView />
  <Footer />
</template>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

/* optional biar konten full width */
.app-root {
  width: 100%;
}

.app-main {
  width: 100%;
}
</style>
