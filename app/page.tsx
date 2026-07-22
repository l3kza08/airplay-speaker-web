const features = [
  {
    number: "01",
    title: "เสียงใสระดับ CD",
    body: "รับสัญญาณ ALAC แบบสเตอริโอ 16-bit / 44.1 kHz ให้รายละเอียดครบสำหรับการฟังเพลงในห้องนั่งเล่น",
    className: "feature-card feature-audio",
  },
  {
    number: "02",
    title: "เนื้อเพลงที่มีชีวิต",
    body: "ไฮไลต์คำต่อคำตามจังหวะ พร้อมบรรทัดนักร้องคนที่สองและเสียงประสานที่จัดวางอย่างเป็นธรรมชาติ",
    className: "feature-card feature-lyrics",
  },
  {
    number: "03",
    title: "สีสันจากปกอัลบั้ม",
    body: "พื้นหลังผสมสีและเบลอจากปกเพลงแบบเรียลไทม์ รองรับทั้งปกนิ่งและปกเคลื่อนไหว",
    className: "feature-card feature-artwork",
  },
  {
    number: "04",
    title: "สร้างมาเพื่อ Android TV",
    body: "ตัวอักษร ระยะห่าง และการเคลื่อนไหวออกแบบสำหรับจอ 1920×1080 พร้อมปรับแต่งให้ลื่นบน RAM 2 GB",
    className: "feature-card feature-tv",
  },
];

const steps = [
  ["01", "เปิด Airplay Speaker", "เปิดแอพบน Android TV แล้วรอที่หน้ารับสัญญาณ"],
  ["02", "เลือกอุปกรณ์ AirPlay", "บน iPhone, iPad หรือ Mac เลือก Airplay Speaker จากเมนู AirPlay"],
  ["03", "ปล่อยให้เพลงเติมเต็มจอ", "ปก สีพื้นหลัง และเนื้อเพลงจะปรากฏขึ้นโดยอัตโนมัติ"],
];

