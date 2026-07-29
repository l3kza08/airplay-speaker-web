import type { Metadata } from "next";
import Link from "next/link";

const apkUrl =
  "https://github.com/l3kza08/Airplay-Speaker/releases/download/v2.5.0/Airplay-Speaker-v2.5.0.apk";
const releaseUrl = "https://github.com/l3kza08/Airplay-Speaker/releases/tag/v2.5.0";
const sourceUrl = "https://github.com/l3kza08/Airplay-Speaker";
const checksum = "2bb761ed115652a9dfce6b9646c6b016baf6abc69e49ffeff39c44dbd7750424";
const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = siteBasePath
  ? `https://l3kza08.github.io${siteBasePath}`
  : "https://airplay-speaker-tv-0722.worapornkummarn.chatgpt.site";

export const metadata: Metadata = {
  title: "Download Airplay Speaker for Android TV",
  description:
    "Download Airplay Speaker v2.5.0 for Android TV, review every change since v2.0.0, verify the APK checksum, and follow the installation guide.",
  openGraph: {
    title: "Download Airplay Speaker",
    description: "AirPlay music receiver for Android TV. Download the latest APK.",
    images: [{ url: `${siteUrl}/og-v2-5.png`, width: 1200, height: 630, alt: "Airplay Speaker 2.5 on Android TV" }],
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
          <p className="eyebrow"><span /> AIRPLAY SPEAKER 2.5</p>
          <h1>One small app.<br /><em>A bigger room.</em></h1>
          <p className="download-lead">
            Turn your Android TV into a cinematic AirPlay music receiver—with CD-quality audio, living artwork, Smart Vocal Focus, and a rebuilt lyric engine.
          </p>
          <a className="download-main-cta magnetic" href={apkUrl}>
            <span className="download-cta-icon" aria-hidden="true">↓</span>
            <span><strong>Download the APK</strong><small>Airplay-Speaker-v2.5.0.apk</small></span>
          </a>
          <div className="release-meta" aria-label="Release information">
            <span>v2.5.0</span><i />
            <span>44.1 MiB</span><i />
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
          <p className="eyebrow"><span /> WHAT CHANGED SINCE v2.0.0</p>
          <h2>More accurate lyrics.<br />A screen that hears the music.</h2>
        </div>

        <div className="release-highlight-grid">
          <article>
            <span>01</span>
            <h3>Audio-reactive presentation</h3>
            <p>The equalizer now follows decoded PCM audio while the centered song title remains stable—even when the title is long.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Honest lyric timing</h3>
            <p>Word animation is used only when word timing exists, while expanded Apple catalogue matching finds more songs and safely retries alternate editions.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Multilingual typography</h3>
            <p>Thai and other scripts keep natural shaping and spacing, with more reliable backing-vocal and Duet placement.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Smoother on 2 GB TVs</h3>
            <p>Lyric transitions, karaoke highlights, artwork color, and audio metering are tuned to reduce stalls and visual jitter.</p>
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
            <pre><code>adb connect &lt;ANDROID_TV_IP&gt;:5555{"\n"}adb install Airplay-Speaker-v2.5.0.apk</code></pre>
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
            <p>Version 2.5 uses the new Airplay Speaker app identity. After confirming it opens correctly, remove the older launcher entry from TV settings. Removing an app clears its local settings.</p>
          </div>
        </aside>

        <div className="download-final">
          <div>
            <p className="eyebrow light"><span /> READY TO LISTEN</p>
            <h2>Give every song<br />the room it deserves.</h2>
          </div>
          <div className="download-final-actions">
            <a className="button button-light magnetic" href={apkUrl}><span aria-hidden="true">↓</span> Download v2.5.0</a>
            <a className="text-link" href={sourceUrl} target="_blank" rel="noreferrer">Browse the source <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <footer className="download-footer">
        <Link className="brand" href="/">
          <AirplayMark small />
          <span>Airplay Speaker</span>
        </Link>
        <p>Version 2.5.0 · Android TV 7.0+</p>
        <p className="legal">Open source under GPL-3.0 · Not affiliated with or endorsed by Apple Inc.</p>
      </footer>
    </main>
  );
}
