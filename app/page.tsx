"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const chapters = [
  {
    number: "01",
    kicker: "THE ALBUM, ALIVE",
    title: "Motion without the hard edges.",
    body: "When an album publishes motion artwork, Airplay Speaker gives it a dedicated full-screen stage. The live movie stays crisp in the centre and dissolves softly into the colour of the room.",
    detail: "Up to 1920 × 1920 source selection",
    className: "chapter-card chapter-motion",
  },
  {
    number: "02",
    kicker: "EVERY WORD IN PLACE",
    title: "Lyrics that move with the sound.",
    body: "Word, line, Duet, backing-vocal, instrumental, and plain-text presentations all follow the timing Apple publishes—without inventing karaoke data that is not there.",
    detail: "Display-rate presentation · multilingual shaping",
    className: "chapter-card chapter-lyrics",
  },
  {
    number: "03",
    kicker: "THE VOICE, YOUR CHOICE",
    title: "Karaoke with a real AI option.",
    body: "Smart Vocal Focus runs lightly on any TV. Supported 64-bit devices can also try the experimental on-device UVR MDX-Net separator, with a safe automatic fallback when the hardware cannot keep up.",
    detail: "Local processing · no song upload",
    className: "chapter-card chapter-karaoke",
  },
];

const specifications = [
  ["Audio in", "16-bit / 44.1 kHz ALAC"],
  ["Display", "1920 × 1080 recommended"],
  ["Platform", "Android TV 7.0+"],
  ["Lyrics", "Word · Line · Duet · Plain"],
  ["Artwork", "Static · Motion HLS"],
  ["Karaoke", "Smart Focus · Experimental AI"],
];

function AirplayMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "airplay-mark is-compact" : "airplay-mark"} aria-hidden="true">
      <span className="airplay-screen" />
      <span className="airplay-triangle" />
    </span>
  );
}

function Equalizer() {
  return (
    <span className="equalizer" aria-hidden="true">
      <i /><i /><i /><i />
    </span>
  );
}

