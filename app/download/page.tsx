import type { Metadata } from "next";
import Link from "next/link";

const apkUrl =
  "https://github.com/l3kza08/Airplay-Speaker/releases/download/v3.0.0/Airplay-Speaker-v3.0.0.apk";
const releaseUrl = "https://github.com/l3kza08/Airplay-Speaker/releases/tag/v3.0.0";
const sourceUrl = "https://github.com/l3kza08/Airplay-Speaker";
const checksum = "77cade4a874533da57879f4263eb2c11711fc654bc42231634c5d8d214adade1";
const apkSize = "76.5 MiB";
const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = siteBasePath
  ? `https://l3kza08.github.io${siteBasePath}`
  : "https://airplay-speaker-tv-0722.worapornkummarn.chatgpt.site";

export const metadata: Metadata = {
  title: "Download Airplay Speaker 3.0 for Android TV",
  description:
    "Download Airplay Speaker v3.0.0 for Android TV, review the full-screen motion artwork, lyric, liquid-glass, and experimental AI karaoke update, and verify the APK.",
  openGraph: {
    title: "Download Airplay Speaker 3.0",
    description: "Let the room become the album.",
    images: [
      {
        url: `${siteUrl}/og-v3.png`,
        width: 1200,
        height: 630,
        alt: "Airplay Speaker 3.0 in a cinematic listening room",
      },
    ],
  },
};

function AirplayMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "airplay-mark is-compact" : "airplay-mark"} aria-hidden="true">
      <span className="airplay-screen" />
      <span className="airplay-triangle" />
    </span>
  );
}

