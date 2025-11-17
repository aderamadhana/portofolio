<template>
  <!-- ===== NAVBAR ===== -->
  <nav class="navbar navbar-expand-lg">
    <div class="wrap d-flex align-items-center w-100">
      <div class="d-flex align-items-center gap-2">
        <span class="brand-badge"><i class="bi bi-lightning-charge"></i> {{ $t('jabatan') }}</span>
        <a class="brand ms-2" href="#">Ade Ramadhana Pratama</a>
      </div>

      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="nav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
          <li class="nav-item">
            <a class="nav-link" href="#home">{{ $t('home') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">{{ $t('service') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">{{ $t('portofolio') }}</a>
          </li>
          <!-- Dropdown bahasa (dummy) -->
          <li class="nav-item ms-lg-3">
            <div class="lang-toggle">
              <span class="lang-label"><i class="bi bi-globe2"></i> {{ $t('language') }}</span>
              <div class="lang-pills">
                <button
                  type="button"
                  class="lang-pill"
                  :class="{ active: nav_lang === 'en' }"
                  @click="setLang('en')"
                >
                  English
                </button>
                <button
                  type="button"
                  class="lang-pill"
                  :class="{ active: nav_lang === 'id' }"
                  @click="setLang('id')"
                >
                  Indonesian
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      nav_lang: localStorage.getItem('lang') || 'en',
    }
  },
  methods: {
    setLang(lang) {
      this.nav_lang = lang
      localStorage.setItem('lang', lang)
      this.$i18n.locale = lang
    },
  },
}
</script>
