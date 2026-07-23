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
  assert.match(html, /Every song/);
  assert.match(html, /Interactive Lyrics Lab/i);
  assert.match(html, /THE APP, INSIDE THE SITE/);
  assert.match(html, /Karaoke lyrics/);
  assert.match(html, /Duet vocals/);
  assert.match(html, /Instrumental break/);
  assert.match(html, /Up Next queue/);
  assert.match(html, /Full text lyrics/);
  assert.match(html, /airplay-speaker-demo\.mp4/);
  assert.match(html, /CD Quality/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("renders the APK download page", async () => {
  const response = await render("/download");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Download Airplay Speaker for Android TV/);
  assert.match(html, /Airplay-Speaker-v0\.14\.13\.apk/);
  assert.match(html, /WHAT’S NEW IN v0\.14\.13/);
  assert.match(html, /b855208a67bdad9eaaab1101becb9ea69966bf1ae36af2de353173accc9a1a26/);
  assert.match(html, /Android TV 7\.0\+/);
  assert.match(html, /adb install -r/);
});