export default function Home() {
  const film = useRef<HTMLVideoElement>(null);
  const [filmPlaying, setFilmPlaying] = useState(true);
  const [lyricMode, setLyricMode] = useState<"word" | "duet" | "break">("word");

  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll", `${distance > 0 ? window.scrollY / distance : 0}`);
    };
    const onPointer = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      }),
      { threshold: 0.14 },
    );
    const reveals = document.querySelectorAll("[data-reveal]");
    reveals.forEach((node) => observer.observe(node));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      reveals.forEach((node) => observer.unobserve(node));
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  const toggleFilm = async () => {
    if (!film.current) return;
    if (film.current.paused) {
      await film.current.play();
    } else {
      film.current.pause();
    }
  };

  return (
    <main>
      <div className="page-progress" aria-hidden="true" />
      <div className="pointer-aura" aria-hidden="true" />

      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Airplay Speaker home">
          <AirplayMark compact />
          <span>Airplay Speaker</span>
        </a>
        <div className="nav-centre">
          <a href="#film">Film</a>
          <a href="#inside">Inside v3</a>
          <a href="#specs">Details</a>
        </div>
        <Link className="nav-download" href="/download">
          Get v3.0 <span aria-hidden="true">↘</span>
        </Link>
      </nav>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true">
          <img
            src={`${siteBasePath}/media/airplay-speaker-v3-poster.jpg`}
            alt=""
          />
          <div className="hero-image-shade" />
        </div>
        <div className="hero-grain" aria-hidden="true" />

        <div className="hero-copy">
          <p className="eyebrow"><i /> AIRPLAY SPEAKER 3.0 · ANDROID TV</p>
          <h1>
            Let the room
            <span>become the album.</span>
          </h1>
          <p className="hero-lead">
            Lossless AirPlay audio, living album artwork, synchronized lyrics,
            and optional on-device vocal separation—composed for the biggest
            screen in your home.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" href="/download">
              Download v3.0 <span aria-hidden="true">↓</span>
            </Link>
            <a className="button button-glass" href="#film">
              Watch the film <span aria-hidden="true">▶</span>
            </a>
          </div>
        </div>

        <div className="hero-status">
          <span><i /> RECORDED ON ANDROID TV</span>
          <strong>30 SEC · 1080P · NO AUDIO</strong>
        </div>

        <a className="hero-scroll" href="#manifesto">
          <span>Scroll to enter</span><i />
        </a>
      </section>

      <section className="manifesto" id="manifesto">
        <p className="section-index">01 / THE PREMISE</p>
        <div className="manifesto-copy" data-reveal>
          <p>Your television already owns the largest canvas in the room.</p>
          <h2>
            Airplay Speaker turns it into a calm, cinematic music receiver—
            <em>without turning the music into a menu.</em>
          </h2>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div>
          <span>LOSSLESS ALAC</span><i />
          <span>MOTION ARTWORK</span><i />
          <span>APPLE MUSIC LYRICS</span><i />
          <span>ON-DEVICE KARAOKE</span><i />
          <span>ANDROID TV</span><i />
          <span>LOSSLESS ALAC</span><i />
          <span>MOTION ARTWORK</span><i />
        </div>
      </div>

      <section className="film-section" id="film">
        <div className="film-heading" data-reveal>
          <div>
            <p className="section-index">02 / THE FILM</p>
            <h2>Thirty seconds.<br />No mockup.</h2>
          </div>
          <p>
            Captured directly from the current Android TV build. This is the
            full-screen motion stage, feathered artwork edge, live lyric panel,
            and centred metadata surface running on the television.
          </p>
        </div>

        <div className="film-shell" data-reveal>
          <div className="film-topline">
            <span><i /> AIRPLAY SPEAKER 3.0</span>
            <span>REAL ANDROID TV CAPTURE</span>
          </div>
          <div className="film-window">
            <video
              ref={film}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={`${siteBasePath}/media/airplay-speaker-v3-poster.jpg`}
              onPlay={() => setFilmPlaying(true)}
              onPause={() => setFilmPlaying(false)}
            >
              <source
                src={`${siteBasePath}/media/airplay-speaker-v3-film.mp4`}
                type="video/mp4"
              />
            </video>
            <button
              className="film-toggle"
              type="button"
              onClick={toggleFilm}
              aria-label={filmPlaying ? "Pause the Android TV film" : "Play the Android TV film"}
            >
              <span>{filmPlaying ? "Ⅱ" : "▶"}</span>
              {filmPlaying ? "Pause film" : "Play film"}
            </button>
            <div className="film-corner corner-a" />
            <div className="film-corner corner-b" />
          </div>
          <div className="film-caption">
            <span>1920 × 1080</span>
            <span>30 seconds</span>
            <span>Captured 29 July 2026</span>
            <span>No audio</span>
          </div>
        </div>
      </section>

      <section className="inside" id="inside">
        <div className="inside-intro" data-reveal>
          <p className="section-index">03 / INSIDE VERSION 3.0</p>
          <h2>Built around the song.<br /><em>Not around controls.</em></h2>
        </div>

        <div className="chapter-grid">
          {chapters.map((chapter) => (
            <article className={chapter.className} key={chapter.number} data-reveal>
              <div className="chapter-top">
                <span>{chapter.number}</span>
                <p>{chapter.kicker}</p>
              </div>

              {chapter.number === "01" && (
                <div className="motion-visual" aria-hidden="true">
                  <img src={`${siteBasePath}/media/airplay-speaker-v3-poster.jpg`} alt="" />
                  <span className="motion-feather" />
                  <span className="motion-glass">FULL-SCREEN MOTION</span>
                </div>
              )}

              {chapter.number === "02" && (
                <div className={`lyrics-visual mode-${lyricMode}`}>
                  <div className="lyrics-demo-top">
                    <Equalizer />
                    <span>LIVE LYRIC ENGINE</span>
                  </div>
                  <div className="lyrics-demo-content" aria-live="polite">
                    {lyricMode === "word" && (
                      <>
                        <small>(stay inside the colour)</small>
                        <p className="demo-active">
                          <strong>Let the room</strong> become the album
                        </p>
                        <p>And let the next line find you</p>
                      </>
                    )}
                    {lyricMode === "duet" && (
                      <>
                        <p className="demo-left">I can hear the city breathing</p>
                        <p className="demo-right">I can see it in the light</p>
                        <p className="demo-left demo-active">We arrive at the same time</p>
                      </>
                    )}
                    {lyricMode === "break" && (
                      <>
                        <small>INSTRUMENTAL</small>
                        <div className="demo-dots"><i /><i /><i /></div>
                        <p>Next line approaching</p>
                      </>
                    )}
                  </div>
                  <div className="lyrics-modes" role="group" aria-label="Lyric preview mode">
                    <button className={lyricMode === "word" ? "is-active" : ""} onClick={() => setLyricMode("word")}>Word</button>
                    <button className={lyricMode === "duet" ? "is-active" : ""} onClick={() => setLyricMode("duet")}>Duet</button>
                    <button className={lyricMode === "break" ? "is-active" : ""} onClick={() => setLyricMode("break")}>Break</button>
                  </div>
                </div>
              )}

              {chapter.number === "03" && (
                <div className="ai-visual" aria-hidden="true">
                  <div className="stem stem-vocal"><span>VOCAL</span><i /></div>
                  <div className="stem stem-music"><span>MUSIC</span><i /></div>
                  <div className="ai-chip">
                    <strong>MDX</strong>
                    <small>ON DEVICE</small>
                  </div>
                  <p>GPU → CPU → SMART FALLBACK</p>
                </div>
              )}

              <div className="chapter-copy">
                <h3>{chapter.title}</h3>
                <p>{chapter.body}</p>
                <span>{chapter.detail}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sound-section">
        <div className="sound-orbit orbit-one" aria-hidden="true" />
        <div className="sound-orbit orbit-two" aria-hidden="true" />
        <div className="sound-copy" data-reveal>
          <p className="section-index is-light">04 / THE SIGNAL</p>
          <h2>Lossless in.<br />Nothing hidden.</h2>
          <p>
            AirPlay arrives as 16-bit / 44.1 kHz ALAC. Keep Lossless PCM at
            unity gain, or intentionally enable Spatial Enhancement, Smart
            Vocal Focus, or Experimental AI. The app always tells you when the
            signal is being processed.
          </p>
          <div className="signal-route" aria-label="Audio signal path">
            <span>ALAC</span><i />
            <span>PCM</span><i />
            <span>OPTIONAL PROCESSING</span><i />
            <span>TV OUTPUT</span>
          </div>
        </div>
      </section>

      <section className="specs" id="specs">
        <div className="specs-heading" data-reveal>
          <p className="section-index">05 / DETAILS</p>
          <h2>Small app.<br />Big-screen intent.</h2>
        </div>
        <div className="spec-list">
          {specifications.map(([label, value], index) => (
            <div key={label} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{label}</p>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="final-card" data-reveal>
          <div className="final-glow" aria-hidden="true" />
          <AirplayMark />
          <p className="section-index is-light">AIRPLAY SPEAKER 3.0</p>
          <h2>Your music.<br />Now part of the room.</h2>
          <p>Open the app, choose the TV from AirPlay, and press play.</p>
          <div>
            <Link className="button button-light" href="/download">
              Download for Android TV <span aria-hidden="true">↓</span>
            </Link>
            <a
              className="source-link"
              href="https://github.com/l3kza08/Airplay-Speaker"
              target="_blank"
              rel="noreferrer"
            >
              View source on GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">
          <AirplayMark compact />
          <span>Airplay Speaker</span>
        </a>
        <p>Version 3.0.0 · Android TV 7.0+</p>
        <p>
          GPL-3.0 · Not affiliated with or endorsed by Apple Inc.
        </p>
      </footer>
    </main>
  );
}
