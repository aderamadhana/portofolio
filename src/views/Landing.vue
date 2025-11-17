<script>
import axios from 'axios'

export default {
  name: 'ContohComponent',
  data() {
    return {
      title: 'Halo Tuan, ini contoh Options API',
      counter: 0,
      api_url: import.meta.env.VITE_API_URL,
      user_profil: null,
      projects: [],
      loading: false,
      tech_stack: [],
      lang: this.$i18n.locale,
    }
  },
  watch: {
    // 🔁 Jika bahasa berubah, simpan & reload data
    '$i18n.locale'(newLang, oldLang) {
      if (newLang !== oldLang) {
        this.lang = newLang // update data internal
        localStorage.setItem('lang', newLang)
        this.reloadData() // panggil ulang API sesuai bahasa baru
      }
    },
  },
  mounted() {
    this.reloadData()
  },
  methods: {
    reloadData() {
      this.getUserProfil()
      this.getProjects()
    },
    async getUserProfil() {
      this.loading = true
      const startTime = Date.now()
      await axios
        .get(this.api_url + 'get_portofolio?lang=' + this.lang)
        .then((response) => {
          this.user_profil = response.data.data
          this.tech_stack = JSON.parse(this.user_profil.tech_stack)
        })
        .catch((error) => {
          console.error('Error:', error)
        })
        .finally(() => {
          const elapsed = Date.now() - startTime
          const minDuration = 1500
          const remaining = Math.max(0, minDuration - elapsed)

          setTimeout(() => {
            this.loading = false
          }, remaining)
        })
    },

    async getProjects() {
      this.loading = true
      const startTime = Date.now()
      await axios
        .get(this.api_url + 'get_projects?lang=' + this.lang)
        .then((response) => {
          this.projects = response.data.data
        })
        .catch((error) => {
          console.error('Error:', error)
        })
        .finally(() => {
          const elapsed = Date.now() - startTime
          const minDuration = 1500
          const remaining = Math.max(0, minDuration - elapsed)

          setTimeout(() => {
            this.loading = false
          }, remaining)
        })
    },
  },
}
</script>
<template>
  <!-- ===== HERO ===== -->
  <section id="home" class="hero py-3">
    <div class="wrap">
      <div v-if="loading" class="loading-overlay">
        <div class="spinner"></div>
        <p class="loading-text">Loading portfolio...</p>
      </div>
      <div class="hero-card d-flex flex-lg-row flex-column gap-4 align-items-center">
        <!-- TEXT SECTION -->
        <div class="flex-grow-1">
          <span class="muted">{{ $t('service') }}</span>
          <h1 class="mt-1">
            {{ $t('iam') }} <span style="color: var(--accent)">{{ this.user_profil?.name }}</span
            ><br />{{ this.user_profil?.jabatan[lang] }}
          </h1>
          <p class="subtitle mt-2">
            {{ this.user_profil?.deskripsi[lang] }}
          </p>
          <div class="d-flex flex-wrap gap-2 mt-3">
            <div class="bullet" v-for="(value, index) in tech_stack" :key="index">
              <i class="bi bi-check2-circle"></i><span>{{ value }}</span>
            </div>
          </div>

          <div class="social-badges mt-4">
            <a href="https://github.com/aderamadhana" target="_blank"
              ><i class="bi bi-github"></i> Github</a
            >
            <a href="https://www.linkedin.com/in/ade-ramadhana-p-abb489196/" target="_blank"
              ><i class="bi bi-linkedin"></i> LinkedIn</a
            >
            <a href="#"><i class="bi bi-envelope"></i> sanade2034@gmail.com</a>
          </div>
        </div>

        <!-- PHOTO INSIDE CARD -->
        <div class="hero-photo" style="max-width: 380px; flex-shrink: 0">
          <img
            :src="user_profil?.profil_foto_url + '?q=80&w=1200&auto=format&fit=crop'"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- ===== PROJECTS ===== -->
  <section id="projects" class="py-4">
    <div class="wrap">
      <h3 class="sec-title">{{ $t('latest_projects') }}</h3>
      <p class="sec-sub">{{ $t('sub_latest_projects') }}</p>

      <div class="row g-4">
        <!-- Project Card -->
        <div class="col-md-6 col-lg-4 d-flex" v-for="(project, index) in projects" :key="index">
          <article class="project flex-fill d-flex flex-column">
            <div class="thumb">
              <img
                :src="
                  project.icon_menu_url
                    ? project.icon_menu_url
                    : 'https://picsum.photos/seed/orderapi/800/450'
                "
                alt=""
              />
            </div>

            <div class="body flex-grow-1 d-flex flex-column justify-content-between">
              <div>
                <div class="mb-2">
                  <span
                    class="pill"
                    v-if="project.tech_stack"
                    v-for="(tech, i) in project.tech_stack"
                    :key="i"
                    >{{ tech }}</span
                  >
                </div>

                <h5 class="mb-1">{{ project.nama_menu[lang] }}</h5>
                <p class="muted mb-2">
                  {{ project.deskripsi[lang] }}
                </p>
              </div>

              <div class="mt-auto pt-2">
                <a class="mono" :href="project.token_akses" target="_blank">
                  {{ $t('view_application') }}
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
