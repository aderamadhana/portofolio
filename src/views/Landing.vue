<template>
  <!-- ===== HERO ===== -->
  <section id="home" class="hero py-3">
    <div class="wrap">
      <div class="hero-card d-flex flex-lg-row flex-column gap-4 align-items-center">
        <!-- TEXT SECTION -->
        <div class="flex-grow-1">
          <span class="muted">Services</span>
          <h1 class="mt-1">
            I'm <span style="color: var(--accent)">Ade Ramadhana Pratama</span><br />Fullstack Web
            Developer
          </h1>
          <p class="subtitle mt-2">
            Fullstack Web Developer with strong experience in building reliable, scalable, and
            secure end-to-end web applications. Skilled in PHP (Laravel, CodeIgniter), ASP.Net,
            Vue.js, and database design using MySQL and PostgreSQL.
          </p>

          <div class="d-flex flex-wrap gap-2 mt-3">
            <div class="bullet"><i class="bi bi-check2-circle"></i><span>ASP.Net</span></div>
            <div class="bullet"><i class="bi bi-check2-circle"></i><span>PostgreSQL</span></div>
            <div class="bullet"><i class="bi bi-check2-circle"></i><span>Git</span></div>
            <div class="bullet"><i class="bi bi-check2-circle"></i><span>REST API</span></div>
            <div class="bullet"><i class="bi bi-check2-circle"></i><span>MySQL</span></div>
            <div class="bullet"><i class="bi bi-check2-circle"></i><span>Laravel</span></div>
            <div class="bullet"><i class="bi bi-check2-circle"></i><span>CodeIgniter</span></div>
            <div class="bullet"><i class="bi bi-check2-circle"></i><span>PHP</span></div>
            <div class="bullet"><i class="bi bi-check2-circle"></i><span>Vue.js</span></div>
          </div>

          <div class="social-badges mt-4">
            <a href="https://github.com/aderamadhana" target="_blank"
              ><i class="bi bi-github"></i> Github</a
            >
            <a href="https://www.linkedin.com/in/ade-ramadhana-p-abb489196/" target="_blank"
              ><i class="bi bi-linkedin"></i> LinkedIn</a
            >
          </div>
        </div>

        <!-- PHOTO INSIDE CARD -->
        <div class="hero-photo" style="max-width: 380px; flex-shrink: 0">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- ===== PROJECTS ===== -->
  <section id="projects" class="py-4">
    <div class="wrap">
      <h3 class="sec-title">Latest Backend Projects</h3>
      <p class="sec-sub">Here are a few production-grade services I've built recently.</p>

      <div class="row g-4">
        <!-- Project 1 -->
        <div class="col-md-6 col-lg-4">
          <article class="project">
            <div class="thumb">
              <img src="https://picsum.photos/seed/orderapi/800/450" alt="" />
            </div>
            <div class="body">
              <div class="mb-1">
                <span class="pill">Go</span><span class="pill">gRPC</span
                ><span class="pill">Kafka</span><span class="pill">Postgres</span>
              </div>
              <h5 class="mb-1">Order API — High Throughput</h5>
              <p class="muted">
                CQRS, idempotency, outbox, saga orchestration; 50k rps, p95 &lt; 120ms.
              </p>
              <div class="mono">/v1/orders • POST • idempotency-key • trace-id</div>
            </div>
          </article>
        </div>

        <!-- Project 2 -->
        <div class="col-md-6 col-lg-4">
          <article class="project">
            <div class="thumb"><img src="https://picsum.photos/seed/auth/800/450" alt="" /></div>
            <div class="body">
              <div class="mb-1">
                <span class="pill">Node.js</span><span class="pill">REST</span
                ><span class="pill">Redis</span><span class="pill">OPA</span>
              </div>
              <h5 class="mb-1">Auth & Token Service</h5>
              <p class="muted">JWT/opaque, RBAC, key rotation, device binding; p95 &lt; 80ms.</p>
              <div class="mono">/v1/tokens/issue • /introspect • /revoke</div>
            </div>
          </article>
        </div>

        <!-- Project 3 -->
        <div class="col-md-6 col-lg-4">
          <article class="project">
            <div class="thumb"><img src="https://picsum.photos/seed/etl/800/450" alt="" /></div>
            <div class="body">
              <div class="mb-1">
                <span class="pill">Python</span><span class="pill">Debezium</span
                ><span class="pill">Kafka</span><span class="pill">BQ</span>
              </div>
              <h5 class="mb-1">ETL & Event-Driven Ingest</h5>
              <p class="muted">CDC, schema evolution, late events, DLQ; freshness &lt; 5m.</p>
              <div class="mono">topic: db.pembayaran • sink: bigquery.upsert</div>
            </div>
          </article>
        </div>

        <!-- Project 4 -->
        <div class="col-md-6 col-lg-4">
          <article class="project">
            <div class="thumb"><img src="https://picsum.photos/seed/monitor/800/450" alt="" /></div>
            <div class="body">
              <div class="mb-1">
                <span class="pill">OpenTelemetry</span><span class="pill">Prometheus</span
                ><span class="pill">Grafana</span>
              </div>
              <h5 class="mb-1">Observability Platform</h5>
              <p class="muted">
                Traces/metrics/logs, RED/Saturation dashboards, SLO burn-rate alerts.
              </p>
              <div class="mono">trace_id=c9a1… • p95 latency • error budget</div>
            </div>
          </article>
        </div>

        <!-- Project 5 -->
        <div class="col-md-6 col-lg-4">
          <article class="project">
            <div class="thumb">
              <img src="https://picsum.photos/seed/payments/800/450" alt="" />
            </div>
            <div class="body">
              <div class="mb-1">
                <span class="pill">Laravel</span><span class="pill">MariaDB</span
                ><span class="pill">Redis</span>
              </div>
              <h5 class="mb-1">Payments Gateway Adapter</h5>
              <p class="muted">Webhook verifier, HMAC signatures, retries, dead-letter queue.</p>
              <div class="mono">/callbacks/<em>provider</em> • signature=HMAC-SHA256</div>
            </div>
          </article>
        </div>

        <!-- Project 6 -->
        <div class="col-md-6 col-lg-4">
          <article class="project">
            <div class="thumb"><img src="https://picsum.photos/seed/cdn/800/450" alt="" /></div>
            <div class="body">
              <div class="mb-1">
                <span class="pill">S3</span><span class="pill">CloudFront</span
                ><span class="pill">Go</span>
              </div>
              <h5 class="mb-1">Internal CDN & Upload Service</h5>
              <p class="muted">Presigned URLs, antivirus scan, image resize pipeline.</p>
              <div class="mono">PUT /v1/upload • GET /v1/files/{id}</div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
