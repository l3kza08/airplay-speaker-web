"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const features = [
  {
    number: "01",
    title: "CD-quality clarity",
    body: "Receive lossless ALAC stereo at 16-bit / 44.1 kHz, with every detail intact for the living room.",
    className: "feature-card feature-audio",
  },
  {
    number: "02",
    title: "Lyrics that feel alive",
    body: "Glyph-shaped karaoke glow, independent backing vocals, stable Duet placement, and transitions that move with the sound.",
    className: "feature-card feature-lyrics",
  },
  {
    number: "03",
    title: "Artwork in motion",
    body: "Album-aware color fields blend behind both static and motion artwork without stealing the spotlight.",
    className: "feature-card feature-artwork",
  },
  {
    number: "04",
    title: "Made for the big screen",
    body: "Type, spacing, and motion tuned for 1920×1080 displays—and optimized to stay fluid on 2 GB TV boxes.",
    className: "feature-card feature-tv",
  },
];

const steps = [
  ["01", "Open Airplay Speaker", "Launch the app on Android TV and leave it on the calm listening screen."],
  ["02", "Choose it in AirPlay", "From your iPhone, iPad, or Mac, select Airplay Speaker in the AirPlay menu."],
  ["03", "Let the room come alive", "Artwork, ambient color, metadata, and lyrics appear automatically with the music."],
];

const previewTracks = [
  {
    title: "Midnight Drive",
    artist: "Nova Bloom",
    album: "Neon Afterglow",
    view: "karaoke",
    viewLabel: "Karaoke lyrics",
    aside: "(don’t let the moment go)",
    line: ["We", "could", "stay", "inside", "this", "light"],
    next: "Until the city wakes again",
    extra: ["Streetlights drift across the glass", "Every mile becomes a memory", "Stay until the morning comes"],
  },
  {
    title: "Everything We Never Said Before the Morning Came",
    artist: "The Paper Moons",
    album: "Quiet Signals",
    view: "duet",
    viewLabel: "Duet vocals",
    aside: "(say it one more time)",
    line: ["Every", "word", "comes", "back", "to", "you"],
    next: "I hear it moving through the room",
    extra: ["VOICE A · Every word comes back to you", "VOICE B · I kept the light on by the door", "TOGETHER · We finally say it out loud"],
  },
  {
    title: "Velvet Satellite",
    artist: "Low Summer",
    album: "Out of Orbit",
    view: "instrumental",
    viewLabel: "Instrumental break",
    aside: "(floating out of view)",
    line: ["Meet", "me", "where", "the", "sky", "turns", "blue"],
    next: "We can leave the noise behind",
    extra: ["The signal disappears", "A quiet orbit passes overhead", "We can leave the noise behind"],
  },
  {
    title: "After the Rain",
    artist: "Mira Lane",
    album: "Open Windows",
    view: "queue",
    viewLabel: "Up Next queue",
    aside: "(the clouds are moving on)",
    line: ["Color", "returns", "to", "every", "street"],
    next: "Play the song we saved for later",
    extra: ["Previous", "Now playing", "Up next"],
  },
  {
    title: "Paper Constellations",
    artist: "North Arcade",
    album: "Handwritten Skies",
    view: "plain",
    viewLabel: "Full text lyrics",
    aside: "Lyrics without timing",
    line: ["Fold", "the", "night", "into", "a", "map"],
    next: "And trace the stars that brought us home",
    extra: ["Fold the night into a map", "Leave a light beside the window", "Trace the stars that brought us home", "Keep the quiet close until the morning"],
  },
] as const;

const filmVideos = [
  { file: "film-01.mp4", label: "Original 15-second demo" },
  { file: "film-02.mp4", label: "Android TV capture 01" },
  { file: "film-03.mp4", label: "Android TV capture 02" },
  { file: "film-04.mp4", label: "Android TV capture 03" },
  { file: "film-05.mp4", label: "Android TV capture 04" },
  { file: "film-06.mp4", label: "Android TV capture 05" },
] as const;

function AirplayMark({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "airplay-mark small" : "airplay-mark"} aria-hidden="true">
      <span className="airplay-screen" />
      <span className="airplay-triangle" />
    </span>
  );
}