function AirplayMark({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "airplay-mark small" : "airplay-mark"} aria-hidden="true">
      <span className="airplay-screen" />
      <span className="airplay-triangle" />
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="เมนูหลัก">
        <a className="brand" href="#top" aria-label="Airplay Speaker หน้าแรก">
          <AirplayMark small />
          <span>Airplay Speaker</span>
        </a>
        <div className="nav-links">
          <a href="#experience">ประสบการณ์</a>
          <a href="#features">จุดเด่น</a>
          <a href="#setup">เริ่มใช้งาน</a>
        </div>
        <a className="nav-cta" href="#demo">ชมเดโม <span aria-hidden="true">↘</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> AIRPLAY RECEIVER FOR ANDROID TV</p>
          <h1>ให้ทุกเพลง<br />เต็มพื้นที่บนทีวี</h1>
          <p className="hero-lead">
            เปลี่ยน Android TV ให้เป็นลำโพง AirPlay ที่เสียงดีและน่ามอง
            พร้อมปกเคลื่อนไหว สีพื้นหลังตามอัลบั้ม และเนื้อเพลงคาราโอเกะที่ไหลไปพร้อมเพลง
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#demo">
              <span className="play-icon" aria-hidden="true">▶</span> ชมวิดีโอ 15 วินาที
            </a>
            <a className="button button-ghost" href="#setup">วิธีเริ่มใช้งาน <span aria-hidden="true">→</span></a>
          </div>
          <ul className="hero-specs" aria-label="ข้อมูลสำคัญ">
            <li><strong>16-bit</strong><span>ALAC Audio</span></li>
            <li><strong>44.1 kHz</strong><span>CD Quality</span></li>
            <li><strong>60 Hz</strong><span>Lyrics Motion</span></li>
          </ul>
        </div>

        <div className="hero-object" aria-label="ตัวอย่างหน้าจอรอรับ AirPlay">
          <div className="ambient-orbit orbit-one" />
          <div className="ambient-orbit orbit-two" />
          <div className="app-icon-shell">
            <div className="app-icon">
              <AirplayMark />
            </div>
          </div>
          <p className="listening"><span /> LISTENING FOR AIRPLAY</p>
          <p className="device-name">Airplay Speaker</p>
        </div>
      </section>

      <section className="ticker" aria-label="ความสามารถของแอพ">
        <div className="ticker-track">
          <span>CD QUALITY AUDIO</span><i>✦</i><span>WORD-BY-WORD LYRICS</span><i>✦</i>
          <span>MOTION ARTWORK</span><i>✦</i><span>BUILT FOR ANDROID TV</span><i>✦</i>
          <span aria-hidden="true">CD QUALITY AUDIO</span><i aria-hidden="true">✦</i><span aria-hidden="true">WORD-BY-WORD LYRICS</span><i aria-hidden="true">✦</i>
        </div>
      </section>

      <section className="experience section-shell" id="experience">
        <div className="section-intro">
          <p className="eyebrow"><span /> NOW PLAYING, REIMAGINED</p>
          <h2>เรียบง่ายเมื่อมองไกล<br />ละเอียดเมื่อมองใกล้</h2>
          <p>ทุกองค์ประกอบจัดวางเพื่อจอทีวีจริง ให้เพลงเป็นจุดเด่นโดยไม่มีปุ่มควบคุมมารบกวนสายตา</p>
        </div>

        <div className="tv-frame" id="demo">
          <div className="tv-topbar">
            <span className="tv-light" />
            <span>RECORDED ON ANDROID TV · 1080P</span>
            <span className="tv-time">00:15</span>
          </div>
          <video
            className="demo-video"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            poster="/media/airplay-speaker-demo-poster.jpg"
          >
            <source src="/media/airplay-speaker-demo.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="demo-note">ภาพบันทึกจากแอพจริง · วิดีโอไม่มีเสียง</p>
      </section>

      <section className="features section-shell" id="features">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow"><span /> CRAFTED FOR MUSIC</p>
            <h2>เสียง ภาพ และคำร้อง<br />ทำงานเป็นหนึ่งเดียว</h2>
          </div>
          <p>ฟีเจอร์ที่สำคัญถูกออกแบบให้ทำงานเบา รวดเร็ว และต่อเนื่อง แม้บนกล่องทีวีที่มีทรัพยากรจำกัด</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className={feature.className} key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              {feature.number === "01" && (
                <div className="wave-art" aria-hidden="true">
                  {Array.from({ length: 23 }).map((_, index) => <i key={index} />)}
                </div>
              )}
              {feature.number === "02" && (
                <div className="mini-lyric" aria-hidden="true">
                  <span className="aside">(let the music take you)</span>
                  <strong>All I need is <em>this moment</em></strong>
                  <span>Stay a little longer</span>
                </div>
              )}
              {feature.number === "03" && (
                <div className="color-orbs" aria-hidden="true"><i /><i /><i /></div>
              )}
              {feature.number === "04" && (
                <div className="screen-spec" aria-hidden="true">
                  <span>1920</span><i>×</i><span>1080</span>
                  <small>LEAN-BACK UI</small>
                </div>
              )}
              <div className="feature-copy">
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lyrics-showcase">
        <div className="lyrics-backdrop" />
        <div className="lyrics-meta">
          <p className="eyebrow light"><span /> LYRICS IN MOTION</p>
          <h2>ไม่ได้แค่อ่าน<br />แต่รู้สึกไปพร้อมเพลง</h2>
          <p>การไฮไลต์เดินตามคำอย่างลื่นไหล มีแสงออร่าอย่างพอดี และหยุดพร้อมเพลงทันทีเมื่อกดพัก</p>
        </div>
        <div className="lyrics-stage" aria-label="ตัวอย่างเนื้อเพลงแบบซิงก์">
          <p className="lyric-muted lyric-left">You can hear it in the silence</p>
          <div className="lyric-active lyric-left">
            <small>(come a little closer)</small>
            <p>Let the <span>music</span> find you</p>
          </div>
          <p className="lyric-next lyric-right">I&apos;ll meet you in the light</p>
          <div className="break-dots" aria-label="ช่วงดนตรี"><i /><i /><i /></div>
        </div>
      </section>

      <section className="setup section-shell" id="setup">
        <div className="section-heading-row setup-heading">
          <div>
            <p className="eyebrow"><span /> SIMPLE BY DESIGN</p>
            <h2>สามขั้นตอน<br />แล้วปล่อยเพลงเล่น</h2>
          </div>
          <div className="compatibility">
            <span>รองรับ</span>
            <strong>Android TV 7.0+</strong>
            <small>อุปกรณ์ส่งและทีวีต้องอยู่ในเครือข่ายเดียวกัน</small>
          </div>
        </div>

        <div className="steps">
          {steps.map(([number, title, body]) => (
            <article className="step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>

        <div className="closing-card">
          <div className="closing-glow" />
          <AirplayMark />
          <p className="eyebrow light"><span /> READY WHEN YOU ARE</p>
          <h2>ทีวีเครื่องเดิม<br />ประสบการณ์ฟังเพลงแบบใหม่</h2>
          <p>เปิดแอพ เลือก AirPlay แล้วให้ทุกเพลงเติมเต็มห้องนั่งเล่นของคุณ</p>
          <div className="closing-actions">
            <a className="button button-light" href="#demo"><span className="play-icon" aria-hidden="true">▶</span> ชมเดโมอีกครั้ง</a>
            <a className="text-link" href="https://github.com/jqssun/android-airplay-server" target="_blank" rel="noreferrer">ดูโครงการต้นฉบับ <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">
          <AirplayMark small />
          <span>Airplay Speaker</span>
        </a>
        <p>AirPlay music receiver สำหรับ Android TV</p>
        <p className="legal">โปรเจกต์โอเพนซอร์สภายใต้ GPL-3.0 · ไม่มีความเกี่ยวข้องหรือได้รับการรับรองจาก Apple Inc.</p>
      </footer>
    </main>
  );
}
