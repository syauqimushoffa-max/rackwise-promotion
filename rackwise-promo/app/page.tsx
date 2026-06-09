export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">
          {/* Ganti dengan <Image> jika logo sudah ada di /public/logo.png */}
          {/* <img src="/logo.png" alt="RackWise Logo" className="nav-logo-img" /> */}
          RackWise
        </a>
        <ul className="nav-links">
          <li><a href="#fitur">Fitur</a></li>
          <li><a href="#modul">Modul</a></li>
          <li><a href="#cara-kerja">Cara Kerja</a></li>
          <li><a href="#teknologi">Teknologi</a></li>
        </ul>
        <a
          href="https://rackwise-wms.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Coba Sekarang ?
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>
          Kelola Gudang Anda dengan <em>Presisi &amp; Efisiensi</em>
        </h1>
        <p className="hero-sub">
          RackWise adalah sistem manajemen gudang (WMS) berbasis web yang
          dirancang khusus untuk kebutuhan cold storage dan distribusi modern —
          dari penerimaan barang hingga pengiriman, semua dalam satu platform.
        </p>
        <div className="hero-actions">
          <a
            href="https://rackwise-wms.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Mulai Demo Gratis
          </a>
          <a href="#fitur" className="btn-secondary">
            Pelajari Fitur
          </a>
        </div>

        {/* STATS */}
        <div className="stats">
          <div className="stat-item">
            <span className="stat-num">10+</span>
            <span className="stat-label">Modul Manajemen</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">Real-time</span>
            <span className="stat-label">Pantau Stok</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">100%</span>
            <span className="stat-label">Berbasis Web</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">QR Code</span>
            <span className="stat-label">Label</span>
          </div>
        </div>

        {/* APP MOCKUP */}
        <div className="mockup-wrap">
          <div className="mockup-bar">
            <div className="mockup-dot red" />
            <div className="mockup-dot yellow" />
            <div className="mockup-dot green" />
            <div className="mockup-url">https://rackwise-wms.com</div>
          </div>
          <div className="mockup-dashboard">
            <div className="mock-sidebar">
              <div className="mock-sidebar-logo">
                {/* <img src="/logo.png" alt="" className="mock-sidebar-logo-img" /> */}
                RackWise
              </div>
              <div className="mock-nav-item active">Dashboard</div>
              <div className="mock-nav-item">Inbound</div>
              <div className="mock-nav-item">Outbound</div>
              <div className="mock-nav-item">Inventory</div>
              <div className="mock-nav-item">Lokasi Rak</div>
              <div className="mock-nav-item">Laporan</div>
              <div className="mock-nav-item">Pengaturan</div>
            </div>
            <div className="mock-content">
              <div className="mock-title">Dashboard Ringkasan Hari Ini</div>
              <div className="mock-cards">
                <div className="mock-card">
                  <div className="mc-val">1,284</div>
                  <div className="mc-lbl">Total SKU</div>
                </div>
                <div className="mock-card">
                  <div className="mc-val gold">38</div>
                  <div className="mc-lbl">Penerimaan Hari Ini</div>
                </div>
                <div className="mock-card">
                  <div className="mc-val blue">52</div>
                  <div className="mc-lbl">Pengiriman</div>
                </div>
                <div className="mock-card">
                  <div className="mc-val red">7</div>
                  <div className="mc-lbl">Stok Kritis</div>
                </div>
              </div>
              <table className="mock-table">
                <thead>
                  <tr>
                    <th>No. DO</th>
                    <th>Produk</th>
                    <th>Jumlah</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>DO-20260001</td>
                    <td>Ayam Beku Premium</td>
                    <td>240 kg</td>
                    <td><span className="badge badge-green">Selesai</span></td>
                  </tr>
                  <tr>
                    <td>DO-20260002</td>
                    <td>Udang Vaname</td>
                    <td>120 kg</td>
                    <td><span className="badge badge-amber">Proses</span></td>
                  </tr>
                  <tr>
                    <td>DO-20260003</td>
                    <td>Sayuran Beku Mix</td>
                    <td>80 kg</td>
                    <td><span className="badge badge-blue">Menunggu</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FEATURES */}
      <section id="fitur">
        <div className="container">
          <div className="section-label">Keunggulan</div>
          <h2>Dirancang untuk Operasional Gudang Modern</h2>
          <p className="section-sub">
            Setiap fitur dibangun untuk mengatasi tantangan nyata di gudang —
            mulai dari akurasi stok hingga kecepatan pengiriman.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <h3>Dashboard Real-Time</h3>
              <p>
                Pantau kondisi gudang secara langsung. Stok masuk, keluar,
                serta status order tampil dalam satu layar yang mudah dipahami.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                  <path d="m7.5 4.27 9 5.15" />
                  <polyline points="3.29 7 12 12 20.71 7" />
                  <line x1="12" y1="22" x2="12" y2="12" />
                  <circle cx="18.5" cy="15.5" r="2.5" />
                  <path d="M20.27 17.27 22 19" />
                </svg>
              </div>
              <h3>Manajemen Stok Akurat</h3>
              <p>
                Sistem pelacakan stok berlapis dengan kode SKU, lot, dan expired
                date — meminimalkan selisih dan kerugian akibat salah kelola.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <h3>Proses Inbound &amp; Outbound</h3>
              <p>
                Alur penerimaan barang (GR) dan pengiriman (DO) yang
                terstruktur — dari pendataan, penempatan rak, hingga cetak
                dokumen.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3>Manajemen Lokasi Rak</h3>
              <p>
                Sistem peta rak (racking system) yang detail — kelola posisi
                setiap palet, zone, dan area penyimpanan secara visual.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3>Laporan &amp; Audit Trail</h3>
              <p>
                Riwayat lengkap setiap transaksi tersimpan otomatis. Ekspor
                laporan stok, mutasi barang, dan rekap harian dengan mudah.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Multi-User &amp; Role Based</h3>
              <p>
                Sistem hak akses bertingkat — admin, supervisor, dan operator
                memiliki akses berbeda sesuai kebutuhan operasional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* MODULES */}
      <section id="modul" className="modules-section">
        <div className="container">
          <div className="section-label">Modul Sistem</div>
          <h2>Semua yang Dibutuhkan Gudang Anda</h2>
          <p className="section-sub">
            RackWise hadir dengan modul lengkap yang saling terintegrasi —
            tidak perlu berpindah-pindah sistem lagi.
          </p>
          <div className="modules-grid">
            {[
              "Manajemen Master Data",
              "Penerimaan Barang (GR)",
              "Pengeluaran Barang (DO)",
              "Manajemen Stok & Inventory",
              "Lokasi & Mapping Rak",
              "Transfer Antar Lokasi",
              "Manajemen Supplier",
              "Manajemen Customer",
              "Laporan & Rekap Harian",
              "Audit Trail & History",
              "Manajemen User & Role",
              "Dashboard Analitik",
            ].map((label, i) => (
              <div className="module-item" key={i}>
                <div className="module-num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* HOW IT WORKS + TECH */}
      <section id="cara-kerja">
        <div className="container">
          <div className="layout-two-col">
            {/* Steps */}
            <div>
              <div className="section-label">Alur Operasional</div>
              <h2>Bagaimana RackWise Bekerja</h2>
              <p className="section-sub">
                Proses yang terstruktur memastikan setiap barang tercatat,
                tersimpan, dan terkirim dengan akurat.
              </p>
              <div className="steps mt-large">
                {[
                  {
                    title: "Registrasi & Setup Awal",
                    desc: "Daftarkan data master: produk, supplier, customer, dan konfigurasi layout rak gudang Anda.",
                  },
                  {
                    title: "Penerimaan Barang (Inbound)",
                    desc: "Catat setiap kedatangan barang dengan detail lot, jumlah, dan penempatan di rak secara otomatis.",
                  },
                  {
                    title: "Manajemen Gudang",
                    desc: "Monitor stok secara real-time, lakukan transfer antar lokasi, dan pastikan kondisi penyimpanan optimal.",
                  },
                  {
                    title: "Pengiriman Barang (Outbound)",
                    desc: "Proses delivery order, cetak dokumen pengiriman, dan update stok otomatis saat barang keluar.",
                  },
                  {
                    title: "Laporan & Analisis",
                    desc: "Akses laporan lengkap harian, mingguan, dan bulanan untuk mendukung keputusan bisnis Anda.",
                  },
                ].map((step, i) => (
                  <div className="step" key={i}>
                    <div className="step-num">{i + 1}</div>
                    <div className="step-content">
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech */}
            <div>
              <div className="section-label">Teknologi</div>
              <h2 id="teknologi">Dibangun dengan Teknologi Terkini</h2>
              <p className="section-sub mb-1-5">
                Arsitektur modern yang memastikan performa cepat, aman, dan
                dapat diandalkan 24/7.
              </p>
              <div className="tech-panel">
                <div className="feature-card padded">
                  <div className="feature-meta">Frontend</div>
                  <div className="tech-badges">
                    {["Next.js", "React", "Tailwind CSS", "TypeScript"].map(
                      (t) => (
                        <span className="tech-badge" key={t}>{t}</span>
                      )
                    )}
                  </div>
                </div>
                <div className="feature-card padded">
                  <div className="feature-meta">Backend &amp; Database</div>
                  <div className="tech-badges">
                    {["Node.js", "Prisma ORM", "PostgreSQL", "REST API"].map(
                      (t) => (
                        <span className="tech-badge" key={t}>{t}</span>
                      )
                    )}
                  </div>
                </div>
                <div className="feature-card padded">
                  <div className="feature-meta">Deployment</div>
                  <div className="tech-badges">
                    {["Vercel", "CI/CD GitHub", "Cloud Hosting"].map((t) => (
                      <span className="tech-badge" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="section-label mb-1-5">Mulai Sekarang</div>
          <h2>Siap Transformasi Gudang Anda?</h2>
          <p>
            Akses demo langsung RackWise WMS dan rasakan perbedaan manajemen
            gudang yang sesungguhnya.
          </p>
          <div className="cta-group">
            <a
              href="https://rackwise-wms.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Buka Aplikasi &rarr;
            </a>
          </div>
          <p className="muted-note">
            Demo user: admin@rackwise.com &middot; password: Admin123#
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>
          Rackwise Warehouse Management System v3.0 &nbsp;|&nbsp; Copyright
          &copy; 2026 &nbsp;|&nbsp; All rights reserved.
        </p>
        <p className="footer-note">
          Developed by{" "}
          <a href="mailto:syauqimushoffa@gmail.com">@syau_qim</a>
        </p>
      </footer>
    </>
  );
}