export default function DownloadPage() {
  return (
    <main className="download-page">
      <nav className="download-nav" aria-label="Download navigation">
        <Link className="brand" href="/" aria-label="Airplay Speaker home">
          <AirplayMark compact />
          <span>Airplay Speaker</span>
        </Link>
        <Link className="download-back" href="/">
          Back to the film <span aria-hidden="true">↗</span>
        </Link>
      </nav>

      <section className="download-hero">
        <div className="download-copy">
          <p className="eyebrow"><i /> AIRPLAY SPEAKER 3.0 · STABLE</p>
          <h1>
            One small app.<br />
            <em>A bigger room.</em>
          </h1>
          <p className="download-lead">
            Turn Android TV into a cinematic AirPlay music receiver—with
            lossless ALAC audio, feathered full-screen motion artwork, living
            lyrics, Smart Vocal Focus, and optional on-device AI separation.
          </p>
          <a className="download-main-cta" href={apkUrl}>
            <span className="download-cta-icon" aria-hidden="true">↓</span>
            <span>
              <strong>Download the APK</strong>
              <small>Airplay-Speaker-v3.0.0.apk</small>
            </span>
          </a>
          <div className="release-meta" aria-label="Release information">
            <span>v3.0.0</span><i />
            <span>{apkSize}</span><i />
            <span>Android TV 7.0+</span><i />
            <span>In-place update from v2.5</span>
          </div>
        </div>

        <div className="download-package" aria-label="Airplay Speaker APK package">
          <div className="package-icon">
            <AirplayMark />
            <span className="package-badge">APK</span>
          </div>
          <p>Latest stable build</p>
          <strong>Airplay Speaker</strong>
          <small>Version 3.0.0 · Android TV</small>
        </div>
      </section>

      <section className="download-film">
        <div className="download-film-card">
          <img
            src={`${siteBasePath}/media/airplay-speaker-v3-poster.jpg`}
            alt="Airplay Speaker 3.0 full-screen motion artwork and lyrics on Android TV"
          />
          <div className="download-film-copy">
            <p className="section-index is-light">THE REAL TV BUILD</p>
            <h2>See v3.0 before you install.</h2>
            <p>
              The 30-second film was captured directly from Android TV and
              shows the new motion-artwork stage, feathered edge, lyric panel,
              and centred track information.
            </p>
            <Link href="/#film">Watch the film ↗</Link>
          </div>
        </div>
      </section>

      <section className="release-highlights">
        <div className="download-section-heading">
          <p className="eyebrow"><i /> WHAT CHANGED SINCE v2.5.0</p>
          <h2>More cinematic.<br />More honest about the signal.</h2>
        </div>

        <div className="release-highlight-grid">
          <article>
            <span>01</span>
            <h3>Full-screen motion stage</h3>
            <p>
              High-resolution square artwork becomes a dedicated visual stage,
              with a soft blurred perimeter and the original classic layout
              available from Settings.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Liquid-glass television UI</h3>
            <p>
              Lyrics, metadata, waiting, settings, and karaoke surfaces share
              calmer depth, consistent focus states, and fewer stacked layers.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Experimental AI separation</h3>
            <p>
              Supported 64-bit TVs can isolate a vocal stem locally with UVR
              MDX-Net and LiteRT. Slow devices automatically return to Smart
              Vocal Focus.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Stronger lyric safeguards</h3>
            <p>
              Apple word, line, Duet, backing-vocal, and plain-text modes keep
              multilingual shaping and audible-output timing without fabricated
              karaoke data.
            </p>
          </article>
        </div>

        <a
          className="release-changelog-link"
          href={releaseUrl}
          target="_blank"
          rel="noreferrer"
        >
          Read every addition, improvement, and fix on GitHub ↗
        </a>
      </section>

      <section className="download-details">
        <div className="download-section-heading">
          <p className="eyebrow"><i /> BEFORE YOU INSTALL</p>
          <h2>Everything required.<br />Nothing hidden.</h2>
        </div>

        <div className="download-grid">
          <article className="requirements-panel">
            <span className="card-number">01</span>
            <h3>Requirements</h3>
            <ul>
              <li><span>Platform</span><strong>Android TV 7.0 or newer</strong></li>
              <li><span>Network</span><strong>TV and sender on the same network</strong></li>
              <li><span>Display</span><strong>1920 × 1080 at 60 Hz recommended</strong></li>
              <li><span>AI mode</span><strong>Optional · supported 64-bit TVs</strong></li>
            </ul>
          </article>

          <article className="checksum-card">
            <span className="card-number">02</span>
            <h3>Verify the download</h3>
            <p>
              Compare this SHA-256 checksum after downloading the APK. The same
              value is published with the GitHub release.
            </p>
            <code>{checksum}</code>
            <a href={releaseUrl} target="_blank" rel="noreferrer">
              View release and source details ↗
            </a>
          </article>
        </div>
      </section>

      <section className="install-section">
        <div className="download-section-heading">
          <p className="eyebrow"><i /> INSTALLATION</p>
          <h2>Choose your route.</h2>
        </div>

        <div className="install-grid">
          <article className="install-card">
            <span>01</span>
            <h3>USB or file manager</h3>
            <p>
              Move the APK to the television, open it with a file manager, and
              allow installation from that source when Android asks.
            </p>
          </article>
          <article className="install-card">
            <span>02</span>
            <h3>Install with ADB</h3>
            <p>Enable Developer options and network debugging, then run:</p>
            <pre><code>adb connect &lt;ANDROID_TV_IP&gt;:5555{"\n"}adb install -r Airplay-Speaker-v3.0.0.apk</code></pre>
          </article>
          <article className="install-card">
            <span>03</span>
            <h3>Open and listen</h3>
            <p>
              Launch Airplay Speaker, keep both devices on the same network,
              then choose the TV from the sender&apos;s AirPlay menu.
            </p>
          </article>
        </div>

        <aside className="release-note">
          <span aria-hidden="true">!</span>
          <div>
            <strong>About audio processing</strong>
            <p>
              AirPlay enters as lossless ALAC. Lossless PCM keeps app-side
              output untouched; Spatial, Smart Vocal Focus, and AI Vocal
              Separation are optional processing modes and therefore are not
              bit-perfect while enabled.
            </p>
          </div>
        </aside>

        <div className="download-final">
          <div>
            <p className="section-index is-light">READY TO LISTEN</p>
            <h2>Give every song<br />the room it deserves.</h2>
          </div>
          <div className="download-final-actions">
            <a className="button button-light" href={apkUrl}>
              Download v3.0.0 <span aria-hidden="true">↓</span>
            </a>
            <a className="source-link" href={sourceUrl} target="_blank" rel="noreferrer">
              Browse the complete source ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="download-footer">
        <Link className="brand" href="/">
          <AirplayMark compact />
          <span>Airplay Speaker</span>
        </Link>
        <p>Version 3.0.0 · Android TV 7.0+</p>
        <p>GPL-3.0 · Not affiliated with or endorsed by Apple Inc.</p>
      </footer>
    </main>
  );
}
