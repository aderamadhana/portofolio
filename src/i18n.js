import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    language: 'Language',
    service: 'Services',
    iam: "I'm",
    jabatan: 'Fullstack Web Developer',
    latest_projects: 'Latest Backend Projects',
    sub_latest_projects: 'Some backend projects that I have worked on',
    view_application: 'View Application',
    home: 'Home',
    portofolio: 'Portfolio',
  },
  id: {
    language: 'Bahasa',
    service: 'Layanan',
    iam: 'Saya',
    jabatan: 'Pengembang Web Fullstack',
    latest_projects: 'Proyek Backend Terbaru',
    sub_latest_projects: 'Beberapa proyek backend yang telah saya kerjakan',
    view_application: 'Lihat Aplikasi',
    home: 'Beranda',
    portofolio: 'Portofolio',
  },
}

const i18n = createI18n({
  locale: localStorage.getItem('lang'), // default
  fallbackLocale: 'en',
  messages,
})

export default i18n
