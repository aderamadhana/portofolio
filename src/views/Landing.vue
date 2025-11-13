<template>
  <!doctype html>
  <html lang="id">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Portofolio — Your Name</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
        rel="stylesheet"
      />
    </head>
    <input type="radio" name="lang" id="lang-id" checked />
    <input type="radio" name="lang" id="lang-en" />

    <body>
      <header>
        <div class="container">
          <nav>
            <div class="logo">YourName</div>
            <ul>
              <li><a href="#about">Tentang</a></li>
              <li><a href="#skills">Keahlian</a></li>
              <li><a href="#projects">Proyek</a></li>
              <li><a href="#experience">Pengalaman</a></li>
              <li><a href="#contact">Kontak</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section class="hero container">
        <div class="hero-text">
          <h1>Halo, saya <span style="color: var(--accent)">Your Name</span></h1>
          <p>
            Seorang Web Developer dan Data Enthusiast yang senang membangun solusi digital elegan
            dan berdampak nyata.
          </p>
          <a href="#" class="btn">Unduh CV</a>
        </div>
        <div class="hero-img">
          <img
            src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop"
            alt="Profile"
          />
        </div>
      </section>

      <section id="about">
        <div class="container about-grid">
          <div>
            <h2>Tentang Saya</h2>
            <p class="lead">
              Saya memiliki pengalaman lebih dari 5 tahun dalam pengembangan web, analisis data, dan
              integrasi sistem. Berfokus pada performa, efisiensi, serta visualisasi data yang
              menarik.
            </p>
          </div>
          <div class="card">
            <h3>Info Singkat</h3>
            <p><b>Lokasi:</b> Malang, Indonesia</p>
            <p><b>Email:</b> hello@example.com</p>
            <p><b>Telepon:</b> +62 812-3456-7890</p>
          </div>
        </div>
      </section>

      <section id="skills">
        <div class="container">
          <h2>Keahlian</h2>
          <p class="lead">Beberapa keterampilan teknis utama yang saya kuasai:</p>
          <div class="skills-list">
            <div class="skill">HTML & CSS</div>
            <div class="skill">JavaScript</div>
            <div class="skill">Bootstrap</div>
            <div class="skill">Python</div>
            <div class="skill">SQL</div>
            <div class="skill">Power BI</div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div class="container">
          <h2>Proyek Pilihan</h2>
          <p class="lead">Kumpulan beberapa karya terbaik yang pernah saya kerjakan.</p>
          <div class="projects">
            <div class="project">
              <img src="https://picsum.photos/seed/p1/800/500" alt="" />
              <div class="project-content">
                <h3>Dashboard Analitik</h3>
                <p>Dashboard interaktif untuk memantau performa cabang dan KPI harian.</p>
              </div>
            </div>
            <div class="project">
              <img src="https://picsum.photos/seed/p2/800/500" alt="" />
              <div class="project-content">
                <h3>ETL & Data Pipeline</h3>
                <p>Pembuatan pipeline otomatis untuk data integrasi dan pelaporan Power BI.</p>
              </div>
            </div>
            <div class="project">
              <img src="https://picsum.photos/seed/p3/800/500" alt="" />
              <div class="project-content">
                <h3>Aplikasi Klinik Online</h3>
                <p>Pengembangan sistem pendaftaran pasien dan antrian berbasis web.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div class="container">
          <h2>Pengalaman</h2>
          <div class="timeline">
            <div class="timeline-item">
              <h4>Senior Developer — PT KKI</h4>
              <small>2023 — Sekarang</small>
              <p>Mengembangkan sistem KPI dan integrasi data klinik multi-cabang.</p>
            </div>
            <div class="timeline-item">
              <h4>Data Analyst — MS Glow</h4>
              <small>2021 — 2023</small>
              <p>Membangun dashboard BI dan analisis perilaku pelanggan.</p>
            </div>
            <div class="timeline-item">
              <h4>Freelance Web Developer</h4>
              <small>2018 — 2021</small>
              <p>Merancang website dinamis dan sistem CMS custom untuk klien UKM.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div class="container contact-grid">
          <div>
            <h2>Hubungi Saya</h2>
            <p class="lead">Tertarik berkolaborasi atau berdiskusi? Kirim pesan Anda di sini.</p>
            <form>
              <input type="text" placeholder="Nama" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Pesan" required></textarea>
              <button type="submit">Kirim Pesan</button>
            </form>
          </div>
          <div class="card">
            <h3>Kontak Langsung</h3>
            <p><b>Email:</b> hello@example.com</p>
            <p><b>Telepon:</b> +62 812-3456-7890</p>
            <p><b>Lokasi:</b> Malang, Indonesia</p>
          </div>
        </div>
      </section>

      <footer>© 2025 • Portofolio Anda — Dibuat dengan HTML & CSS</footer>
    </body>
  </html>
</template>