function Equalizer() {
  return (
    <span className="equalizer" aria-hidden="true">
      <i /><i /><i /><i /><i />
    </span>
  );
}

export default function Home() {
  const [connected, setConnected] = useState(false);
  const [motionOn, setMotionOn] = useState(true);
  const [lyricsMode, setLyricsMode] = useState<"karaoke" | "duet" | "break">("karaoke");
  const [appPreviewMode, setAppPreviewMode] = useState<"waiting" | "playing">("playing");
  const [appPreviewPlaying, setAppPreviewPlaying] = useState(true);
  const [previewTrackIndex, setPreviewTrackIndex] = useState(0);
  const [filmIndex, setFilmIndex] = useState(0);
  const [filmPlaying, setFilmPlaying] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const previewTrack = previewTracks[previewTrackIndex];
  const activeFilm = filmVideos[filmIndex];
  const previousPreviewTrack = previewTracks[(previewTrackIndex - 1 + previewTracks.length) % previewTracks.length];
  const nextPreviewTrack = previewTracks[(previewTrackIndex + 1) % previewTracks.length];
  const changePreviewTrack = (direction: number) => {
    setPreviewTrackIndex((index) => (index + direction + previewTracks.length) % previewTracks.length);
    setAppPreviewMode("playing");
    setAppPreviewPlaying(true);
  };
  const selectPreviewTrack = (index: number) => {
    setPreviewTrackIndex(index);
    setAppPreviewMode("playing");
    setAppPreviewPlaying(true);
  };
  const changeFilm = (direction: number) => {
    setFilmIndex((index) => (index + direction + filmVideos.length) % filmVideos.length);
    setFilmPlaying(true);
  };

  useEffect(() => {
    const root = document.documentElement;
    const onPointer = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    const onScroll = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll-progress", `${distance > 0 ? window.scrollY / distance : 0}`);
      setScrolled(window.scrollY > 24);
    };
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.13 },
    );
    const revealNodes = document.querySelectorAll("[data-reveal]");
    revealNodes.forEach((node) => observer.observe(node));
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!filmPlaying) return;
    const timer = window.setTimeout(() => {
      setFilmIndex((index) => (index + 1) % filmVideos.length);
    }, 15_000);
    return () => window.clearTimeout(timer);
  }, [filmIndex, filmPlaying]);

  const tilt = (event: MouseEvent<HTMLElement>, amount = 6) => {
    const node = event.currentTarget;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.setProperty("--tilt-x", `${(-y * amount).toFixed(2)}deg`);
    node.style.setProperty("--tilt-y", `${(x * amount).toFixed(2)}deg`);
  };

  const resetTilt = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  const spotlight = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--card-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--card-y", `${event.clientY - rect.top}px`);
  };

  return (
    <main>
      <div className="scroll-progress" aria-hidden="true" />
      <aside className="chapter-rail" aria-label="Page chapters">
        <a href="#top"><span>01</span><i /></a>
        <a href="#live-app"><span>02</span><i /></a>
        <a href="#experience"><span>03</span><i /></a>
        <a href="#features"><span>04</span><i /></a>
        <a href="#setup"><span>05</span><i /></a>
      </aside>

      <nav className={scrolled ? "site-nav is-scrolled" : "site-nav"} aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Airplay Speaker home">
          <AirplayMark small />
          <span>Airplay Speaker <sup>2.0</sup></span>
        </a>
        <div className="nav-links">
          <a href="#live-app">Experience</a>
          <a href="#experience">Film</a>
          <a href="#features">Inside</a>
        </div>
        <Link className="nav-cta magnetic" href="/download">Get v2.0 <span aria-hidden="true">↓</span></Link>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy hero-enter">
          <p className="eyebrow"><span /> AIRPLAY SPEAKER 2.0 · ANDROID TV</p>
          <h1>Music,<br /><em>made visible.</em></h1>
          <p className="hero-lead">
            A calm AirPlay receiver for the biggest screen in your home. Lossless ALAC,
            living artwork, Smart Vocal Focus, and lyrics shaped around every word.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary magnetic" href="/download">
              Download v2.0 <span aria-hidden="true">↓</span>
            </Link>
            <a className="button button-ghost magnetic" href="#live-app">Explore the app <span aria-hidden="true">↘</span></a>
          </div>
          <ul className="hero-specs" aria-label="Key specifications">
            <li><strong>Lossless</strong><span>16-bit ALAC</span></li>
            <li><strong>Word sync</strong><span>Up to 60 Hz</span></li>
            <li><strong>TV first</strong><span>2 GB ready</span></li>
          </ul>
        </div>

        <button
          className={connected ? "hero-object is-connected" : "hero-object"}
          type="button"
          onClick={() => setConnected((value) => !value)}
          onMouseMove={(event) => tilt(event, 9)}
          onMouseLeave={resetTilt}
          aria-label={connected ? "Disconnect visual AirPlay demo" : "Connect visual AirPlay demo"}
        >
          <div className="ambient-orbit orbit-one" />
          <div className="ambient-orbit orbit-two" />
          <div className="signal-particle particle-one" />
          <div className="signal-particle particle-two" />
          <div className="signal-particle particle-three" />
          <div className="app-icon-shell">
            <div className="app-icon">
              {connected ? <Equalizer /> : <AirplayMark />}
            </div>
          </div>
          <p className="listening"><span /> {connected ? "NOW PLAYING FROM IPHONE" : "LISTENING FOR AIRPLAY"}</p>
          <p className="device-name">{connected ? "Midnight Drive · Nova Bloom" : "Airplay Speaker"}</p>
          <span className="interaction-hint">{connected ? "Tap to reset" : "Tap to connect"}</span>
        </button>

        <a className="scroll-cue" href="#live-app">
          <span>Scroll to experience</span><i aria-hidden="true" />
        </a>
      </section>

      <section className="app-embed section-shell" id="live-app">
        <div className="app-embed-heading" data-reveal>
          <div>
            <p className="eyebrow"><span /> 02 · LIVE EXPERIENCE</p>
            <h2>The app.<br />No installation needed.</h2>
          </div>
          <div className="app-view-switcher" role="group" aria-label="App screen preview">
            <button type="button" className={appPreviewMode === "playing" ? "is-active" : ""} onClick={() => setAppPreviewMode("playing")}>Now Playing</button>
            <button type="button" className={appPreviewMode === "waiting" ? "is-active" : ""} onClick={() => setAppPreviewMode("waiting")}>Waiting Screen</button>
          </div>
        </div>

        <div className="embedded-tv-wrap" data-reveal>
          <div className="embedded-tv-bezel">
            <div
              className={`embedded-app track-theme-${previewTrackIndex} ${appPreviewPlaying ? "is-playing" : "is-paused"}`}
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft") changePreviewTrack(-1);
                if (event.key === "ArrowRight") changePreviewTrack(1);
              }}
              aria-label={`${previewTrack.title} by ${previewTrack.artist}. ${previewTrack.viewLabel}. Use Left and Right Arrow keys to change songs.`}
            >
              <div className="app-color-field field-a" />
              <div className="app-color-field field-b" />
              <div className="app-color-field field-c" />
              <div className="app-noise" />

              {appPreviewMode === "waiting" ? (
                <div className="embedded-waiting">
                  <div className="waiting-logo"><AirplayMark /></div>
                  <p><i /> LISTENING FOR AIRPLAY</p>
                  <strong>Airplay Speaker</strong>
                  <small>Choose this TV from the AirPlay menu on your device</small>
                </div>
              ) : (
                <div className={`embedded-now-playing view-${previewTrack.view}`} key={`${previewTrackIndex}-${previewTrack.view}`} aria-live="polite">
                  {previewTrack.view === "queue" ? (
                    <div className="embedded-queue-view">
                      <p className="queue-eyebrow">{previewTrack.album}</p>
                      <div className="embedded-queue-rail">
                        {[previousPreviewTrack, previewTrack, nextPreviewTrack].map((track, index) => {
                          const queueIndex = index === 0
                            ? (previewTrackIndex - 1 + previewTracks.length) % previewTracks.length
                            : index === 1
                              ? previewTrackIndex
                              : (previewTrackIndex + 1) % previewTracks.length;
                          return (
                            <div className={`queue-card track-theme-${queueIndex} ${index === 1 ? "is-current" : ""}`} key={`${track.title}-${index}`}>
                              <div className="queue-cover" aria-hidden="true"><i /><i /><i /></div>
                              <strong>{track.title}</strong>
                              <span>{track.artist}</span>
                            </div>
                          );
                        })}
                      </div>
                      <p className="queue-help">Use ← → to browse the queue</p>
                    </div>
                  ) : (
                    <>
                      <div className="embedded-album-side">
                        <div className={`embedded-cover cover-art-${previewTrackIndex}`} aria-label="Original abstract album artwork">
                          <div className="cover-sun" />
                          <div className="cover-horizon horizon-one" />
                          <div className="cover-horizon horizon-two" />
                          <div className="cover-grain" />
                        </div>
                        <div className="embedded-meta">
                          <div className="embedded-title-row">
                            <Equalizer />
                            <div className={previewTrack.title.length > 25 ? "meta-marquee is-long" : "meta-marquee"}><strong>{previewTrack.title}</strong></div>
                          </div>
                          <span>{previewTrack.artist}</span>
                          <small>{previewTrack.album}</small>
                        </div>
                      </div>

                      {previewTrack.view === "karaoke" && (
                        <div className="embedded-lyrics-side">
                          <div className="embedded-lyric-current">
                            <small>{previewTrack.aside}</small>
                            <p>{previewTrack.line.map((word, index) => <span key={`${word}-${index}`}>{word}{index < previewTrack.line.length - 1 ? " " : ""}</span>)}</p>
                          </div>
                          <p className="embedded-lyric-next">{previewTrack.next}</p>
                        </div>
                      )}

                      {previewTrack.view === "duet" && (
                        <div className="embedded-lyrics-side embedded-duet-view">
                          <div className="duet-line duet-a"><small>VOICE A</small><p>Every word comes back to you</p></div>
                          <div className="duet-line duet-b"><small>VOICE B</small><p>I kept the light on by the door</p></div>
                          <div className="duet-line duet-together"><small>TOGETHER</small><p>We finally say it out loud</p></div>
                        </div>
                      )}

                      {previewTrack.view === "instrumental" && (
                        <div className="embedded-lyrics-side embedded-break-view">
                          <small>INSTRUMENTAL</small>
                          <div className="embedded-music-break" aria-label="Instrumental break"><i /><i /><i /></div>
                          <p>{previewTrack.next}</p>
                        </div>
                      )}

                      {previewTrack.view === "plain" && (
                        <div className="embedded-lyrics-side embedded-plain-view">
                          <small>FULL LYRICS · NO TIMING AVAILABLE</small>
                          <div>{previewTrack.extra.map((line) => <p key={line}>{line}</p>)}</div>
                        </div>
                      )}

                      <div className="embedded-progress">
                        <span>1:28</span><div><i /></div><span>−2:46</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              <div className="browser-preview-label"><span /> INTERACTIVE WEB PREVIEW</div>
            </div>
            <div className="tv-chin"><i /><span>AIRPLAY SPEAKER</span></div>
          </div>

          <aside className="preview-remote" aria-label="Preview remote control">
            <div className="remote-copy">
              <span>WEB REMOTE</span>
              <p>Choose a song to open a different app screen.</p>
            </div>
            <div className="preview-track-list" aria-label="Choose a demo song">
              {previewTracks.map((track, index) => (
                <button
                  type="button"
                  className={appPreviewMode === "playing" && previewTrackIndex === index ? "is-active" : ""}
                  onClick={() => selectPreviewTrack(index)}
                  aria-pressed={appPreviewMode === "playing" && previewTrackIndex === index}
                  key={track.title}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><strong>{track.title}</strong><small>{track.viewLabel}</small></div>
                </button>
              ))}
            </div>
            <div className="remote-controls">
              <button type="button" onClick={() => changePreviewTrack(-1)} aria-label="Previous preview track">‹</button>
              <button className="remote-play" type="button" onClick={() => { setAppPreviewMode("playing"); setAppPreviewPlaying((value) => !value); }} aria-label={appPreviewPlaying ? "Pause preview" : "Play preview"}>
                {appPreviewPlaying ? "Ⅱ" : "▶"}
              </button>
              <button type="button" onClick={() => changePreviewTrack(1)} aria-label="Next preview track">›</button>
            </div>
            <div className="remote-status">
              <i className={appPreviewPlaying && appPreviewMode === "playing" ? "is-live" : ""} />
              {appPreviewMode === "waiting" ? "Waiting for AirPlay" : `${previewTrackIndex + 1}/${previewTracks.length} · ${appPreviewPlaying ? previewTrack.viewLabel : "Preview paused"}`}
            </div>
          </aside>
        </div>
        <p className="app-embed-note" data-reveal>This interactive recreation mirrors the app&apos;s TV layout. The film below shows the real Android TV build.</p>
      </section>

      <section className="experience section-shell" id="experience">
        <div className="section-intro" data-reveal>
          <p className="eyebrow"><span /> 03 · ON A REAL TV</p>
          <h2>Not a mockup.<br />Thirty seconds in the room.</h2>
          <p>Recorded directly from Android TV. The films move automatically every fifteen seconds, or you can choose one yourself.</p>
        </div>

        <div
          className="tv-frame tilt-surface"
          id="demo"
          data-reveal
          onMouseMove={(event) => tilt(event, 2.2)}
          onMouseLeave={resetTilt}
        >
          <div className="tv-shine" aria-hidden="true" />
          <div className="tv-topbar">
            <span className="tv-light" />
            <span>RECORDED ON ANDROID TV · FILM {String(filmIndex + 1).padStart(2, "0")}/{String(filmVideos.length).padStart(2, "0")} · 1080P</span>
            <span className="tv-time">00:15</span>
          </div>
          <div className="film-player">
            <video
              className="demo-video"
              key={activeFilm.file}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              poster={`${siteBasePath}/media/airplay-speaker-demo-poster.jpg`}
              onPlay={() => setFilmPlaying(true)}
              onPause={() => setFilmPlaying(false)}
            >
              <source src={`${siteBasePath}/media/${activeFilm.file}`} type="video/mp4" />
            </video>
            <button className="film-arrow film-arrow-left" type="button" onClick={() => changeFilm(-1)} aria-label="Previous Android TV film">‹</button>
            <button className="film-arrow film-arrow-right" type="button" onClick={() => changeFilm(1)} aria-label="Next Android TV film">›</button>
            <div className={filmPlaying ? "film-countdown" : "film-countdown is-paused"} key={`countdown-${filmIndex}`} aria-hidden="true"><i /></div>
          </div>
        </div>
        <div className="demo-caption" data-reveal>
          <div>
            <p>{activeFilm.label} · Changes automatically every 15 seconds · No audio</p>
            <div className="film-dots" role="group" aria-label="Choose an Android TV film">
              {filmVideos.map((film, index) => (
                <button
                  type="button"
                  className={filmIndex === index ? "is-active" : ""}
                  onClick={() => { setFilmIndex(index); setFilmPlaying(true); }}
                  aria-label={`Play ${film.label}`}
                  aria-pressed={filmIndex === index}
                  key={film.file}
                />
              ))}
            </div>
          </div>
          <span>Pause the film to pause rotation</span>
        </div>
      </section>

      <section className="features section-shell" id="features">
        <div className="section-heading-row" data-reveal>
          <div>
            <p className="eyebrow"><span /> 04 · INSIDE VERSION 2.0</p>
            <h2>Only what the music needs.</h2>
          </div>
          <p>Lossless sound, stable duet placement, album-aware color, and smooth motion—tuned to stay responsive on modest TV hardware.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className={`${feature.className} spotlight-card`} key={feature.number} data-reveal onMouseMove={spotlight}>
              <div className="card-spotlight" aria-hidden="true" />
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
                <>
                  <div className={motionOn ? "color-orbs" : "color-orbs is-paused"} aria-hidden="true"><i /><i /><i /></div>
                  <button className="motion-toggle" type="button" onClick={() => setMotionOn((value) => !value)} aria-pressed={motionOn}>
                    <span>{motionOn ? "Motion on" : "Motion off"}</span><i />
                  </button>
                </>
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

      <section className="lyrics-showcase" id="lyrics">
        <div className="lyrics-backdrop" />
        <div className="lyrics-meta" data-reveal>
          <p className="eyebrow light"><span /> INTERACTIVE LYRICS LAB · V2.0</p>
          <h2>Every line<br />knows its place.</h2>
          <p>Switch between lyric behaviors to preview the glow, singer placement, and breathing break indicator used on TV.</p>
          <div className="mode-switcher" role="group" aria-label="Lyrics preview mode">
            {(["karaoke", "duet", "break"] as const).map((mode) => (
              <button key={mode} type="button" className={lyricsMode === mode ? "is-active" : ""} onClick={() => setLyricsMode(mode)}>
                {mode === "break" ? "Instrumental" : mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className={`lyrics-stage mode-${lyricsMode}`} aria-live="polite" data-reveal>
          <div className="stage-label"><Equalizer /><span>LIVE PREVIEW · 60 HZ</span></div>
          {lyricsMode === "karaoke" && (
            <div className="lyrics-scene karaoke-scene">
              <p className="lyric-muted lyric-left">You can hear it in the silence</p>
              <div className="lyric-active lyric-left">
                <small>(come a little closer)</small>
                <p className="karaoke-line"><span>Let</span> <span>the</span> <span>music</span> <span>find</span> <span>you</span></p>
              </div>
              <p className="lyric-next lyric-right">I&apos;ll meet you in the light</p>
            </div>
          )}
          {lyricsMode === "duet" && (
            <div className="lyrics-scene duet-scene">
              <div className="singer-tag">VOICE A</div>
              <p className="duet-left">Hold on to the feeling</p>
              <div className="singer-tag tag-right">VOICE B</div>
              <p className="duet-right">I can see it in your eyes</p>
              <p className="duet-left duet-current">We&apos;ll find our way tonight</p>
            </div>
          )}
          {lyricsMode === "break" && (
            <div className="lyrics-scene break-scene">
              <p>Instrumental break</p>
              <div className="break-dots" aria-label="Music break"><i /><i /><i /></div>
              <small>Each light rises as the next lyric approaches</small>
            </div>
          )}
          <div className="fake-progress"><i /></div>
        </div>
      </section>

      <section className="setup section-shell" id="setup">
        <div className="section-heading-row setup-heading" data-reveal>
          <div>
            <p className="eyebrow"><span /> 05 · SIMPLE BY DESIGN</p>
            <h2>Open. Choose.<br />Listen.</h2>
          </div>
          <div className="compatibility">
            <span>Compatibility</span>
            <strong>Android TV 7.0+</strong>
            <small>Your sender and TV need to be on the same local network.</small>
          </div>
        </div>

        <div className="steps">
          {steps.map(([number, title, body]) => (
            <article className="step" key={number} data-reveal>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>

        <div className="closing-card tilt-surface" data-reveal onMouseMove={(event) => tilt(event, 2.4)} onMouseLeave={resetTilt}>
          <div className="closing-glow" />
          <div className="closing-rings" aria-hidden="true"><i /><i /><i /></div>
          <AirplayMark />
          <p className="eyebrow light"><span /> READY WHEN YOU ARE</p>
          <h2>The TV you already own.<br />A completely new way to listen.</h2>
          <p>Open the app, choose AirPlay, and let every song fill the room.</p>
          <div className="closing-actions">
            <Link className="button button-light magnetic" href="/download"><span aria-hidden="true">↓</span> Download for Android TV</Link>
            <a className="text-link" href="#demo">Replay the film <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">
          <AirplayMark small />
          <span>Airplay Speaker</span>
        </a>
        <p>AirPlay music receiver for Android TV</p>
        <p className="legal"><Link href="/download">Download v2.0.0</Link> · Open source under GPL-3.0 · Not affiliated with or endorsed by Apple Inc.</p>
      </footer>
    </main>
  );
}
