import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the Airplay Speaker landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Airplay Speaker/);
  assert.match(html, /Let the room/);
  assert.match(html, /Thirty seconds/);
  assert.match(html, /airplay-speaker-v3-film\.mp4/);
  assert.match(html, /Full-screen motion/i);
  assert.match(html, /Experimental AI/i);
  assert.match(html, /16-bit \/ 44\.1 kHz ALAC/);
  assert.match(html, /APPLE MUSIC LYRICS/);
  assert.match(html, /Version 3\.0\.0/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("renders the APK download page", async () => {
  const response = await render("/download");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Download Airplay Speaker 3\.0 for Android TV/);
  assert.match(html, /Airplay-Speaker-v3\.0\.0\.apk/);
  assert.match(html, /WHAT CHANGED SINCE v2\.5\.0/);
  assert.doesNotMatch(html, /APK_SHA256_PENDING|APK_SIZE_PENDING/);
  assert.match(html, /Android TV 7\.0\+/);
  assert.match(html, /adb install -r Airplay-Speaker-v3\.0\.0\.apk/);
});
