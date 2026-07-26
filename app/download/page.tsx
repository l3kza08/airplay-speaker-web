import type { Metadata } from "next";
import Link from "next/link";

const apkUrl =
  "https://github.com/l3kza08/Sonic-Cast/releases/download/v1.0.0/Airplay-Speaker-v1.0.0.apk";
const releaseUrl = "https://github.com/l3kza08/Sonic-Cast/releases/tag/v1.0.0";
const sourceUrl = "https://github.com/l3kza08/Sonic-Cast";
const checksum = "6da633e37fffe6e59eab8b41a4c1da3455f3a035508d52650b41c257f57a32ac";
const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Download Airplay Speaker for Android TV",
  description:
    "Download Airplay Speaker v1.0.0 for Android TV, review what changed, verify the APK checksum, and follow the installation guide.",
  openGraph: {
    title: "Download Airplay Speaker",
    description: "AirPlay music receiver for Android TV. Download the latest APK.",
    images: [{ url: `${siteBasePath}/og-v1.png`, width: 1200, height: 630, alt: "Airplay Speaker 1.0 on Android TV" }],
  },
};

function AirplayMark({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "airplay-mark small" : "airplay-mark"} aria-hidden="true">
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
          <AirplayMark small />
          <span>Airplay Speaker</span>
        </Link>
        <Link className="download-back" href="/">Back to home <span aria-hidden="true">↗</span></Link>
      </nav>

      <section className="download-hero">
        <div className="download-aurora aurora-one" aria-hidden="true" />
        <div className="download-aurora aurora-two" aria-hidden="true" />
        <div className="download-copy">
          <p className="eyebrow"><span /> AIRPLAY SPEAKER 1.0</p>
          <h1>One small app.<br /><em>A bigger room.</em></h1>
          <p className="download-lead">
            Install Airplay Speaker and turn your Android TV into a cinematic AirPlay music receiver—with CD-quality audio, living artwork, and fluid lyrics.
          </p>
          <a className="download-main-cta magnetic" href={apkUrl}>
            <span className="download-cta-icon" aria-hidden="true">↓</span>
            <span><strong>Download the APK</strong><small>Airplay-Speaker-v1.0.0.apk</small></span>
          </a>
          <div className="release-meta" aria-label="Release information">
            <span>v1.0.0</span><i />
            <span>43 MB</span><i />
            <span>Android TV 7.0+</span>
          </div>
        </div>

        <div className="download-package" aria-label="Airplay Speaker APK package">
          <div className="package-rings" aria-hidden="true"><i /><i /><i /></div>
          <div className="package-icon">
            <AirplayMark />
            <span className="package-badge">APK</span>
          </div>
          <p>Latest stable build</p>
          <strong>Airplay Speaker</strong>
          <small>Built for the biggest screen in your home.</small>
        </div>
      </section>

      <section className="release-highlights">
        <div className="download-section-heading compact">
          <p className="eyebrow"><span /> WHAT’S NEW IN v1.0.0</p>
          <h2>Lyrics that stay<br />exactly where they belong.</h2>
        </div>

        <div className="release-highlight-grid">
          <article>
            <span>01</span>
            <h3>Stable duet detection</h3>
            <p>Two-sided lyrics appear only when the song confirms two vocalist roles across its timeline.</p>
          </article>
          <article>
            <span>02</span>
            <h3>The all-right bug is gone</h3>
            <p>Malformed single-singer metadata can no longer push every lyric line to the right edge.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Resilient word sync</h3>
            <p>Incomplete timing is repaired per line without replacing better word-by-word timing from another source.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Ready for the living room</h3>
            <p>Motion artwork, album color, remote browsing, optional spatial enhancement, and low-memory tuning arrive together.</p>
          </article>
        </div>

        <a className="release-changelog-link" href={releaseUrl} target="_blank" rel="noreferrer">
          Read the complete additions and fixes on GitHub <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="download-details">
        <div className="download-section-heading">
          <p className="eyebrow"><span /> BEFORE YOU INSTALL</p>
          <h2>Everything you need.<br />Nothing you don’t.</h2>
        </div>

        <div className="download-grid">
          <article className="requirements-panel">
            <span className="card-number">01</span>
            <h3>Requirements</h3>
            <ul>
              <li><span>Platform</span><strong>Android TV 7.0 or newer</strong></li>
              <li><span>Network</span><strong>TV and sender on the same Wi-Fi</strong></li>
              <li><span>Display</span><strong>1920 × 1080 at 60 Hz recommended</strong></li>
            </ul>
          </article>

          <article className="checksum-card">
            <span className="card-number">02</span>
            <h3>Verify your download</h3>
            <p>Compare this SHA-256 checksum after downloading the APK.</p>
            <code>{checksum}</code>
            <a href={releaseUrl} target="_blank" rel="noreferrer">View release details <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section className="install-section">
        <div className="download-section-heading compact">
          <p className="eyebrow"><span /> INSTALLATION</p>
          <h2>Choose your route.</h2>
        </div>

        <div className="install-grid">
          <article className="install-card">
            <span>01</span>
            <h3>USB or file manager</h3>
            <p>Move the APK to your TV, open it with a file manager, and allow installation from that source when prompted.</p>
          </article>
          <article className="install-card install-card-code">
            <span>02</span>
            <h3>Install with ADB</h3>
            <p>Enable Developer options and USB debugging on your Android TV, then run:</p>
            <pre><code>adb connect &lt;ANDROID_TV_IP&gt;:5555{"\n"}adb install -r Airplay-Speaker-v1.0.0.apk</code></pre>
          </article>
          <article className="install-card">
            <span>03</span>
            <h3>Open and listen</h3>
            <p>Launch Airplay Speaker, keep your devices on the same network, and choose the TV from the AirPlay menu.</p>
          </article>
        </div>

        <aside className="release-note">
          <span aria-hidden="true">!</span>
          <div>
            <strong>Development-signed APK</strong>
            <p>If Android reports an incompatible signature, uninstall the older build first, then install v1.0.0. Uninstalling clears local app settings.</p>
          </div>
        </aside>

        <div className="download-final">
          <div>
            <p className="eyebrow light"><span /> READY TO LISTEN</p>
            <h2>Give every song<br />the room it deserves.</h2>
          </div>
          <div className="download-final-actions">
            <a className="button button-light magnetic" href={apkUrl}><span aria-hidden="true">↓</span> Download v1.0.0</a>
            <a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Browse the source <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <footer className="download-footer">
        <Link className="brand" href="/">
          <AirplayMark small />
          <span>Airplay Speaker</span>
        </Link>
        <p>Version 1.0.0 · Android TV 7.0+</p>
        <p className="legal">Open source under GPL-3.0 · Not affiliated with or endorsed by Apple Inc.</p>
      </footer>
    </main>
  );
}
